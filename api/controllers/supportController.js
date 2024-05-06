import AsyncHandler from "express-async-handler";
import Support from "../models/supportModel.js";

// @desc   add support
// @route   POST /api/supports
// @access  Private/Admin
const addSupport = AsyncHandler(async (req, res) => {
  const { email, subject, message } = req.body;

  const support = new Support({
    email,
    subject,
    message,
  });

  const createdSupport = await support.save();
  res.status(201).json(createdSupport);
});

// @desc    Fetch all supports
// @route   GET /api/supports
// @access  Private/Admin
const getSupports = AsyncHandler(async (req, res) => {
  const supports = await Support.find({});

  //jika support panjang nya 0
  if (supports.length === 0) {
    //kirim status 200 dan kirim pesan "Tidak ada support yang tersedia"
    res.status(200).json({ message: "Tidak ada support yang tersedia" });
  }

  res.status(200).json(supports);
});

// @desc    delete support
// @route   DELETE /api/supports/:id
// @access  Private/Admin

const deleteSupport = AsyncHandler(async (req, res) => {
  const support = await Support.findById(req.params.id);

  if (support) {
    await support.deleteOne({ _id: req.params.id });
    res.json({ message: "Support removed" });
  } else {
    res.status(404);
    throw new Error("Support not found");
  }
});

export { getSupports, deleteSupport, addSupport };
