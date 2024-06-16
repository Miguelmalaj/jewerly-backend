import { IsBoolean, IsDate, IsDecimal, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateJewelryDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsMongoId()
    itemType: string;

    @IsMongoId()
    metalType: string;

    @IsDecimal()
    @IsOptional()
    purchasePrice: number | null;

    @IsDecimal()
    @IsOptional()
    salePrice: number | null;

    @IsMongoId({ each: true })
    @IsOptional()
    invoices: string[] | null;

    @IsBoolean()
    @IsOptional()
    delivery: boolean;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    purchaseDate: Date | null;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    saleDate: Date | null;

    @IsString()
    @IsOptional()
    paymentMethod: string | null;

    @IsString()
    @IsNotEmpty()
    isAvailable: string;

    @IsNumber()
    grams: number;

    @IsNumber()
    centimeters: number;

    @IsMongoId()
    @IsOptional()
    createdBy: string | null;

    @IsMongoId()
    @IsOptional()
    boughtBy: string;

    @IsDecimal()
    @IsOptional()
    discount: number | null;


}
