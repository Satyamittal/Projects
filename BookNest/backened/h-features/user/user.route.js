// All routes of particular feature in this file

import { express } from "../../e-modules/external-modules.js";
import { UserController } from "./user.controller.js";

export const router = express.Router();

// create class to use non-static functions
const userController = new UserController() ;

router.get('/',userController.signIn ) ;

// router.get('/',controllerFunction) 
/*

*/