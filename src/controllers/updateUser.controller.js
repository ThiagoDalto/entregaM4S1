import updateUserService from "../services/users/updateUser.service";

const updatedUserController = (request, response) => {
    const { uuid } = request.params;
    const { name, email, updatedOn} = request.body;

    const updatedUser = updateUserService(uuid, name, email, updatedOn);
    
    return response.status(200).json(updatedUser)

}

export default updatedUserController;