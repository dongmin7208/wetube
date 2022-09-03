//file name only lower case
export const trending = (req, res) => res.render("home", { pageTitle: "Home", dondon: "don~" });
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.send("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
};