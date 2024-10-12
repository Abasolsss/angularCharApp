import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})


//username should have 3 letters, 3 numbers


export class SignUpComponent {

  userName: string = ""
  arr: any[] = []
  userNameLength: number = 6


  userLength() {
    const userValue: HTMLInputElement | null = document.querySelector(".userNameValue")
    const value = this.userName = userValue?.value as string

    this.arr.push(value)
    return this.arr
  }


    submitFunct() {
      const userLengthVal = this.userLength()

      const userValue: HTMLInputElement | null = document.querySelector(".userNameValue")

      const userValues = this.userName = userValue?.value as string

    //checking the characters of the username
      const finalUserValue: string = userLengthVal[this.arr.length - 1]
      const finalUserValueLength: number = finalUserValue.length
      
      if(finalUserValueLength == this.userNameLength) {
        console.log(true)
      } else {
        console.log(false)
      }
    }
}
