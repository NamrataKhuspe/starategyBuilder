import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StrategyBuilderHomeComponent } from './components/strategy-builder-home/strategy-builder-home.component';
import { StrategyGetStartedComponentComponent } from './components/strategy-get-started-component/strategy-get-started-component.component';
import { ToggleComponentComponent } from './components/toggle-component/toggle-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserSignupComponentComponent } from './components/user-signup-component/user-signup-component.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: "home",
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: StrategyBuilderHomeComponent
      },
      {
        path: "getstarted",
        component: StrategyGetStartedComponentComponent
      }
    ]

  },
  { path: "toggle", component: ToggleComponentComponent },
  { path: "login", component: LoginComponentComponent },
  { path: "usersignup", component: UserSignupComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
