"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const jwt = __importStar(require("jsonwebtoken"));
require("../auth/middleware");
const dummy_json_1 = __importDefault(require("../utils/dummy.json"));
const secret_1 = require("../utils/secret");
class UserController {
    authenticateUser(req, res) {
        const dataCheck = dummy_json_1.default.filter((elm) => elm.username === req.body.username);
        if (!dataCheck.length) {
            return res.send({ message: `username ${req.body.username} not found.` });
        }
        if (dataCheck.length) {
            const comparePassword = dataCheck.filter(({ password }) => password === req.body.passport);
            if (comparePassword.length) {
                return res.send({
                    message: `${req.body.username} password is not matching.`,
                });
            }
            const token = jwt.sign({ username: req.body.username }, secret_1.JWT_SECRET);
            res.status(200).send({ token: token });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map