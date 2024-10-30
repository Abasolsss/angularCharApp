//username no uppercase
//username no special characters
//username no space allowed
//username only 3 numbers and 3 letters
//username only have 6 characters

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function userNameCheck(control: AbstractControl) {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const usernameVal: string = control.value || '';
  //     const userNameLength: boolean = usernameVal.length === 6;
  //     const userCheck: boolean = nameCheck.test(usernameVal);

  //     if (userNameLength === false || userCheck === true) {
  //       return { upperCaseCheck: true };
  //     }
  //     return null;
  //   };

  const test: RegExp = /([A-Z])/g;
  const usernameVal: string = control.value || '';
  const userNameLength: boolean = usernameVal.length === 6;
  const userCheck: boolean = test.test(usernameVal);

  if (userNameLength === false || userCheck === true) {
    return { upperCaseCheck: true };
  }
  return null;
}
