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
}
class Account implements  IAccount {
    accountId: number;
    accountName: string;
        constructor(account: IAccount = {
            accountId: 0,
            accountName: ""
                }) {
            this.accountId = account.accountId || 0;
            this.accountName = account.accountName || '';
        }
}
interface IProjectSearchDataModel {
    projectName?: string;
    account: Account[];
    region: Region[];
}
export class ProjectSearchDataModel implements  IProjectSearchDataModel{
    projectName: string;
    account: Account[];
    region: Region[];
        constructor(projectSearchDataModel: IProjectSearchDataModel = {
                projectName: "",
                account: [],
                region: [],
                }) {
            this.projectName = projectSearchDataModel.projectName || "";
            this.account = projectSearchDataModel.account || [];
            this.region = projectSearchDataModel.region || [];
        }
}