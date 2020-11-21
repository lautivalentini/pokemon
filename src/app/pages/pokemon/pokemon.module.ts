import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormsModule } from '@angular/forms'
import { FilterPipe } from '../../pipe/filter.pipe'

@NgModule({
  declarations: [PokemonComponent,
  FilterPipe],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
  ]
})
export class PokemonModule { }
