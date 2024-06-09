import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Decimal128, Document } from 'mongoose';
import { ItemTypes } from './item-types.entity';
import { MetalTypes } from './metal-types.entity';
import { Invoices } from './invoices.entity';
import { Users } from './users.entity';
import { Customers } from './customers.entity';

@Schema()
export class Jewelry extends Document {
 //id: string //Mongo gives me

 @Prop()
 name: string;

 @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ItemTypes' })
 itemType: ItemTypes;

 @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MetalTypes' })
 metalType: MetalTypes;

 @Prop({ type: mongoose.Schema.Types.Decimal128, default: null })
 purchasePrice: Decimal128 | null;

 @Prop({ type: mongoose.Schema.Types.Decimal128, default: null })
 salePrice: Decimal128 | null;

 @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invoices' }], default: null })
 invoices: Invoices[] | null;

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

 @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users', default: null  })
 createdBy: Users | null;
 
 @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customers', default: null  })
 boughtBy: Customers;

 //TODO: add discounts.

}

export const JewelrySchema = SchemaFactory.createForClass( Jewelry );
