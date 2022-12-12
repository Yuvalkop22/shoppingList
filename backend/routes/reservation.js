const express = require("express");
const Product = require("../models/reservation");
const {
  createReservation,
  getAllReservation,
  getReservation,
  deleteReservation,
  updateReservation,
} = require("../controllers/reservationController");

const router = express.Router();

//send reservation
router.post("/sendRes", createReservation) 
router.get("/allReservations", getAllReservation);
module.exports = router;
