const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required:[true,'Name must be at least 3 characters'], minlength:3}
},{timestamps: true});

mongoose.model("Author", AuthorSchema);