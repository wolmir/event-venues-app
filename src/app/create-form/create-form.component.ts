import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  questions = [
    {
      question: new FormControl('Type your question here.'),
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addQuestion() {
    this.questions.push({
      question: new FormControl('Type your question here.'),
    });
  }

  createForm() {
    this.router.navigateByUrl('/create-event');
  }

}
