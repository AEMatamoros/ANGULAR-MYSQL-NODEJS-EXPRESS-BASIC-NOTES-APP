const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get("/", async (req , res) => {
    const users = await db.query("Select * from notes");
    res.send(users)
})

router.get("/:id", async (req , res) => {
    const user = await db.query(`Select * from notes where id= ${req.params.id}`);
    res.send(user[0])
})

router.delete("/:id", async (req , res) => {
    const deleteNote = await db.query(`delete from notes where id= ${req.params.id}`)
    if (deleteNote.affectedRows==1){
        res.send({status:200});
    }else{
        res.send({status:400})
    } 
})

router.put("/:id", async (req , res) =>{
    const updateNote = await db.query(`
    UPDATE notes SET TITLE="${req.body.title}",DESCRIPTION="${req.body.description}" WHERE ID= ${req.params.id}
    `);
    if (updateNote.affectedRows==1){
        res.send({status:200});
    }else{
        res.send({status:400})
    }
})

router.post("/", async (req,res) =>{
    const postNote = await db.query(`
    INSERT INTO notes (title, description)
        VALUES ("${req.body.title}","${req.body.description}")
    `)
    console.log(postNote)
    res.send({"id":postNote.insertId})
})
module.exports = router;