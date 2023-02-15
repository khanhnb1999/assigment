import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import newsRouter from "./routes/news.route";
import clubRouter from "./routes/club.route";
import zoneRouter from "./routes/zone.route";
import userRouter from './routes/author.route';
import getUserRouter from './routes/user.route';

import employeeRouter from './routes/employee.route';
import projectRouter from './routes/project.route';
import taskRouter from './routes/task.route';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/image', express.static(path.join(__dirname + `\\images\\news`)));
app.use('/image', express.static(path.join(__dirname + `\\images\\clubs`)));

app.use(express.json());
app.use(morgan("tiny"));


mongoose
       .connect("mongodb://127.0.0.1:27017/angular")
       .then(() => console.log("Ket noi thanh cong"))
       .catch((error) => console.log("Ket noi khong thanh cong", error));

app.use("/api", newsRouter);
app.use("/api", clubRouter);
app.use("/api", userRouter);
app.use("/api", getUserRouter);

app.use("/api", zoneRouter);
app.use("/api", employeeRouter);
app.use("/api", projectRouter);
app.use("/api", taskRouter);

app.listen(3002, () => {
       console.log("http://localhost:3002")
});
