const express = require("express")
const path = require("path")

const port = 3000

const app = express()

// /api endpoint a msgnek
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server! működöm geci" });
});

//sima port
app.listen(port, () => {
    console.log(`server is listening: http://127.0.0.1:${port}`)
})