import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  font = 'serif';
  size = 40;
  color = 'blue';

  classes = ['green-title', 'small-title'];
  underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
