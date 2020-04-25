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
interface ICustomerListDataModel {
    accountId? : number;
    accountName?: string;
    region: Region[];
}
export class CustomerListDataModel implements  ICustomerListDataModel {
    accountId? : number;
    accountName: string;
    region: Region[];
        constructor(customerListDataModel: ICustomerListDataModel = {
            accountId: 0,
            accountName: "",
                region: [],
                }) {
            this.accountId = customerListDataModel.accountId || 0;
            this.accountName = customerListDataModel.accountName || "";
            this.region = customerListDataModel.region || [];
        }
}