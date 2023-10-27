import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
debounceTime

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {}

get name(){
  return this.form.get('name') as FormControl;
}
get email(){
  return this.form.get('email') as FormControl;
}
get message(){
  return this.form.get('message') as FormControl;
}


  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  })

  

}

