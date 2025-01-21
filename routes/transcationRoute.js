const express = require("express");
const { addTranscation, getAllTranscation ,editTranscation , deleteTranscation} = require("../controllers/transcationController");


// router object
const router = express.Router()

//routes
//add transcation POST method
router.post('/add-transcation' , addTranscation);

//Edit transcation POST method
router.post('/edit-transcation' , editTranscation);

//Delete transcation POST method
router.post('/delete-transcation' , deleteTranscation);

//get transcation GET method
router.post('/get-transcation' , getAllTranscation)

module.exports =  router; 