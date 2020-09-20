//import { Country } from './country.model';
import * as mongoose  from 'mongoose';

//To explicitly set the body definition
import {ApiProperty } from '@nestjs/swagger';


export const  CountrySchema = new mongoose.Schema({
    name: {type: String, required :true}, 
    currency: {type: String, required :true},
    capitalCity: {type: String, required :true}, 
    language: {type: String, required :true}, 
    flag: {type: String, required :true}, 
    callingcode: Number
});


export interface Country extends mongoose.Document{
    id: string;
    name: string;
    currency: string;
    capitalCity: string; 
    language: string; 
    flag: string; 
    callingcode: number
    }

    //for swagger
export class CountryApi{
    @ApiProperty() 
    id: string;
    @ApiProperty() 
    name: string;
    @ApiProperty() 
    currency: string;
    @ApiProperty() 
    capitalCity: string; 
    @ApiProperty() 
    language: string; 
    @ApiProperty() 
    flag: string; 
    @ApiProperty() 
    callingcode: number
}


