import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class MetalTypes extends Document {

    @Prop({
        unique: true,
        index: true
    })
    name: string;

}

export const MetalTypesSchema = SchemaFactory.createForClass( MetalTypes );