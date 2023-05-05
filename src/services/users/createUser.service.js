import users from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const dateCreate = new Date();
    const dateUpdate = new Date();

    const newUser = {
        email,
        name,
        password: hashedPassword,
        isAdm,
        createdOn: dateCreate,
        updatedOn: dateUpdate,
        uuid: uuidv4(),
    }

    users.push(newUser);

    const returnedNewUser = { ...newUser }

    delete returnedNewUser.password

    return returnedNewUser;

}

export default createUserService;