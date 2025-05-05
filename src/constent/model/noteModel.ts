import mongoose, { Schema, Document } from "mongoose";
import { INote } from "../interface/noteinterface";

export interface INoteDocument extends INote, Document {}

const NoteSchema = new Schema<INoteDocument>({
  note_id: {
    type: String,
    required: true,
    unique: true,
  },
  note_title: {
    type: String,
    required: true,
    trim: true,
  },
  note_content: {
    type: String,
    required: true,
    trim: true,
  },
  last_update: {
    type: Date,
    default: () => new Date(),
  },
  create_on: {
    type: Date,
    default: () => new Date(),
    immutable: true,
  },
});

export const NoteModel = mongoose.model<INoteDocument>("Note", NoteSchema);
