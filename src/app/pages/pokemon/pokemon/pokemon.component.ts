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

  filterPokemon = '';

  constructor(private pokemonService: ListPokemonService) { }

  ngOnInit(): void {
    this.listPokemon();
    this.listAbility();
    this.listLocation();
  }

  listPokemon() {
    this.pokemonService.getPokemon().subscribe(res => {
      this.pokemones = res.results;
      console.log(res);
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

  listAbility() {
    this.pokemonService.getPokemonAbility().subscribe(res => {
      this.abilities = res.results;
    }, err => {
      console.log(err);
    })
  }

  listLocation() {
    this.pokemonService.getPokemonLocation().subscribe(res => {
      this.locationes = res.results;
    }, err => {
      console.log(err);
    })
  }

}
