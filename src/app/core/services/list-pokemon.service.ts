import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListPokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any> {
    const path = environment.API_URL + 'pokemon' + '?offset=100&limit=100';
    return this.http.get(path);
  }

  selectPokemon(pokemon): Observable<any> {
    const path = environment.API_URL + 'pokemon' + '/' + pokemon.name;
    return this.http.get(path);
  }

}
