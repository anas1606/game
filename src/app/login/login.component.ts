import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = true;
  reactiveForm: FormGroup;
  submitted:boolean = false;

  constructor(private formbuilder: FormBuilder) {
    this.reactiveForm = this.formbuilder.group({
      username: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required, Validators.pattern("^[^\\s]+")]),
      lastname: new FormControl('', [Validators.required, Validators.pattern("^[^\\s]+")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=(.*[0-9]))[a-zA-Z0-9]{8,}$")]),
      confirmpassword: new FormControl('', [Validators.required]),
    },
      {
        validators: this.MustMatch('password', 'confirmpassword'),
      },
    );
  }

  get validate(){return this.reactiveForm.controls}

  MustMatch(password: string , confirmpassword: string){
    return (formGroup:FormGroup)=>{
      const control = formGroup.controls[password];
      const match = formGroup.controls[confirmpassword];
      if(match.errors && !match.errors.MustMatch){
        return
      }
      if(control.value !== match.value){
        match.setErrors({MustMatch:true});
      }else{
        match.setErrors(null);
      }
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    alert(this.reactiveForm.valid);
  }
}
