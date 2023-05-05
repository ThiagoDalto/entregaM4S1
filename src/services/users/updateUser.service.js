import users from "../../database";

const updateUserService = (uuid, name, email) => {
    const updatedDate = new Date();


    const userUpdated = {
       uuid,
       name,
       email,
       updatedOn: updatedDate,
    }

    const userIndex = users.findIndex((user) => user.uuid === uuid);

    if (userIndex === -1) {
        return "User doesn't exist."
    }

    users[userIndex] = {...users[userIndex], ...userUpdated}

    const updatedUser = {...users[userIndex]};

    delete updatedUser.password 

   

    return updatedUser

}

export default updateUserService;