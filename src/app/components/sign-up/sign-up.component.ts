import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})

//username should have 3 letters, 3 numbers
export class SignUpComponent {
  inputUserName: string = '';
  userFirstName: string = '';
  userLastName: string = '';

  userInfo = new FormGroup({
    userName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  submitFunct() {
    //username should have 6 letters
    // username shouldnt have uppercase
    // 3 letters and 3 numbers
    // 6 letters and 6 numbers = error
    const formValue = this.userInfo.value
    const userName: string = formValue.userName!
    const userFirstName: string = this.userFirstName;
    const regExUppercase: RegExp = /([A-Z])/g;
    const regExNumber: RegExp = /([0-9])/g;
    const regExString: RegExp = /([a-z])/g;

    const testReg: RegExp = /[a-z-A-Z]/g;

    const userNameStringcheck = userName.match(regExString);
    const userNameNumbercheck = userName.match(regExNumber);
    const userUppercaseCheck: boolean = regExUppercase.test(userName);
    const stringLength = userNameStringcheck?.length as number;
    const numberLength = userNameNumbercheck?.length as number;
    const whiteSpaceCheck: boolean = /\s/.test(userName);

    if (
      numberLength === 3 &&
      stringLength === 3 &&
      userUppercaseCheck === false &&
      whiteSpaceCheck === false
    ) {
      console.log('valid username');
      if (this.userFirstName.length === 6) {
        console.log('valid firstname');
      }
    } else {
      console.log(
        'Username should have 3 numbers and 3 letters wtih no uppercase and no space'
      );
    }
    
  }
}
