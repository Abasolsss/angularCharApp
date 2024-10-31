//username no uppercase
//username no special characters
//username no space allowed
//username only 3 numbers and 3 letters
//username only have 6 characters

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function userNameCheck(control: AbstractControl) {
  const usernameVal: string = control.value || '';

  const upperCaseCheck: RegExp = /([A-Z])/g;
  const lowerCaseCheck: RegExp = /([a-z])/g
  const numberCheck: RegExp = /([0-9])/g

  const userNameLength: boolean = usernameVal.length === 6;
  const userCheck: boolean = upperCaseCheck.test(usernameVal);
  const spaceCheck: boolean = /\s/.test(usernameVal)


  const userLowerCaseCheck = usernameVal.match(lowerCaseCheck)
  const userNumCaseCheck = usernameVal.match(numberCheck)

  const lowerCaseLength: boolean = userLowerCaseCheck?.length! === 3 || userNumCaseCheck?.length! === 3 
  // const numberCaseLength: number = userNumCaseCheck?.length!

  // const testo: boolean = lowerCaseLength === 3
  // const testos: boolean = numberCaseLength === 3

  if(userNameLength === false) {
    return {userLengthCheck: true}
  }

  if(lowerCaseLength === false) {
    return {userCheck: true}
  }

  if(spaceCheck === true) {
    return {spaceCheck: true}
  }


  
  return null

}



export function firstLastNameCheck(control: AbstractControl) {
  console.log(control.value)
}
