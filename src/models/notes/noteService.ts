import { INote } from "../../constent/interface/noteinterface";
import { NoteModel } from "../../constent/model/noteModel";
import { v4 as uuidv4 } from "uuid";

export class NoteService {
  static async createNote(title: string, content: string): Promise<INote> {
    const newNote = new NoteModel({
      note_id: uuidv4(),
      note_title: title,
      note_content: content,
    });
    return await newNote.save();
  }

  static async getAllNotes(): Promise<INote[]> {
    return await NoteModel.find();
  }

  static async getNoteById(id: string): Promise<INote | null> {
    return await NoteModel.findOne({ note_id: id });
  }

  static async updateNote(
    id: string,
    title: string,
    content: string
  ): Promise<INote | null> {
    return await NoteModel.findOneAndUpdate(
      { note_id: id },
      { note_title: title, note_content: content },
      { new: true }
    );
  }

  static async deleteNote(id: string): Promise<INote | null> {
    return await NoteModel.findOneAndDelete({ note_id: id });
  }
}
