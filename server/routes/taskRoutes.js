const express = require("express");
const Task = require("../model/task")
var router = express.Router();

// Login route
router.post('/', async (req, res) => {
    const { name } = req.body;
  
        const task = new Task({
            name: name,
          });
        
          try {
            await task.save();
            const tasks   = await Task.find();
            res.status(201).json(tasks);
          } catch (err) {
            res.status(400).json({ message: err.message });
          }
});

module.exports = router;
