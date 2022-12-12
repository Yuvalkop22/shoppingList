const { default: mongoose } = require("mongoose");
const Reservation = require("../models/reservation");

//get all reservations
const getAllReservation = async (req, res) => {
  const reservations = await Reservation.find({}).sort({ createdAt: -1 });

  res.status(200).json(reservations);
};

//get a single product
const getReservation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Reservation" });
  }
  const reservation = await Reservation.findById(id);

  if (!reservation) {
    res.status(404).json({ error: "No such Reservation" });
  }

  res.status(200).json(reservation);
};

//create a new Reservation
const createReservation = async (req, res) => {
  const {name, email ,selected} = req.body;

  try {
    const reservation = await Reservation.create({ name,email, selected });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.mssg });
  }
};

//delete a reservation
const deleteReservation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such reservation" });
  }
  const reservation = await Reservation.findOneAndDelete({ _id: id });

  if (!reservation) {
    res.status(404).json({ error: "No such reservation" });
  }

  res.status(200).json(reservation);
};

//update a product

const updateReservation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such reservation" });
  }
  const reservation = await Reservation.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!reservation) {
    res.status(404).json({ error: "No such product" });
  }

  res.status(200).json(reservation);
};

module.exports = {
  createReservation,
  getAllReservation,
  getReservation,
  deleteReservation,
  updateReservation,
};
