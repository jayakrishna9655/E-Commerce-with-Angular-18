import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, NgModelGroup, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  form=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(3)]),
  email:new FormControl("",[Validators.required,Validators.minLength(3),Validators.email]),
  password:new FormControl("",[Validators.required,Validators.minLength(3)]),
  
  })
  
  form_submit(){
    console.log(this.form.value)
  }
  
}
