import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { RegistrationService } from '../accounts/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public role: string;

  firstNameControl: FormControl;
  lastNameControl: FormControl;
  addressControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService,
  ) {
    this.firstNameControl = new FormControl('');
    this.lastNameControl = new FormControl('');
    this.addressControl = new FormControl('');
    this.emailControl = new FormControl('');
    this.passwordControl = new FormControl('');
  }

  ngOnInit(): void {
    this.route.params.subscribe((values) => {
      this.role = values.role;
    });
  }

  register() {
    this.registrationService.registerAsVenueOwner({
      firstName: this.firstNameControl.value,
      lastName: this.lastNameControl.value,
      password: this.passwordControl.value,
      email: this.emailControl.value,
    })
    .then(() => {
      this.router.navigateByUrl('/login');
    });
  }

}
