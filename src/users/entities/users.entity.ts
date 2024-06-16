import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Users extends Document {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

}

export const UsersSchema = SchemaFactory.createForClass( Users );