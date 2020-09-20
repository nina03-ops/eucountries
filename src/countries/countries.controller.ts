import { Country, CountryApi } from './country.model';
import { CountriesService } from './countries.service';
import { Controller, Post, Body,Get,Param, Patch, Delete } from "@nestjs/common";




@Controller('Countries')
export class CountriesController{
    constructor(private readonly countriesService: CountriesService){}

    @Post()
    async addCountry(@Body() countryApi: CountryApi
        ) {
            const generatedId = await this.countriesService.insertCountry(
                countryApi
                );
            return {id: generatedId };
        }
        

    @Get()
    async getAllCountries(){
        const  countries  = await this.countriesService.getCountries();
        return countries;
    }   

    @Get(':id')
    getCountry(@Param ('id') countryId : string){
        return this.countriesService.getSingleCountry(countryId); 
    }

    @Patch(':id')
    async updateCountry(
        @Param('id') countryId:string,
        @Body('name') countryName:string,
        @Body('currency') countryCurrency: string, 
        @Body('capitalCity') countryCapitalCity: string, 
        @Body('language') countryLanguage: string,
        @Body('flag') countryFlag: string,
        @Body('callingcode') countryCallingCode: number
    ){
        await this.countriesService.updateCountry(countryId, countryName, countryCurrency, countryCapitalCity, countryLanguage,countryFlag, countryCallingCode);
        return null;
    }

    @Delete(':id')
    async removeCountry(@Param('id') countryId :string){
        await this.countriesService.deleteCountry(countryId);
        return null;
    }
    

}

