import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-strategy-builder-home',
  templateUrl: './strategy-builder-home.component.html',
  styleUrls: ['./strategy-builder-home.component.css']
})
export class StrategyBuilderHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // this.ongetStarted();
  }

  ongetStarted(): void {
    this.router.navigateByUrl('getstarted');
  }

  routeTo(){
    this.router.navigate(['/home/getstarted'])
  }
}
