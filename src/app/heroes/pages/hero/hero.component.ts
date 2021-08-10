import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px
    }
  `
  ]
})
export class HeroComponent implements OnInit {

  heroId: string = '';
  hero!: Hero;

  constructor(private activatedRoute: ActivatedRoute,
              private heroservice: HeroesService,
              private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe( ({ id }) => {
        this.heroId = id;
      });

    this.heroservice.getHeroById(this.heroId)
      .subscribe( hero => {
        this.hero = hero;
      }
      ); 
  }

  back() {
    this.router.navigate(['heroes/list']);
  }



}
