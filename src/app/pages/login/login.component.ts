import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required]]
    });
  }

  onLoginClick() {
    let formData =this.loginForm.value;
    let addReq ={
      username: formData.username,
      password: formData.password
    };
    console.log(addReq);
    this.router.navigate(['pages/index']);
  }

}
