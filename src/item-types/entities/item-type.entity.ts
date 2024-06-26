import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class ItemType extends Document {

    @Prop({
        unique: true,
        index: true
    })
    name: string;

}

export const ItemTypeSchema = SchemaFactory.createForClass( ItemType );