
Location based SNS service (Backend)
        
        The app service provides a platform to share photos of users depending on where they were taken. 
        Users can share images of landmarks and cool images taken at unexpected locations on Google Maps. 
        This service consists of iOS and backend development. This backend server provides services for 
        user login and photos at specific locations.
        
        
Urls :

site url : https://lsns-backend.herokuapp.com

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
      


