import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {


  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter

  ){}
  
  async executeSeed() {
    await this.pokemonModel.deleteMany({})
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    const insertPrimsesArray = []
    data.results.forEach(({name, url}) => {
      const segments = url.split('/')
      const no = +segments[segments.length -2];


      insertPrimsesArray.push(
        this.pokemonModel.create({name, no})
      )


      console.log(no)
    })

    await Promise.all(insertPrimsesArray)
    return data.results;
  }

  // async executeSeed() {
  //   await this.pokemonModel.deleteMany({})
  //   const {data} = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

  //   const pokemonToInsert: {name:string, no:number}[] = []
  //   data.results.forEach(({name, url}) => {
  //     const segments = url.split('/')
  //     const no = +segments[segments.length -2];


  //     pokemonToInsert.push({name, no})


  //     console.log(no)
  //   })

  //   await Promise.all(pokemonToInsert)
  //   return data.results;
  // }

}
 