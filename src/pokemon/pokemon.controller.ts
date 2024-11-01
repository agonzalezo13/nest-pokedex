import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PargeMongoIdPipe } from 'src/common/pipes/parge-mongo-id.pipe';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @HttpCode(HttpStatus.UNAUTHORIZED)
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll( @Query() paginatioDto: PaginationDto) {
    console.log({paginatioDto})
    return this.pokemonService.findAll(paginatioDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemonService.findOne( term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update( term, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', PargeMongoIdPipe) id: string) {
    return this.pokemonService.remove(id);
  }
}
