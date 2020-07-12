import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { RegistrationService } from '../accounts/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailControl: FormControl;
  passwordControl: FormControl;

  constructor(
    private registrationService: RegistrationService
  ) {
    this.emailControl = new FormControl('', [Validators.required]);
    this.passwordControl = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }

  login(): void {
    this.registrationService.login();
  }

}
