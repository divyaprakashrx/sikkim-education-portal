import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-schoolnav',
  templateUrl: './schoolnav.component.html',
  styleUrls: ['./schoolnav.component.css']
})
export class SchoolnavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
