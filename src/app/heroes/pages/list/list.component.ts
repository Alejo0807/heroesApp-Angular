import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [ 
  ]
})
export class ListComponent implements OnInit {

  heores: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( resp => {
        this.heores = resp;
      });
  }


  // list() {
  //   this.heroesService.getHeroes()
  //     .subscribe( resp => {
  //       console.log(resp);
  //     });
  // }


}
