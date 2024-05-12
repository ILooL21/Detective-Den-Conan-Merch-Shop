import expressAsyncHandler from "express-async-handler";
import Riddle from "../models/riddleModel.js";
import { unlink } from "node:fs";

// @desc    Fetch all riddles
// @route   GET /api/riddles
// @access  Public
const getRiddles = expressAsyncHandler(async (req, res) => {
  const riddles = await Riddle.find({});

  if (riddles.length === 0) {
    res.status(404);
    throw new Error("Any riddle not found");
  }

  res.status(200).json(riddles);
});

// @desc    Fetch single riddle
// @route   GET /api/riddles/:id
// @access  Public
const getRiddleById = expressAsyncHandler(async (req, res) => {
  const riddle = await Riddle.findById(req.params.id);

  if (riddle) {
    res.status(200).json(riddle);
  } else {
    res.status(404);
    throw new Error("Riddle not found");
  }
});

// @desc    add riddle
// @route   POST /api/riddles
// @access  Private/Admin
const addRiddle = expressAsyncHandler(async (req, res) => {
  const { title, kronologi } = req.body;

  const riddle = new Riddle({
    title,
    kronologi,
    image: `public/images/${req.file.filename}`,
  });

  const createdRiddle = await riddle.save();
  res.status(201).json(createdRiddle);
});

// @desc    update riddle
// @route   PUT /api/riddles/:id
// @access  Private/Admin
const updateRiddle = expressAsyncHandler(async (req, res) => {
  const { title, kronologi, tersangka, clue, answer } = req.body;

  const riddle = await Riddle.findById(req.params.id);

  if (riddle) {
    if (title) riddle.title = title;
    if (kronologi) riddle.kronologi = kronologi;
    if (tersangka) riddle.tersangka = tersangka;
    if (clue) riddle.clue = clue;
    if (answer) riddle.answer = answer;

    if (req.file) {
      unlink(`./${riddle.image}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      riddle.image = `public/images/${req.file.filename}`;
    }

    const updatedRiddle = await riddle.save();
    res.status(200).json(updatedRiddle);
  } else {
    res.status(404);
    throw new Error("Riddle not found");
  }
});

// @desc    delete riddle
// @route   DELETE /api/riddles/:id
// @access  Private/Admin
const deleteRiddle = expressAsyncHandler(async (req, res) => {
  const riddle = await Riddle.findById(req.params.id);

  if (riddle) {
    unlink(`./${riddle.image}`, (err) => {
      if (err) {
        res.status(500);
        throw new Error("Error when delete image");
      }
    });

    await riddle.deleteOne({ _id: req.params.id });
    res.status(204);
  } else {
    res.status(404);
    throw new Error("Riddle not found");
  }
});

// @desc    add Tersangka
// @route   PUT /api/riddles/tersangka/:id
// @access  Private/Admin
const addTersangka = expressAsyncHandler(async (req, res) => {
  const { tersangka, alibi } = req.body;

  const riddle = await Riddle.findById(req.params.id);

  if (riddle) {
    if (!tersangka || !alibi) {
      res.status(400);
      throw new Error("Tersangka and Alibi is required");
    }
    riddle.tersangka.push({ tersangka, alibi });

    const updatedRiddle = await riddle.save();
    res.status(200).json(updatedRiddle);
  } else {
    res.status(404);
    throw new Error("Riddle not found");
  }
});

// @desc    delete Tersangka
// @route   PUT /api/riddles/tersangka/:id
// @access  Private/Admin
const deleteTersangka = expressAsyncHandler(async (req, res) => {
  const { tersangka } = req.body;

  const riddle = await Riddle.findById(req.params.id);

  if (riddle) {
    riddle.tersangka = riddle.tersangka.filter((t) => t.tersangka !== tersangka);

    const updatedRiddle = await riddle.save();
    res.status(200).json(updatedRiddle);
  } else {
    res.status(404);
    throw new Error("Riddle not found");
  }
});

//@desc   answer riddle
//@route  POST /api/riddles/:id/answer
//@access Public
const answerRiddle = expressAsyncHandler(async (req, res) => {
  const { answer } = req.body;

  const riddle = await Riddle.findById(req.params.id);

  if (riddle) {
    if (riddle.answer[0].pelaku === answer) {
      res.status(200).json({ message: "Correct", answer: { pelaku: riddle.answer[0].pelaku, alasan: riddle.answer[0].alasan } });
    } else {
      res.status(200).json({ message: "Incorrect", answer: { pelaku: riddle.answer[0].pelaku, alasan: riddle.answer[0].alasan } });
    }
  } else {
    res.status(404);
    throw new Error("Riddle not found");
  }
});

export { getRiddles, getRiddleById, addRiddle, updateRiddle, deleteRiddle, addTersangka, deleteTersangka, answerRiddle };
