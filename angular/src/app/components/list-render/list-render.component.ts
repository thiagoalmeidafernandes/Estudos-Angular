import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: "Turca", type: "Dog", age: 4 },
    { name: "Tom", type: "Cat", age: 6 },
    { name: "Frida", type: "Dog", age: 8 },
    { name: "Bob", type: "Horse", age: 7 },
  ]

  animalDetails = ''; 

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal");
    this.animals = this.listService.remove(this.animals, animal)
  }
}
