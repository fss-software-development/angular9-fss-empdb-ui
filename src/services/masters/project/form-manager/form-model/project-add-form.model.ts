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
interface IProjectAddFormModel {
    projectId?: number;
    projectName: string;
    account: Account;
    region: Region;
    projectStartDate?: string;
    projectEndDate?: string;
}
@viewForm('ProjectAdd')
export class ProjectAddFormModel implements  IProjectAddFormModel {
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
    projectStartDate: string;
    projectEndDate: string;
        constructor(projectAddFormModel: IProjectAddFormModel = {
            projectId: 0,
            projectName: "",
            account: new Account(),
            region: new Region(),
            projectStartDate: "",
            projectEndDate: ""
                }) {
                    this.projectId = projectAddFormModel.projectId || 0;
                    this.projectName = projectAddFormModel.projectName || '';
                    this.account = projectAddFormModel.account || new Account();
                    this.region = projectAddFormModel.region || new Region();
                    this.projectStartDate = projectAddFormModel.projectStartDate || "";
                    this.projectEndDate = projectAddFormModel.projectEndDate || "";
        }
}