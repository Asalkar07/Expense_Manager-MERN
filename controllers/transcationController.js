const transactionModel = require("../models/TranscationModel");
const transcationModel = require("../models/TranscationModel");
const moment = require("moment");
const getAllTranscation = async (req, res) => {
  try {
    const { Frequency, selectedDate, type } = req.body;
    const transactions = await transcationModel.find({
      ...(Frequency !== "custom"
        ? {
            date: { $gt: moment().subtract(Number(Frequency), "d").toDate() },
          }
        : {
            date: { $gte: selectedDate[0], $lte: selectedDate[1] },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addTranscation = async (req, res) => {
  try {
    const newtranscation = new transcationModel(req.body);
    await newtranscation.save();
    res.status(201).send("Transcation Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const editTranscation = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transactionID },
      req.body.payload
    );
    res.status(200).send('Edit Successfully');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteTranscation = async ( req , res) => {
      try {
        await transactionModel.findByIdAndDelete({_id:req.body.transactionID});
        res.status(200).send('Transcation Deleted! ');
      } catch (error) {
        console.log(error);
        res.status(500).send(error); 
      }
};

module.exports = { getAllTranscation, addTranscation, editTranscation , deleteTranscation};
