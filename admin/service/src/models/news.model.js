import mongoose from "mongoose";

const newsSchema = mongoose.Schema({
       title_small: {type: String, maxLength: 100000},
       title_big: {type: String, maxLength: 10000000},
       image: {type: String},
       description: {type: String, maxLength: 1000000},
});
// newsSchema.index({ title_small: 'text' })
export default mongoose.model("News", newsSchema);
