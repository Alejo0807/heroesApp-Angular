import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius:5px;
    margin-right: 20px
  }
` 
  ]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }, 
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    }
  ];

  hero: Hero = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: ''
  };

  edit: boolean = false;
  saveMessage: string = 'El personaje fue guardado con éxito';
  editMessage: string = 'El personaje fue editado con éxito';
  deleteMessage: string = 'El personaje fue eliminado con éxito';


  constructor(private heroService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe( ({id}) => {
        if (id) { //editando
          this.edit = true;
          this.heroService.getHeroById(id)
            .subscribe(hero => this.hero = hero)
        }
      })
  }

  save() {
    if (this.hero.superhero.trim().length === 0) return;

    if (this.hero.id) {
      //Update
      this.heroService.updateHero(this.hero)
      .subscribe( resp => {
        console.log('Actualizando');
      })
    } else {
      this.heroService.addHero(this.hero)
      .subscribe( resp => {
        console.log(resp);
      })
    }
    
    (!this.edit)
    ? this.snackBar.open(this.saveMessage,'Cerrar',{duration: 3000})
    : this.snackBar.open(this.editMessage,'Cerrar',{duration: 3000}); 
    this.router.navigate([`heroes/edit/${this.hero.id}`]);
    
  }

  delete() {

    const deleteDialog = this.dialog.open(ConfirmComponent,{
      width: '250px',
      data: this.hero
    },)

    deleteDialog.afterClosed().subscribe(result => {
      if (result) {
        
        this.heroService.deleteHero(this.hero.id!)
          .subscribe( resp => {
            this.router.navigate([`heroes/list`]);
            this.snackBar.open(this.deleteMessage,'Cerrar',
              {
                duration: 4000
              });
          })
      }
    })

  }

}
