interface IRegion {
    regionId?: number,
    regionName?: string
}
class Region implements IRegion {
    regionId: number;
    regionName: string;
    constructor(region: IRegion = {
        regionId: 0,
        regionName: ""
    }) {
        this.regionId = region.regionId || 0;
        this.regionName = region.regionName || "";
    }
}

interface IAccount {
    accountId?: number;
    accountName?: string;
    region:  Region;
}
class Account implements  IAccount {
    accountId: number;
    accountName: string;
    region:  Region;
        constructor(account: IAccount = {
            accountId: 0,
            accountName: "",
            region:  new Region()
                }) {
            this.accountId = account.accountId || 0;
            this.accountName = account.accountName || '';
            this.region = account.region || new Region();
        }
}
interface IProjectListFormModel {
    projectId?: number;
    projectName?: string;
    projectStartDate? : string;
    projectEndDate?: string;
    region: Region;
    account: Account;
}
export class ProjectListFormModel implements  IProjectListFormModel {
    projectId: number;
    projectName: string;
    projectStartDate : string;
    projectEndDate: string;
    region: Region;
    account: Account;
        constructor(projectListFormModel: IProjectListFormModel = {
            projectId: 0,
            projectName: "",
            projectStartDate: "",
            projectEndDate: "",
            region: new Region(),
            account: new Account()
                }) {
            this.projectId = projectListFormModel.projectId || 0;
            this.projectName = projectListFormModel.projectName || "";
            this.projectStartDate = projectListFormModel.projectStartDate || "";
            this.projectEndDate = projectListFormModel.projectEndDate || "";
            this.region = projectListFormModel.region || new Region();
            this.account = projectListFormModel.account || new Account();
        }
}