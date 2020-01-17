import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

var nteacherdata = []
@Component({
  selector: 'app-ntregister',
  templateUrl: './ntregister.component.html',
  styleUrls: ['./ntregister.component.css','./../../student/ssignup/ssignup.component.css']
})
export class NtregisterComponent implements OnInit {
  signup: NgForm;
  genders = ['Male', 'Female'];
  services = ['Temporary', 'Permanent'];
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form);
    nteacherdata.push(form.value);
    alert('Thanks,your request has been recorded!');
  }
  

}
