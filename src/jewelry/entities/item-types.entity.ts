import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class ItemTypes extends Document {

    @Prop({
        unique: true,
        index: true
    })
    name: string;

}

export const ItemTypesSchema = SchemaFactory.createForClass( ItemTypes );