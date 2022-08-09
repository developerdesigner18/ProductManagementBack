"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
// import passportApiKey from "passport-headerapikey";
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const dummy_json_1 = __importDefault(require("../utils/dummy.json"));
const secret_1 = require("../utils/secret");
const LocalStrategy = passport_local_1.default.Strategy;
const JwtStrategy = passport_jwt_1.default.Strategy;
const ExtractJwt = passport_jwt_1.default.ExtractJwt;
passport_1.default.use(new LocalStrategy({ usernameField: "username" }, (username, password, done) => {
    const dataCheck = dummy_json_1.default.filter((elm) => elm.username === username);
    console.log("username", username, dataCheck);
    if (!dataCheck.length) {
        return done(undefined, false, {
            message: `username ${username} not found.`,
        });
    }
    if (dataCheck.length) {
        console.log("dataCheck", dataCheck);
    }
    // User.findOne({ username: username.toLowerCase() }, (err, user: any) => {
    //   if (err) {
    //     return done(err)
    //   }
    //   if (!user) {
    //     return done(undefined, false, { message: `username ${username} not found.` })
    //   }
    //   user.comparePassword(password, (err: Error, isMatch: boolean) => {
    //     if (err) {
    //       return done(err)
    //     }
    //     if (isMatch) {
    //       return done(undefined, user)
    //     }
    //     return done(undefined, false, { message: 'Invalid username or password.' })
    //   })
    // })
}));
passport_1.default.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret_1.JWT_SECRET,
}, function (jwtToken, done) {
    //   User.findOne({ username: jwtToken.username }, function (err, user) {
    //     if (err) {
    //       return done(err, false);
    //     }
    //     if (user) {
    //       return done(undefined, user, jwtToken);
    //     } else {
    //       return done(undefined, false);
    //     }
    //   });
}));
//# sourceMappingURL=passportHandler.js.map