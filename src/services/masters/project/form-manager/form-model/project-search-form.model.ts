import {
    viewForm,
    fieldConstraint,
    CustomValidatorsService,
  } from '../../../../../framework';

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
        this.regionName = region.regionName || '';
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
interface IProjectSearchFormModel {
    projectName?: string;
    account: Account[];
    region: Region[];
}
@viewForm('ProjectSearch')
export class ProjectSearchFormModel implements  IProjectSearchFormModel {
    projectName: string;
    account: Account[];
    region: Region[];
        constructor(projectSearchFormModel: IProjectSearchFormModel = {
            projectName: "",
            account: [],
            region: [],
                }) {
            this.projectName = projectSearchFormModel.projectName|| '';
            this.account = projectSearchFormModel.account || [];
            this.region = projectSearchFormModel.region || [];
        }
}