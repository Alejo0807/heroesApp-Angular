import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { AddComponent } from './pages/add/add.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImageHeroPipe } from './pipes/image-hero.pipe';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    HeroCardComponent,
    ImageHeroPipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule,
    FormsModule
  ]
})
export class HeroesModule { }
