import passport from "passport";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
