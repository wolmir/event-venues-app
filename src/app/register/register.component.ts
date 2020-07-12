import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

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
    private route: ActivatedRoute
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

  }

}
