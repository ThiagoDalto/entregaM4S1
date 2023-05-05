import jwt from "jsonwebtoken";
import listUserProfileService from "../services/users/listUserProfile.service";

const listUserProfileControllers = (request, response) => {
    let token = request.headers.authorization;

    token = token.split(" ")[1];
 
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        const  uuid  = decoded.uuid;

        const user = listUserProfileService(uuid);
        
        return response.status(200).json(user);
    })
    
}
      

    
    


export default listUserProfileControllers