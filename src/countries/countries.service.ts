import { CountriesModule } from './countries.module';
import { Country, CountryApi } from './country.model';
import { Catch, Injectable, NotFoundException } from "@nestjs/common";
import{InjectModel, MongooseModule} from  '@nestjs/mongoose';
import{Model} from 'mongoose';

@Injectable() 
export class CountriesService{
    
    constructor(@InjectModel('Country') private readonly countryModel:Model<Country> ){}

    async insertCountry (countryApi: CountryApi){
        const newCountry = new this.countryModel ({
            name: countryApi.name, 
            currency: countryApi.currency, 
            capitalCity: countryApi.capitalCity, 
            language: countryApi.language, 
            flag: countryApi.flag, 
            callingcode: countryApi.callingcode});
            const result = await newCountry.save();
            return result.id as string; 
         

    }
    async getCountries(){
        const countries = await  this.countryModel.find().exec();
        //put that map to save in the db value as the exact format from the interface. without_id and _v.
        return countries.map((cntr) => ({id:cntr.id, name: cntr.name,currency: cntr.currency,capitalCity: cntr.capitalCity,language: cntr.language,flag: cntr.flag, callingcode:cntr.callingcode}));
    }

    async getSingleCountry(countryId:string){
        const country = await this.findCountry(countryId);
        return {
            id:country.id, 
            name: country.name,
            currency: country.currency,
            capitalCity: country.capitalCity,
            language: country.language,
            flag: country.flag, 
            callingcode:country.callingcode};
    }

    async updateCountry(countryId:string, name: string, currency: string, capitalCity: string, language: string, flag: string, callingcode: number        ){
            const updatedCountry = await this.findCountry(countryId);
            if(name){
                updatedCountry.name = name; 
            }
            if(currency){
                updatedCountry.currency = currency; 
            } 
            if(capitalCity){
                updatedCountry.capitalCity = capitalCity; 
            } 
            if(language){
                updatedCountry.language = language; 
            } 
            if(flag){
                updatedCountry.flag = flag; 
            } 
            if(callingcode){
                updatedCountry.callingcode = callingcode; 
            }
            updatedCountry.save();


         }


    async deleteCountry(countryId:string){
       const result =  await this.countryModel.deleteOne({_id: countryId}).exec();
       if (result.n === 0){
        throw  new NotFoundException('Could not found country');
       };
    }         



    private async findCountry (id:string): Promise <Country> {
        let country;
        try{
            country = await this.countryModel.findById(id);
        } catch (error) {
            throw  new NotFoundException('Could not found country');}
        if(!country){
            
        }
        return country;     
    }
    
}
