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
interface ICustomerEditDataModel {
    accountId?: number;
    accountName?: string;
    region: Region;
}
export class CustomerEditDataModel implements  ICustomerEditDataModel {
    accountId: number;
    accountName: string;
    region: Region;
        constructor(customerEditDataModel: ICustomerEditDataModel = {
            accountId: 0,
            accountName: "",
                region: new Region(),
                }) {
            this.accountId = customerEditDataModel.accountId || 0;
            this.accountName = customerEditDataModel.accountName || '';
            this.region = customerEditDataModel.region || new Region();
        }
}