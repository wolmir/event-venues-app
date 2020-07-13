import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  timeLimitedControl = new FormControl(false);

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  createEvent() {
    this.router.navigateByUrl('/events-list');
  }

}
