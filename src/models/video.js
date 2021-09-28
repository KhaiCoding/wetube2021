import  Mongoose  from "mongoose";

const videoSchema = new Mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{type:String}],
    meta: {
        views: Number,
        rating: Number,
    },
});

const videoModel = Mongoose.model("Video", videoSchema);

export default videoModel;