import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrategyBuilderHomeComponent } from './components/strategy-builder-home/strategy-builder-home.component';
import { StrategyGetStartedComponentComponent } from './components/strategy-get-started-component/strategy-get-started-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToggleComponentComponent } from './components/toggle-component/toggle-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSignupComponentComponent } from './components/user-signup-component/user-signup-component.component';
import {SelectModule} from 'ng-select';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
@NgModule({
  declarations: [
    AppComponent,
    StrategyBuilderHomeComponent,
    StrategyGetStartedComponentComponent,
    ToggleComponentComponent,
    LoginComponentComponent,
    HomePageComponent,
    UserSignupComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    SelectModule,
    BrowserAnimationsModule,
    AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
