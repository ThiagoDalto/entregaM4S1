import jwt from "jsonwebtoken";
import "dotenv/config"

const verifyAuthTokenMiddleware = (request, response, next) => {
    let token = request.headers.authorization;
  
    

    if(!token) {
        return response
        .status(401)
        .json({ message: "Missing authorization headers" })
    }

    token = token.split(" ")[1];
 
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if(error) {
            return response.status(401).json({ message: "Invalid Token." })
        }
        request.user = {
            email: decoded.email,
            uuid: decoded.uuid,
            isAdm: decoded.isAdm
        }

        next();
    })

};

export default verifyAuthTokenMiddleware;