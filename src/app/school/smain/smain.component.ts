import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smain',
  templateUrl: './smain.component.html',
  styleUrls: ['./smain.component.css']
})
export class SmainComponent implements OnInit {
  images = [
    'assets/carousel/1(2).jpg',
    'assets/carousel/1(3).jpg',
    'assets/carousel/1(5).jpg',
    

  ];
  constructor() { }

  ngOnInit() {
  }

}
