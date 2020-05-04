interface ILoginDataModel {
    userId: string;
    userPassword: string;
}
export class LoginDataModel implements  ILoginDataModel {
    userId: string;
    userPassword: string;
        constructor(loginDataModel: ILoginDataModel = {
            userId: "",
            userPassword: ""
                }) {
            this.userId = loginDataModel.userId || "";
            this.userPassword = loginDataModel.userPassword || '';
        }
}