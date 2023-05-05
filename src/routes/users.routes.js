import { Router } from "express"; 

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controler";
import listUserProfileControllers from "../controllers/listUserProfile.controller";
import listUsersControllers from "../controllers/listUsers.controller";
import updatedUserController from "../controllers/updateUser.controller";
import verifyAuthDeleteMiddleware from "../middlewares/verifyAuthDelete.middleware";


import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyAuthUpdateMiddleware from "../middlewares/verifyAuthUpdate.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserIsAdminMiddleware from "../middlewares/verifyUserIsAdmin.middleware";


const router = Router();

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.get("", verifyAuthTokenMiddleware, verifyUserIsAdminMiddleware, listUsersControllers);
router.get("/profile", verifyAuthTokenMiddleware, listUserProfileControllers);
router.patch("/:uuid", verifyAuthTokenMiddleware, verifyAuthUpdateMiddleware, updatedUserController)
router.delete("/:uuid", verifyAuthTokenMiddleware, verifyAuthDeleteMiddleware, deleteUserController)


export default router;