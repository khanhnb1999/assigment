import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
       name: {type: String, required: true},
       team: {type: Number, required: true},
       startDate: {type: String, required: true},
});

export default mongoose.model('Projects', projectSchema);
