import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  heroes: Hero[] = []
  heroSelected: Hero | undefined;

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
  }
  
  searching() {
    this.heroService.getHeroByRegex(this.term)
      .subscribe( resp => {
        this.heroes = resp;
        console.log(resp);
      })
      
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (this.heroes.length == 0) {
      this.heroSelected = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.term = hero.superhero;

    this.heroService.getHeroById(hero.id!)
      .subscribe( resp => {
        this.heroSelected = resp;
      })
  }
}
