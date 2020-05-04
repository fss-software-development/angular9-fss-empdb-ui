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
interface ICustomerAddFormModel {
    accountId?: number;
    accountName?: string;
    region: Region;
}
@viewForm('CustomerAdd')
export class CustomerAddFormModel implements  ICustomerAddFormModel {
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
        constructor(customerAddFormModel: ICustomerAddFormModel = {
            accountId: 0,
            accountName: "",
                region: new Region(),
                }) {
            this.accountId = customerAddFormModel.accountId || 0;
            this.accountName = customerAddFormModel.accountName || '';
            this.region = customerAddFormModel.region || new Region();
        }
}