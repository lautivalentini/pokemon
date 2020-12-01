import { Component, OnInit } from '@angular/core';
import { ListPokemonService } from '../../../core/services/list-pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemones = [];

  abilities = [];

  locationes = [];

  pokes = [];

  pokesFav = [];

  star: boolean = false;
  starContainer: boolean = false;

  filterPokemon = '';

  constructor(private pokemonService: ListPokemonService) { }

  ngOnInit(): void {
    this.listPokemon();
  }

  listPokemon() {
    this.pokemonService.getPokemon().subscribe(res => {
      this.pokemones = res.results;
    }, err => {
      console.log(err);
    });
  }

  pokemonSelected(pokemon) {
    this.pokemonService.selectPokemon(pokemon).subscribe(res => {
      console.log(res);
      this.pokes = Array(res);
    }, err => {
      console.log(err);
    })
  }

  addPokemon(pokemon) {
    this.pokemonService.selectPokemon(pokemon).subscribe(res => {
      this.pokesFav.push(res);
    }, err => {
      console.log(err);
    })
  }

  deletePokemon(pokemon) {
    this.pokesFav.splice(pokemon, 1);
  }

  deleteAll(pokemon) {
    this.pokesFav.splice(pokemon);
  }

}
