import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name = 'Thiago'
  age = '21'
  job = 'Estudante'
  hobbies = ['Correr','Jogar','Estudar']
  car = {
    name: 'Polo',
    year: 2019,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
