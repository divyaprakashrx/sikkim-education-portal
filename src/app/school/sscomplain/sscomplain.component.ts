import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-complain',
  templateUrl: './sscomplain.component.html',
  styleUrls: ['./sscomplain.component.css']
})
export class SscomplainComponent implements OnInit {
  sscomplain = {
    email: '',
    complain:'',
  }
  constructor() { }
  onSubmit(form: NgForm) {
    this.sscomplain.email = form.value.email;
    this.sscomplain.complain = form.value.complain;
    alert('Your complaint has been stored!');
  }

  ngOnInit() {
  }

}
