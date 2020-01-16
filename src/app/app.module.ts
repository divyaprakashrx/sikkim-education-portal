import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { NgbCarousel, NgbModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule, NavbarModule, IconsModule } from 'angular-bootstrap-md';;


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { StudentComponent } from './student/student.component';
import { SsignupComponent } from './student/ssignup/ssignup.component';
import { SchoolComponent } from './school/school.component';
import { DashboardComponent } from './school/dashboard/dashboard.component';
import { TdetailComponent } from './school/tdetail/tdetail.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { SchoolnavComponent } from './school/schoolnav/schoolnav.component';
import { SscomplainComponent } from './school/sscomplain/sscomplain.component';
import { TregisterComponent } from './school/teacher/tregister/tregister.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes=[{ path: 'login',component:LoginComponent},
  { path: 'school', component: SchoolComponent },
  { path: '', component: HomeComponent },
  { path: 'ssignup', component: SsignupComponent },
  { path: 'tdetail', component: TdetailComponent },
  { path: 'sscomplain', component: SscomplainComponent },
  { path: 'tregister', component: TregisterComponent },
  { path: 'tab', component: MainComponent }]


@NgModule({
 
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MainComponent,
    MainNavComponent,
    StudentComponent,
    SsignupComponent,
    SchoolComponent,
    DashboardComponent,
    TdetailComponent,
    SchoolnavComponent,
    SscomplainComponent,
    TregisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgbModule,
    DropdownModule.forRoot(),
    NavbarModule,
    IconsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}

