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
interface ICustomerListFormModel {
    accountId? : number;
    accountName?: string;
    region: Region;
}
export class CustomerListFormModel implements  ICustomerListFormModel {
    accountId? : number;
    accountName: string;
    region: Region;
        constructor(customerListFormModel: ICustomerListFormModel = {
            accountId: 0,
            accountName: "",
                region: new Region(),
                }) {
            this.accountId = customerListFormModel.accountId || 0;
            this.accountName = customerListFormModel.accountName || "";
            this.region = customerListFormModel.region || new Region();
        }
}