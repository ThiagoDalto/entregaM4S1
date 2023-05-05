import { request } from "express";
import deleteUserService from "../services/users/deleteUser.service";

const deleteUserController = (request, response) => {
    const { uuid } = request.params;

    const deleteUser = deleteUserService(uuid);

    return response.status(200).json(deleteUser);
};

export default deleteUserController;