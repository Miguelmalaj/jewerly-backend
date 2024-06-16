import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Jewelry } from "src/jewelry/entities";

@Schema()
export class Request extends Document {

//nombre cliente previo, una vez de haga el pago, se crea el cliente en la tabla customers

//nombre cliente
@Prop()
name: string;

@Prop()
lastName: string;

//date
@Prop()
date: Date;

//id relacion con inventario
@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Jewelry'})
jewerly: Jewelry

}

export const RequestSchema = SchemaFactory.createForClass( Request );