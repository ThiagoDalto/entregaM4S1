import users from "../../database";

const listUserProfileService = (uuid) => {
   
    const loggedUser = users.find((user) => user.uuid === uuid)
    
    const noPasswordLoggedUser = {...loggedUser};
    delete noPasswordLoggedUser.password;
    
    
    return noPasswordLoggedUser;

};

export default listUserProfileService;

