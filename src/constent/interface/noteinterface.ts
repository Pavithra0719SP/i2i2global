import { Document } from "mongoose";

export interface INote extends Document {
  note_id: string;
  note_title: string;
  note_content: string;
  last_update?: Date;
  create_on?: Date;
}
