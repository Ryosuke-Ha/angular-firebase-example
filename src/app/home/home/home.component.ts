import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pet: Pet  = {
    avatarURL: './assets/images/pet-1.png',
    name: 'テストペット',
    level: 4,
    exp: 200
  }

  constructor() { }

  ngOnInit(): void {
  }

}
