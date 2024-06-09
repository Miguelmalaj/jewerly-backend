import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Decimal128, Document } from "mongoose";
import { Customers } from "./customers.entity";

@Schema()
export class Invoices extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customers' })
    customer: Customers;

    @Prop({ type: mongoose.Schema.Types.Decimal128 })
    PaymentQuantity: Decimal128



}

export const InvoicesSchema = SchemaFactory.createForClass( Invoices );