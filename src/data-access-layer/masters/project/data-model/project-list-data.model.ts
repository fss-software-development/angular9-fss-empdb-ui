
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
interface IProjectListDataModel {
    projectId?: number;
    projectName?: string;
    projectStartDate? : string;
    projectEndDate?: string;
    region: Region;
    account: Account;
}
export class ProjectListDataModel implements  IProjectListDataModel {
    projectId: number;
    projectName: string;
    projectStartDate : string;
    projectEndDate: string;
    region: Region;
    account: Account;
        constructor(projectListDataModel: IProjectListDataModel = {
            projectId: 0,
            projectName: "",
            projectStartDate: "",
            projectEndDate: "",
            region: new Region(),
            account: new Account()
                }) {
                    this.projectId = projectListDataModel.projectId || 0;
                    this.projectName = projectListDataModel.projectName || "";
                    this.projectStartDate = projectListDataModel.projectStartDate || "";
                    this.projectEndDate = projectListDataModel.projectEndDate || "";
                    this.region = projectListDataModel.region || new Region();
                    this.account = projectListDataModel.account || new Account();
        }
}