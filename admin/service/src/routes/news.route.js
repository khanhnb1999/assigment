import express from "express";
import multer from 'multer';

import {
       searchNews,
       uploadNewsImage,
       getAllNews,
       getOneNews,
       addNews,
       updateNews,
       removeNews,
       getAllNewsLimit_8
} from "../controllers/news.controller";
const router = express.Router();

const storage = multer.diskStorage({
       destination: (req, file, cb) => {
              cb(null, "./src/images/news/");
       },
       filename: (req, file, cb) => {
              cb(null, req.body.name);
       },
});
const upload = multer({storage: storage});

router.get("/news", getAllNews);
router.get("/news/search/:keyword", searchNews);
router.get("/news_8", getAllNewsLimit_8);
router.get("/news/:id", getOneNews);
router.post("/add-news",addNews);
router.post("/uploads",upload.single('image'),uploadNewsImage);
router.put("/uploads",upload.single('image'),uploadNewsImage);
router.put("/news/:id", updateNews);
router.delete("/delete-news/:id", removeNews);

export default router;