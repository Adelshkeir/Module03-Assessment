import express from "express"
import articleRouter from "./articleroute.js";
import userRouter from "./userroute.js";
import cors from "cors"
const app = express()






app.use(express.json());

app.use("/upload", express.static('upload'))

app.use(
    cors({
      origin: "*", // Replace with your frontend's URL
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );




app.use('/article', articleRouter);

app.use('/user', userRouter);




app.listen(4002,()=>{
    console.log("connected succefully")
})