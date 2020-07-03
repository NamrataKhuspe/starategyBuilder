import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-signup-component',
  templateUrl: './user-signup-component.component.html',
  styleUrls: ['./user-signup-component.component.css']
})
export class UserSignupComponentComponent implements OnInit {
  regData: any;
  reqdata: any;
  constructor(public service: ApiService) { }

  registerUser(form: NgForm) {
    console.log("================ valuessss of formmm ");
    console.log(form.value);
    this.regData = form.value;
    if (this.regData != "") {
      this.userSignup(this.regData);
    }
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }

  ngOnInit() {
    (function (angular) {
      'use strict';
      angular.module('formExample', [])
        .controller('MyCtrl', ['$scope', function ($scope) {
          $scope.master = {};

          $scope.update = function (user) {
            $scope.master = angular.copy(user);
          };

          $scope.reset = function (form) {
            if (form) {
              form.$setPristine();
              form.$setUntouched();
            }
            $scope.user = angular.copy($scope.master);
          };

          $scope.reset();
        }]);
    })();

  }

  userSignup(req) {
    console.log("get Signupp call -- > ", this.regData);

    this.reqdata = {
      "fname": req.fname,
      "lname": req.lname,
      "email": req.email,
      "pass": req.psw,
      "conf_pass": req.pswrepeat
    }

    // this.service.postCall('userRegister', this.reqdata).subscribe((result) => {
    //   console.log("result -------- > of register user ", result);
    //   if (result ) {

    //   } else {

    //   }

    // });
  }





}
