import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { UserService } from './services/user.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { MaterializeModule } from 'angular2-materialize';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PaperComponent } from './components/paper/paper.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchProvider } from './services/search/serach-service-provider';
import { AboutSciraComponent } from './pages/about-scira/about-scira.component';
import { PaperPageComponent } from './pages/paper-page/paper-page.component';


const appRoutes: Routes = [
  { path: '', component: AboutSciraComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'paper/:id', component: PaperPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutSciraComponent,
    SearchComponent,
    NavBarComponent,
    SideBarComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PaperComponent,
    AboutSciraComponent,
    PaperPageComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [DataService,
    UserService,
    AuthGuard,
    AuthService,
    SearchProvider,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
