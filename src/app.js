import express from "express";
import userRouter from "./routes/users.routes"
import loginRouter from "./routes/userLogin.routes"

import "dotenv/config"

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.use("/login", loginRouter);
    
const PORT = process.env.PORT || 3000   

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
});



export default app