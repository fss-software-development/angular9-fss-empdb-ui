interface IRegion {
    regionId?: string,
    regionName?: string
}
class Region implements IRegion {
    regionId: string;
    regionName: string;
    constructor(region: IRegion = {
        regionId: "",
        regionName: ""
    }) {
        this.regionId = region.regionId;
        this.regionName = region.regionName;
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
interface IProjectEditDataModel {
    projectId?: number;
    projectName: string;
    account: Account;
    region: Region;
    projectStartDate?: string;
    projectEndDate?: string;
}
export class ProjectEditDataModel implements  IProjectEditDataModel {
    projectId: number;
    projectName: string;
    account: Account;
    region: Region;
    projectStartDate: string;
    projectEndDate: string;
        constructor(projectEditDataModel: IProjectEditDataModel = {
            projectId: 0,
            projectName: "",
            account: new Account(),
            region: new Region(),
            projectStartDate: "",
            projectEndDate: ""
                }) {
                    this.projectId = projectEditDataModel.projectId || 0;
                    this.projectName = projectEditDataModel.projectName || '';
                    this.account = projectEditDataModel.account || new Account();
                    this.region = projectEditDataModel.region || new Region();
                    this.projectStartDate = projectEditDataModel.projectStartDate || "";
                    this.projectEndDate = projectEditDataModel.projectEndDate || "";
        }
}