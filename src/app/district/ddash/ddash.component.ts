import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgbCarousel, NgbModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as CanvasJS from '../../../assets/canvasjs.min';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { DropdownModule } from 'angular-bootstrap-md';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ddash',
  templateUrl: './ddash.component.html',
  styleUrls: ['./ddash.component.css']
})
export class DdashComponent implements OnInit {

  constructor() { }
  edit = false;
  invest = investment.Food + investment.Administration + investment.ExamSection + investment.Others + investment.PlayGroup;

  ngOnInit() {
    let chart = new CanvasJS.Chart("barchart", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Attendance Status"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "ABC" },
          { y: 55, label: "DEF" },
          { y: 50, label: "GHI" },
          { y: 65, label: "JKL" },
          { y: 95, label: "MNO" },
          { y: 68, label: "ASF" },
          { y: 28, label: "GAFDS" },
          { y: 34, label: "ADFS" },
          { y: 14, label: "SDAF" }
        ]
      }]
    });
    let circle = new CanvasJS.Chart("progress", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Invesments"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: investment.Food, name: "Food" },
          { y: investment.Administration, name: "Administration" },
          { y: investment.ExamSection, name: "Exam Section" },
          { y: investment.Infrastructure, name: "Infrastructure" },
          { y: investment.Education, name: "Education" },
          { y: investment.PlayGroup, name: "Play Group" },
          { y: investment.Others, name: "Others" }
        ]
      }]
    });
    chart.render();
    circle.render();
  
  }
  onEdit() {
    this.edit = true;
  }
  onSubmit(form: NgForm) {
    investment.Food = form.value.Food;
    investment.Administration = form.value.Administration;
    investment.ExamSection = form.value.Infrastructure;
    investment.Education = form.value.Education;
    investment.PlayGroup = form.value.PlayGroup;
    investment.Others = form.value.Others;
    this.edit = false;
    let circle = new CanvasJS.Chart("progress", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Invesments"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: investment.Food, name: "Food" },
          { y: investment.Administration, name: "Administration" },
          { y: investment.ExamSection, name: "Exam Section" },
          { y: investment.Infrastructure, name: "Infrastructure" },
          { y: investment.Education, name: "Education" },
          { y: investment.PlayGroup, name: "Play Group" },
          { y: investment.Others, name: "Others" }
        ]
      }]
    });
    circle.render();
    this.invest = investment.Food + investment.Administration + investment.ExamSection + investment.Others + investment.PlayGroup;
  }
}
var investment = {
  Food: 450,
  Administration: 120,
  ExamSection: 300,
  Infrastructure: 800,
  Education: 150,
  PlayGroup: 150,
  Others: 250,
}
