const mongoose = require("mongoose");
const Author = mongoose.model("Author");

module.exports = {
    getAuthors: function(req, res) {
        Author.find({}, function(err,author){
            if(err){
                console.log("Error", err)
                res.json(err);
            } else{
                console.log("Success", author)
                res.json(author);
            }
        })
    },

    getAuthor: function(req,res){
        Author.findById({_id: req.params.id}, function(err,author){
            if(err){
                console.log("Error", err)
                res.json(err);
            } else{
                console.log("Success", author)
                res.json(author)
            }
        })
    },

    createAuthor: function(req,res){
        Author.create(req.body, function(err,author){
            if(err){
                console.log({message:"Error",data: err});
                res.json({message:"Error",data: err});
            } else{
                console.log("Success", author)
                res.json(author);
            }
        })
    },

    updateAuthor: function(req, res){
        Author.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators:true}, function(err,author){
            if(err){
                console.log({message:"Error",data: err});
                res.json({message: "Error", data: err});
            } else{
                console.log("Success", author)
                res.json(author);
            }
        })
    },

    deleteAuthor: function(req, res){
        Author.deleteOne({_id: req.params.id}, function(err,author){
            if(err){
                console.log("Error", err)
                res.json(err);
            } else{
                console.log("Success", author)
                res.json(author);
            }
        })
    }
};