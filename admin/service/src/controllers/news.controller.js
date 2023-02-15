import News from '../models/news.model';

const searchNews = async (req, res) => {
       try {
              const keyword = req.params.keyword;
              const news = await News.find({ $text: { $search: keyword }})
              return res.status(200).json(news);
       } catch (error) {
              res.status(400).json({
                     message: error
              });
       }
};

const uploadNewsImage = async (req, res) => {
       try {
              res.status(200).json({
                     message: "Upload image success"
              });
       } catch (error) {
              res.status(400).json({
                     message: 'Upload image error'
              });
       }
}

const getAllNews = async (req, res) => {
       try {
              const news = await News.find().sort({title_small: 1});
              res.status(200).json(news);
       } catch (error) {
              res.status(400).json({
                     message: error
              });
       }
};

const getAllNewsLimit_8 = async (req, res) => {
       try {
              const news = await News.find().sort({ title_small: -1 }).limit(8)
              res.status(200).json(news);
       } catch (error) {
              res.status(400).json({
                     message: error
              });
       }
};

const getOneNews = async (req, res) => {
       try {
              const id = req.params.id;
              const news = await News.findOne({
                     _id: id
              });
              res.status(200).json(news)
       } catch (error) {
              res.status(400).json({
                     message: "news not found"
              });
       }
}

const addNews = async (req, res) => {
       try {
              // let file = req.body.image;

              const getData = req.body;
              const news = await new News(getData).save();
              res.status(200).json(news)
       } catch (error) {
              res.status(400).json({
                     message: "Not add news"
              });
       }
}

const updateNews = async (req, res) => {
       try {
              const id = req.params.id;
              const getData = req.body;
              const news = await News.findOneAndUpdate({
                     _id: id
              }, getData, {
                     news: true
              });
              res.status(200).json(news)
       } catch (error) {
              res.status(400).json({
                     message: "Cập nhật không thành công",
              });
       }
}

const removeNews = async (req, res) => {
       try {
              const id = req.params.id;
              const news = await News.findOneAndDelete({
                     _id: id
              });
              res.status(200).json(news);
       } catch (error) {
              res.status(400).json({
                     message: "Xóa không thành công"
              });
       }
}

export {
       searchNews,
       uploadNewsImage,
       getAllNews,
       getOneNews,
       addNews,
       updateNews,
       removeNews,
       getAllNewsLimit_8
}