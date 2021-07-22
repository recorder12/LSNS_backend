Urls :

site url : https://lsns-backend.herokuapp.com

GET users : /users

POST join : /users/join
            Content-Type: application/json

            {
                "email" : email,
                "password" : password
            }

POST login : /users/login
            Content-Type: application/json

            {
                "email" : email,
                "password" : password
            }

POST password change : /users/change-password
            Content-Type: application/json

            {
                "email" : "byeonggeon@naver.com",
                "password" : "password",
                "newpassword" : "password2"
            }



POST photo upload : /photo/upload
            Content-Type: application/json

            {
                "title" : "title",
                "email" : "email",
                "description" : "description",
                "long" : "long",
                "latt" : "latt",
                "file" : file
            }

POST photo edit : /photo/edit
            Content-Type: application/json

            {
                "title" : "title",
                "_id" : "_id",
                "description" : "description"
            }

POST photo delete : /photo/delete
            Content-Type: application/json

            {
                "_id": "_id"
            }

POST photo search : /photo/search
            Content-Type: application/json

            {
                "long" : "long",
                "latt" : "latt",
                "distance" : "distance",
            }

            ## distance 1 = 1 meter
      


      



1) 제품 설정 제안사항 :

    이미지 파일 설정 :

        - 1:1 이미지 비율.
        - 고정 해상도 추후 설정
    
    이미지 DB 저장 :

        - 원본 파일 저장.
        - 저해상도 파일 썸네일로 저장.


2) To do list :

    Front-end :

        - 업로드 최소 해상도 설정 및 만족하지 않을 수 업로드 금지 구현.
        - 사진 비율 1:1로 고정 (인스타그램 업로드 방식).
        - 고정된 해상도 적용.
        - 동적 이미지 생성 및 구현.
        - Login Auth.
        - (s3에 다이렉트로 업로드 후 url 첨가한 json을 서버로 전달)

    Back-end :

        - 썸네일 파일 변환하여 저장 (AWS Lambda or server에서 전환하여 저장)
        - AWS 디플로이.
        - Login Auth.


3) 개선해야할 사항 :

    1) 이미지 파일 업로드 : 
        
        - 개선해야할 이유 : AWS serverless를 사용하여 Node 서버 사용량을 최소화를 목적으로 함
        - 방법 :
                        
            User (이미지 해상도 저하) --> S3에 업로드 (_id, title, description, file) 
            --> S3 Lambda 사용하여 thumnail 형성 --> MongoDB에 전달 (_id, imageURL, thumnailURL, title, description)
            --> response (image Url, thumnail Url) 

    2) Login Auth :
   
        - 개선해야할 이유 : iOS 앱에서 자동 로그인한 결과를 유지할 필요 있음
        - 방법 :

            1) Amazon Cognito 사용 : serverless로 가능하지만, 요금이 책정됨
                                    https://aws.amazon.com/ko/cognito/
                                    https://docs.aws.amazon.com/ko_kr/cognito/latest/developerguide/authentication.html
                                    
            2) MongoDB 사용 : 무료인 듯. https://docs.mongodb.com/realm/tutorial/ios-swift/
