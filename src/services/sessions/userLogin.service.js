import users from "../../database";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import 'dotenv/config' 

const userLoginService = async (email, password) => {
    const user = users.find((user) => user.email === email);

    if(!user) {
        
        throw new Error("Wrong email/password");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
        throw new Error("Wrong email/password");
    }
    const token = jwt.sign(
        { 
            email: user.email,
            isAdm: user.isAdm,
            uuid: user.uuid
            
        }, 
        process.env.SECRET_KEY, 
        { 
            expiresIn: "24h",
            subject: user.uuid
        }
        );
        
    return  token 
        
}

export default userLoginService;
