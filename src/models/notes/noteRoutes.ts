import express from "express";
import { NoteController } from "../notes/noteController";

const router = express.Router();

router.post("/note", NoteController.createNote);

router.get("/note", NoteController.getAllNotes);

router.get("/note/:id", NoteController.getNoteById);

router.put("/note/:id", NoteController.updateNote);

router.delete("/note/:id", NoteController.deleteNote);

export default router;
