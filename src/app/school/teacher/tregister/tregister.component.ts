import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { TdetailDataSource, TdetailItem, EXAMPLE_DATA } from '../../tdetail/tdetail-datasource';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-tregister',
  templateUrl: './tregister.component.html',
  styleUrls: ['./tregister.component.css']
})
export class TregisterComponent implements OnInit {
  signup: NgForm;
  genders = ['Male', 'Female'];
  teacherdata = {
    tfname: '',
    tlname: '',
    temail: '',
    taddr: '',
    tdob:'',
    tqual:'',
    tsex: '',
    tsid: '',
    tdoj: '',
    tsub: '',
    tclass: '',
    tccode: '',
    tphone: '',
    taadhar: '',
    tacname: ''
  }
  constructor(private tdata: AngularFireDatabase) { }
  teacher: AngularFireList<any>;

  getdetail() {
    this.teacher = this.tdata.list('tdetails');
    return this.teacher.snapshotChanges();
  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.teacherdata.tfname = form.value.tfname;
    this.teacherdata.tlname = form.value.tlname;
    this.teacherdata.temail = form.value.temail;
    this.teacherdata.taddr = form.value.taddr;
    this.teacherdata.tsex = form.value.tsex;
    this.teacherdata.tsid = form.value.tsid;
    this.teacherdata.tdob = form.value.tdob;
    this.teacherdata.tqual = form.value.tqual;
    this.teacherdata.tclass = form.value.tclass;
    this.teacherdata.tccode = form.value.tccode;
    this.teacherdata.tphone = form.value.tphone;
    this.teacherdata.taadhar = form.value.taadhar;
    this.teacherdata.tacname = form.value.tacname;
    alert('Thanks,your request has been recorded!');
    EXAMPLE_DATA.push(this.teacherdata);
    this.getdetail();
    this.teacher.push(form.value);
  }
}
