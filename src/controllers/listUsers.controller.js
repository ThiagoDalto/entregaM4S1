import listUserService from "../services/users/listUsers.service";

const listUsersControllers =  (request, response) => {
    const users = listUserService();
    

    return response.status(200).json(users);

}

export default listUsersControllers;