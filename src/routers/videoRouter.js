import express from "express"
import { see, getEdit, postEdit, deleteVideo, upload } from "../controllers/videoController";

const videoRouter = express.Router();


videoRouter.get("/:id", see)
videoRouter.get("/:id/edit", getEdit)
videoRouter.post("/:id/edit", postEdit)
// videoRouter.get("/:id/delete", deleteVideo)
// videoRouter.get("/upload", upload)

export default videoRouter