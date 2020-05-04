import {
    viewForm,
    fieldConstraint,
    CustomValidatorsService,
  } from '../../../../framework';
import {Validators} from '@angular/forms';

interface ILoginFormModel {
    userId: string;
    userPassword: string;
}
@viewForm('Login')
export class LoginFormModel implements  ILoginFormModel {
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'User Id required'
        }
    })
    userId: string;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Password required'
        }
    })
    userPassword: string;
        constructor(loginFormModel: ILoginFormModel = {
            userId: "",
            userPassword: ""
                }) {
            this.userId = loginFormModel.userId || "";
            this.userPassword = loginFormModel.userPassword || '';
        }
}