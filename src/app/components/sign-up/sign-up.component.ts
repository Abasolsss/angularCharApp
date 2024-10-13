import { HtmlParser } from '@angular/compiler';
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
  arr: string[] = []
  userNameLength: number = 6


  userLength() {
    const userValue: HTMLInputElement | null = document.querySelector(".userNameValue")
    const value = this.userName = userValue?.value as string
    this.arr.push(value)
    return this.arr
  }


    submitFunct() {
      const userLengthVal = this.userLength()

    //checking the characters of the username
      const finalUserValue: string = userLengthVal[this.arr.length - 1]

      const finalUserValueLength: number = finalUserValue.length

      const numerics: string[] = ["0","1","2","3","4","5","6","7","8","9"]
      // const numericss: number[] = [0,1,2,3,4,5,6,7,8,9]
      let incrementTest: number = 0;
      const testings: boolean = /\s/.test(finalUserValue);
      if(finalUserValueLength == this.userNameLength && testings === false) {
        numerics.forEach((e) => {   
          const test = finalUserValue.includes(e,0)
          // console.log(test)
          if(test) {
            incrementTest++
            if(incrementTest === 3) {
              console.log("valid username")
            }
          } 
        })
        if(incrementTest < 3) {
          console.log("Username should have 3 numbers")
        }

      } else {
        console.log("Username should 6 characters long without space character")
      }
    }
}
