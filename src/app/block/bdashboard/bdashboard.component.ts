import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgbCarousel, NgbModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as CanvasJS from '../../../assets/canvasjs.min';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { DropdownModule } from 'angular-bootstrap-md';


@Component({
  selector: 'app-bdashboard',
  templateUrl: './bdashboard.component.html',
  styleUrls: ['./bdashboard.component.css']
})
export class BdashboardComponent implements OnInit {

  constructor() { }

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
          { y: attendance.ABC, label: "ABC" },
          { y: attendance.DEF, label: "DEF" },
          { y: attendance.GHI, label: "GHI" },
          { y: attendance.JKL, label: "JKL" },
          { y: attendance.MNO, label: "MNO" },
          { y: attendance.ASF, label: "ASF" },
          { y: attendance.GAFDS, label: "GAFDS" },
          { y: attendance.ADFS, label: "ADFS" },
          { y: attendance.SDAF, label: "SDAF" }
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
var attendance = {
  ABC: 69,
  DEF: 45,
  GHI: 23,
  JKL: 45,
  MNO: 23,
  ASF: 32,
  GAFDS: 42,
  ADFS: 34,
  SDAF:45,

}
