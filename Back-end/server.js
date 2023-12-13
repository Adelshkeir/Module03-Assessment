import express from "express"
import articleRouter from "./articleroute.js";
import userRouter from "./userroute.js";
const app = express()






app.use(express.json());

app.use("/upload", express.static('upload'))






app.use('/article', articleRouter);

app.use('/user', userRouter);




app.listen(4002,()=>{
    console.log("connected succefully")
})