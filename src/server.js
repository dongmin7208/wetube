import express from "express"
//app 이 아니라도괜찮음.
const app = express();
const PORT = 4000;


const logger = (req, res, next) => {
    console.log("I'm in the middle!");
    // return res.send("I havethe Power")
    console.log(`${req.method} ${req.url}`)
    next()
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === '/protected') {
        return res.send("<h1>Not allowed</h1>")
    }
    console.log("Allowed, you may continue.")
    next();
}

//requests, response
const handleHome = (req, res) => {
    // return res.end();
    // return res.send("<h1>hello!</h1>")
    return res.send("I love middlewares")
}
//requests, response
// const handleLogin = (req, res) => {
//     // return res.end();
//     // return res.send("Login here!")
//     return res.send({ message: "Login here" })
// }

const handleProtected = (req, res) => {
    return res.send("welcome to the private lounge.")
}
app.use(logger)
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);
// global middleware을 만들어줄수있음. 어느 url에도 작동시켜줌!

// app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT}`)

app.listen(PORT, handleListening);