const mongoose=required("mongoose")
const Schema= mongoose.schema
new Schema({
    title:{
    type:String
    },
    substitle:{
    type:String
    },
    description:{
    type:String
    }
    
})
const Blog= mongoose.model("Blog",blogSchema)
module.exports=blog