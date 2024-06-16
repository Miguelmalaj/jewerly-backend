import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class MetalType extends Document {

    @Prop({
        unique: true,
        index: true
    })
    name: string;

}

export const MetalTypeSchema = SchemaFactory.createForClass( MetalType );