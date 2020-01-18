import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-binspect',
  templateUrl: './binspect.component.html',
  styleUrls: ['./binspect.component.css']
})
export class BinspectComponent implements OnInit {
  genders = ['Male', 'Female'];
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
  }
}
