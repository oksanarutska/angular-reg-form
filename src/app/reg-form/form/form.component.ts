import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name: string;
  email: string;
  phone: string;

  value: [] = []

  constructor() { }

  ngOnInit() {
  }

  submit(newform: NgForm) {
    if (newform.invalid) {
    
      Object.keys(newform.controls)
      .forEach(c => {
        newform.controls[c].markAsDirty();
      })
      
      return;
    }

    console.log(newform.value)
  }
}
