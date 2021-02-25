
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello React X Node Js");
});


module.exports = router;