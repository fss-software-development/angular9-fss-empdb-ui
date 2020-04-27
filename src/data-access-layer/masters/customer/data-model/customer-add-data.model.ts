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
interface ICustomerAddDataModel {
    accountId?: number;
    accountName?: string;
    region: Region;
}
export class CustomerAddDataModel implements  ICustomerAddDataModel {
    accountId: number;
    accountName: string;
    region: Region;
        constructor(customerAddDataModel: ICustomerAddDataModel = {
            accountId: 0,
            accountName: "",
                region: new Region(),
                }) {
            this.accountId = customerAddDataModel.accountId || 0;
            this.accountName = customerAddDataModel.accountName || '';
            this.region = customerAddDataModel.region || new Region();
        }
}