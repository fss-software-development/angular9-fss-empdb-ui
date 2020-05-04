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
interface ICustomerEditFormModel {
    accountId?: number;
    accountName?: string;
    region: Region;
}
@viewForm('CustomerEdit')
export class CustomerEditFormModel implements  ICustomerEditFormModel {
    accountId: number;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Account name required'
        }
    })
    accountName: string;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Region required'
        }
    })
    region: Region;
        constructor(customerEditFormModel: ICustomerEditFormModel = {
            accountId: 0,
            accountName: "",
                region: new Region(),
                }) {
            this.accountId = customerEditFormModel.accountId || 0;
            this.accountName = customerEditFormModel.accountName || '';
            this.region = customerEditFormModel.region || new Region();
        }
}