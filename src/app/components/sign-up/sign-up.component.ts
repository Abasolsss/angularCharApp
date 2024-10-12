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

    const userValueLength = value.length

    return userValueLength
  }


    submitFunct() {
      
      const userLengthVal = this.userLength()

      console.log(userLengthVal)
      const userValue: HTMLInputElement | null = document.querySelector(".userNameValue")

      const userValues = this.userName = userValue?.value as string


      for(let i:number = 0; i < userValues.length; i++) {
          const loopedUserName = userValues[i]
          console.log(loopedUserName)

      }

      if (userLengthVal === this.userNameLength) {
          console.log(true)
      } else {
        console.log(false)
      }
  
    }


  
    

    
}
