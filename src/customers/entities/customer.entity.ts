import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Customer extends Document {

    @Prop()
    name: string;
    
    @Prop()
    lastName: string;
    
    @Prop()
    phoneNumber: string;

}

export const CustomerSchema = SchemaFactory.createForClass( Customer );