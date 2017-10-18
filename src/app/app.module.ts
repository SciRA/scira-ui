import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'

import { MaterializeModule } from "angular2-materialize";
import { SideBarComponent } from './components/side-bar/side-bar.component';



const appRoutes: Routes = [
  {path: '', component:UserComponent},
  {path: 'search', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    NavBarComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
