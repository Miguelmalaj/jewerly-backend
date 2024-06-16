import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Decimal128, Document } from "mongoose";
import { Customer } from "src/customers/entities/customer.entity";

@Schema()
export class Invoice extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
    customer: Customer;

    @Prop({ type: mongoose.Schema.Types.Decimal128 })
    PaymentQuantity: Decimal128

}

export const InvoiceSchema = SchemaFactory.createForClass( Invoice );