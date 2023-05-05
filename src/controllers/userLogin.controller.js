import userLoginService from "../services/sessions/userLogin.service";

const userLoginController = async (request, response) => {
    
    try{
        const { email, password } = request.body;
        const token =  await userLoginService(email, password);
        return response.json({token}) 

    }catch (error) {
        return response.status(401).json({message: error.message})
    }
}

export default userLoginController;

   
