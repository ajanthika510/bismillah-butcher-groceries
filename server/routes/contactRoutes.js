const express = require("express");

const router = express.Router();

let messages = [];


// GET all messages
router.get("/", (req, res) => {

  res.json(messages);

});


// ADD message
router.post("/", (req, res) => {

  const newMessage = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  };

  messages.push(newMessage);

  res.status(201).json(newMessage);

});


// DELETE message
router.delete("/:id", (req, res) => {

  messages = messages.filter(
    (msg) => msg.id != req.params.id
  );

  res.json({
    message: "Deleted Successfully"
  });

});


module.exports = router;