import mongoose from "mongoose";

const userSchema = mongoose.Schema({
       name: {type: String, required: true, maxLength: 40},
       email: {type: String, required: true, maxLength: 50},
       password: {type: String, required: true, maxLength: 500000}
});


export default mongoose.model('Users', userSchema);

