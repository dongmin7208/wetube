import express from "express"
import { watch, getEdit, postEdit, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();


videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload)

// videoRouter.get("/upload", getUpload)
// videoRouter.post("/upload", postUpload)
// videoRouter.get("/:id/edit", getEdit)
// videoRouter.post("/:id/edit", postEdit)

// videoRouter.get("/:id/delete", deleteVideo)
// videoRouter.get("/upload", upload)

export default videoRouter