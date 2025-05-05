import { Request, Response } from "express";
import { NoteService } from "./noteService";

export class NoteController {
  static async createNote(req: Request, res: Response) {
    try {
      const { note_title, note_content } = req.body;
      const note = await NoteService.createNote(note_title, note_content);
      res.status(201).json(note);
    } catch (error) {
      res.status(500).json({ message: "Error creating note", error });
    }
  }

  static async getAllNotes(req: Request, res: Response) {
    try {
      const notes = await NoteService.getAllNotes();
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving notes", error });
    }
  }

  static async getNoteById(req: Request, res: Response) {
    try {
      const note = await NoteService.getNoteById(req.params.id);
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ message: "Note not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error retrieving note", error });
    }
  }

  static async updateNote(req: Request, res: Response) {
    try {
      const { note_title, note_content } = req.body;
      const updatedNote = await NoteService.updateNote(
        req.params.id,
        note_title,
        note_content
      );
      if (updatedNote) {
        res.status(200).json(updatedNote);
      } else {
        res.status(404).json({ message: "Note not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating note", error });
    }
  }

  static async deleteNote(req: Request, res: Response) {
    try {
      const deletedNote = await NoteService.deleteNote(req.params.id);
      if (deletedNote) {
        res.status(200).json({ message: "Note deleted successfully" });
      } else {
        res.status(404).json({ message: "Note not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting note", error });
    }
  }
}
