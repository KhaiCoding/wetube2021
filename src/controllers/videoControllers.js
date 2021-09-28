import { Express } from "express";

let videos = [
    {
        title: "First Video",
        rating:5,
        comments:2,
        createdAt: "2 minutes ago",
        views:59,
        id:1
    },
    {
        title: "Second Video",
        rating:5,
        comments:2,
        createdAt: "2 minutes ago",
        views:59,
        id:2
    },
    {
        title: "Third Video",
        rating:5,
        comments:2,
        createdAt: "2 minutes ago",
        views:59,
        id:3
    },
]

export const trending = (req, res) => {
    
    res.render("Home", { pageTitle: "Home", videos})
};
export const search = (req, res) => res.send("search Videos");
export const upload = (req, res) => res.send("Upload Videos");

export const watch = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1]
    // console.log("Show video", id)
    res.render("watch", {pageTitle: `Watching: ${video.title}`, video});
}

// painting form function
export const getEdit = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1]
    // console.log(req.params)
    res.render("edit", {pageTitle:`Editing: ${video.title}`, video});
}

// saving changes function
export const postEdit = (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    // console.log(req.body);
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
}

export const remove = (req, res) => {
    console.log(req.params)
    res.send(`Remove Videos ${req.params.id}번 동영상 삭제 중`);
}

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle:"Upload Video"});
}
export const postUpload = (req, res) => {
    // console.log(req.body);
    // here we will add a video to the videos array.
    const newVideo = {
        title: req.body.title,
        rating:0,
        comments:0,
        createdAt: "just now",
        views:0,
        id:videos.length+1
    }
    videos.push(newVideo)
    return res.redirect("/");
}

