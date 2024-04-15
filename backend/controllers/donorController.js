const Donor = require("../models/donorModel");
const mongoose = require("mongoose");

//get all donors
const getDonors = async (req, res) => {
  const user_id = req.user._id;

  const donors = await Donor.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(donors);
};

//get a single donor
const getDonor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such donor" });
  }
  const donor = await Donor.findById(id);

  if (!donor) {
    return res.status(404).json({ error: "No such donor" });
  }

  res.status(200).json(donor);
};

//create a new donor
const createDonor = async (req, res) => {
  const { firstname, lastname, mobile_no, blood_group, age, location } =
    req.body;

  let emptyFields = [];

  if (!firstname) {
    emptyFields.push("firstname");
  }
  if (!lastname) {
    emptyFields.push("lastname");
  }
  if (!mobile_no) {
    emptyFields.push("mobile_no");
  }
  if (!blood_group) {
    emptyFields.push("blood_group");
  }
  if (!age) {
    emptyFields.push("age");
  }
  if (!location) {
    emptyFields.push("location");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    const user_id = req.user._id;
    const donor = await Donor.create({
      firstname,
      lastname,
      mobile_no,
      blood_group,
      age,
      location,
      user_id,
    });
    res.status(200).json(donor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a donor
const deleteDonor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such donor" });
  }

  const donor = await Donor.findOneAndDelete({ _id: id });

  if (!donor) {
    return res.status(404).json({ error: "No such donor" });
  }

  res.status(200).json(donor);
};

//update a donor

const updateDonor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such donor" });
  }

  const donor = await Donor.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!donor) {
    return res.status(404).json({ error: "No such donor" });
  }
  res.status(200).json(donor);
};

module.exports = {
  getDonors,
  getDonor,
  createDonor,
  deleteDonor,
  updateDonor,
};
