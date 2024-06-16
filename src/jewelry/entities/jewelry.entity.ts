import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Decimal128, Document } from 'mongoose';
import { ItemType } from 'src/item-types/entities/item-type.entity';
import { MetalType } from 'src/metal-types/entities/metal-type.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Users } from '../../users/entities/users.entity';
import { Customer } from '../../customers/entities/customer.entity'

@Schema()
export class Jewelry extends Document {
    //id: string //Mongo gives me

    @Prop()
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ItemType' })
    itemType: ItemType;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MetalType' })
    metalType: MetalType;

    @Prop({ type: mongoose.Schema.Types.Decimal128, default: null })
    purchasePrice: Decimal128 | null;

    @Prop({ type: mongoose.Schema.Types.Decimal128, default: null })
    salePrice: Decimal128 | null;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' }], default: null })
    invoices: Invoice[] | null;

    @Prop({ default: false })
    delivery: boolean;

    @Prop({ default: null })
    purchaseDate: Date | null;

    @Prop({ default: null })
    saleDate: Date | null;

    @Prop({ default: null })
    paymentMethod: string | null;

    @Prop()
    isAvailable: string;

    @Prop()
    grams: number;

    @Prop()
    centimeters: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users', default: null })
    createdBy: Users | null;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer', default: null })
    boughtBy: Customer;

    @Prop({ type: mongoose.Schema.Types.Decimal128, default: null })
    discount: Decimal128 | null;

}

export const JewelrySchema = SchemaFactory.createForClass(Jewelry);
