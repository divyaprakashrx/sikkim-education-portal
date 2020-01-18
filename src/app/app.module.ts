import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { NgbCarousel, NgbModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule, NavbarModule, IconsModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
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
import { BsregisterComponent } from './block/bsregister/bsregister.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ClassComponent } from './school/class/class.component';
import { SdetailComponent } from './school/class/sdetail/sdetail.component';
import { NtregisterComponent } from './school/ntregister/ntregister.component';
import { ExamComponent } from './school/exam/exam.component';
import { SmainComponent } from './school/smain/smain.component';
import { SattendComponent } from './school/sattend/sattend.component';
import { PapaParseModule,Papa } from 'ngx-papaparse';
import { DummyComponent } from './dummy/dummy.component';
import { ServiceWorkerModule } from '@angular/service-worker';


const appRoutes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'school', component: SchoolComponent },
  { path: '', component: HomeComponent },
  { path: 'smain', component: SmainComponent },
{ path: 'ssignup', component: SsignupComponent },
{ path: 'tdetail', component: TdetailComponent },
{ path: 'Sdetail', component: SdetailComponent },
{ path: 'sscomplain', component: SscomplainComponent },
  { path: 'tregister', component: TregisterComponent },
  { path: 'ntregister', component: NtregisterComponent },
  { path: 'exam', component: ExamComponent }
]


@NgModule({
 
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    StudentComponent,
    SsignupComponent,
    SchoolComponent,
    DashboardComponent,
    TdetailComponent,
    SchoolnavComponent,
    SscomplainComponent,
    TregisterComponent,
    HomeComponent,
    BsregisterComponent,
    ClassComponent,
    SdetailComponent,
    NtregisterComponent,
    ExamComponent,
    SmainComponent,
    SattendComponent,
    DummyComponent,
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
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    PapaParseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}

