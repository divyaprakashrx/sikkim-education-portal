import { Component, OnInit } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http'; 
import { PapaParseModule,Papa } from 'ngx-papaparse';

let obj: DummyComponent;

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  name = 'Angular 5 csv file parser example';
  csvData: any[] = [];
  headerRow: any[] = [];


  constructor(private http: HttpClient, private papa: Papa) { this.loadCSV; }

  private loadCSV() {
    this.http.get('./assets/a.csv', { responseType: 'text' }).subscribe(
      data => this.extractData(data),
    err => console.log('error: ',err),
    )
  }

  extractData(res) {
    let csvData = res || '';

    this.papa.parse(csvData, {
      complete: parsedData => {
        console.log(parsedData);
        this.headerRow = parsedData.data.splice(0, 1)[0];
        this.csvData = parsedData.data;
        console.log('my array', this.csvData);
      }
    })
  }

  ngOnInit() {
    obj = this;
  }
  
}
