import express from "express"
//app 이 아니라도괜찮음.
const app = express();
const PORT = 4000;


const gossipMiddleware = (req, res, next) => {
    console.log("I'm in the middle!");
    next()
}
//requests, response
const handleHome = (req, res, next) => {
    return res.end();
    // return res.send("<h1>hello!</h1>")
    // return res.send("I still Page!")
}
//requests, response
// const handleLogin = (req, res) => {
//     // return res.end();
//     // return res.send("Login here!")
//     return res.send({ message: "Login here" })
// }

// app.get("/login", handleLogin);
app.get("/", gossipMiddleware, handleHome);

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT}`)

app.listen(PORT, handleListening);