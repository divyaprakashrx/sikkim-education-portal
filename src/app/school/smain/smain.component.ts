import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smain',
  templateUrl: './smain.component.html',
  styleUrls: ['./smain.component.css']
})
export class SmainComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit() {
  }

}
