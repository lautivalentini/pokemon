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
    const path = environment.API_URL + 'pokemon' + '/' + '?offset=365&limit=365';
    return this.http.get(path);
  }

  getPokemonAbility(): Observable<any> {
    const path = environment.API_URL + 'ability' + '/' + '?offset=5&limit=5';
    return this.http.get(path);
  }

  getPokemonLocation(): Observable<any> {
    const path = environment.API_URL + 'location' + '/' + '?offset=5&limit=5';
    return this.http.get(path);
  }

}