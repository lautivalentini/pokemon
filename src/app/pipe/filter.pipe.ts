import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultsPokemon = [];

    for(const pokemon of value) {
      if(pokemon.name.indexOf(args) > -1) {
        resultsPokemon.push(pokemon);
      };
    };
    return resultsPokemon;
  }

}
