import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-component',
  templateUrl: './toggle-component.component.html',
  styleUrls: ['./toggle-component.component.css']
})
export class ToggleComponentComponent implements OnInit {

  constructor(){}

  ngOnInit() {
  }

   ToggleController() {
    console.log("Toggle Controller ");
  }

}
