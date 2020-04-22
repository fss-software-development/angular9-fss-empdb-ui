import {
    viewForm,
    fieldConstraint,
    CustomValidatorsService,
  } from '../../../../../framework';

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
interface ICustomerSearchFormModel {
    accountName?: string;
    region: Region[];
}
@viewForm('CustomerSearch')
export class CustomerSearchFormModel implements  ICustomerSearchFormModel{
    accountName: string;
    region: Region[];
        constructor(customerSearchFormModel: ICustomerSearchFormModel = {
            accountName: "",
                region: [],
                }) {
            this.accountName = customerSearchFormModel.accountName || '';
            this.region = customerSearchFormModel.region || [];
        }
}