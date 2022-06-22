import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      xpta: 123,
      xpto: ''
    });
  }

  ngOnInit(): void {

  }

  public click() {
    console.log('Form Value');
    console.table(this.form.value);
    console.log('TYPE ' + typeof this.form.value.xpta)
  }

}
