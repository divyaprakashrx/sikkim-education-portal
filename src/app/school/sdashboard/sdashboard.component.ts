import { Component, OnInit, ViewChild,NgModule } from '@angular/core';
import { NgbCarousel, NgbModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as CanvasJS from '../../../assets/canvasjs.min';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { DropdownModule } from 'angular-bootstrap-md';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sdashboard',
  templateUrl: './sdashboard.component.html',
  styleUrls: ['./sdashboard.component.css']
})
export class SdashboardComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) { }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  edit = false;
  invest = investment.Food + investment.Administration + investment.ExamSection + investment.Others + investment.PlayGroup;
  ngOnInit() {
   
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
