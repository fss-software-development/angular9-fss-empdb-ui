import {
    viewForm,
    fieldConstraint,
    CustomValidatorsService,
  } from '../../../../../framework';
import {Validators} from '@angular/forms';
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
interface IProjectEditFormModel {
    projectId: number;
    projectName: string;
    account: Account;
    region: Region;
    projectStartDate?: string;
    projectEndDate?: string;
}
@viewForm('ProjectEdit')
export class ProjectEditFormModel implements  IProjectEditFormModel {
    projectId: number;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Project name required'
        }
    })
    projectName: string;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Account required'
        }
    })
    account: Account;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Region required'
        }
    })
    region: Region;
    projectStartDate?: string;
    projectEndDate?: string;
        constructor(projectEditFormModel: IProjectEditFormModel = {
            projectId: 0,
            projectName: "",
            account: new Account(),
            region: new Region(),
            projectStartDate: "",
            projectEndDate: ""
                }) {
                    this.projectId = projectEditFormModel.projectId || 0;
                    this.projectName = projectEditFormModel.projectName || '';
                    this.account = projectEditFormModel.account || new Account();
                    this.region = projectEditFormModel.region || new Region();
                    this.projectStartDate = projectEditFormModel.projectStartDate || "";
                    this.projectEndDate = projectEditFormModel.projectEndDate || "";
        }
}