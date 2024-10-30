import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { userNameCheck } from '../../validators/signUpForm.validator';

interface UserInfo {
  userName: string;
  firstName: string;
  lastName: string;
  emailAd: string;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})

//username should have 3 letters, 3 numbers
export class SignUpComponent {
  constructor(private formBuilder: FormBuilder) {}

  regEx = /([A-Z])/g;

  userInfo = this.formBuilder.group({
    userName: ['', [Validators.required, userNameCheck]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    emailAd: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  submitFunct() {
    console.log('Hello world');
  }
}
