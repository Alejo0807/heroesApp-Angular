import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
  ]
})
export class ConfirmComponent implements OnInit {

  
  hero: string = '';

  constructor(private dialogRef: MatDialogRef<ConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Hero) { }

  ngOnInit(): void {
    this.hero = this.data.superhero;
  }

  delete() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }

}
