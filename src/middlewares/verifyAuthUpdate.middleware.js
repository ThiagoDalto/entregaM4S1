import jwt from "jsonwebtoken";
import "dotenv/config"

const verifyAuthUpdateMiddleware = (request, response, next) => {
    let token = request.headers.authorization;
  
    const {uuid} = request.params;

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
        if(!decoded.isAdm && uuid !== decoded.sub) {
            return response.status(401).json({message: "Missing admin permissions"})
        }

        next();
    })

};

export default verifyAuthUpdateMiddleware;