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
interface ICustomerSearchDataModel {
    accountName?: string;
    region: Region[];
}
export class CustomerSearchDataModel implements  ICustomerSearchDataModel{
    accountName: string;
    region: Region[];
        constructor(customerSearchDataModel: ICustomerSearchDataModel = {
            accountName: "",
                region: [],
                }) {
            this.accountName = customerSearchDataModel.accountName || '';
            this.region = customerSearchDataModel.region || [];
        }
}