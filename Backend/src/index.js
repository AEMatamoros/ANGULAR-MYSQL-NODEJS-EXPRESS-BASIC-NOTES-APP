const express = require("express");
const cors = require('cors');

const notesRoutes = require("./routes/notesRoutes");


//Init
const app = express();
//Midlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors('*'))
//Vars
app.set("PORT", process.env | 4000);

//Routes
app.use("/notes",notesRoutes);

app.use("/", (req, res) => {
    res.send("Hi");
})
//StartServer
app.listen(app.get("PORT"), ()=>{
    console.log(`Server on port ${app.get("PORT")}`);
})