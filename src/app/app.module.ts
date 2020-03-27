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


@NgModule({
  declarations: [
    AppComponent,
    StrategyBuilderHomeComponent,
    StrategyGetStartedComponentComponent,
    ToggleComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
