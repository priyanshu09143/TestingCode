import axios from "axios";
import express from "express";
import mongoose from "mongoose";
const app = express()

mongoose.connect("mongodb://localhost:27017/test").then(() => {
    console.log("database is Connected")
}).catch(() => {
    console.log('something went wrong in data base')
})

// Kyu gand marva rha h bhai kaam kr lene de
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.static('public'))


app.get("/", async (req, res) => {

    let data = await axios.get("https://dummyjson.com/products")

    res.render("index", { data })
})

app.listen(3000, (req, res) => {
    console.log("server is running on port 3000")
})
