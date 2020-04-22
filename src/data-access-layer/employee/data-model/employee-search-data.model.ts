interface IDepartment {
    departmentId: string,
    departmentName: string,
}
export class Department implements IDepartment {
    departmentId: string;
    departmentName: string;
    constructor(department: IDepartment = {
        departmentId: "",
        departmentName: ""
    }) {
        this.departmentId = department.departmentId;
        this.departmentName = department.departmentName;
    }
}
interface IAccount {
    accountId: string,
    accountName: string
}
export class Account implements IAccount {
    accountId: string;
    accountName: string;
    constructor(account: IAccount = {
        accountId: "",
        accountName: ""
    }) {
        this.accountId = account.accountId;
        this.accountName = account.accountName;
    }
}
interface IRegion {
    regionId: string,
    regionName: string
}
export class Region implements IRegion {
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
interface ILocation {
    locationId: string,
    locationName: string
}
export class Location implements ILocation {
    locationId: string;
    locationName: string;
    constructor(location: ILocation = {
        locationId: "",
        locationName: ""
    }) {
        this.locationId = location.locationId;
        this.locationName = location.locationName;
    }
}
interface IGrade {
    gradeId: string,
    gradeName: string
}
export class Grade implements IGrade {
    gradeId: string;
    gradeName: string;
    constructor(grade: IGrade = {
        gradeId: "",
        gradeName: ""
    }) {
        this.gradeId = grade.gradeId;
        this.gradeName = grade.gradeName;
    }
}
interface IDesignation {
    designationId: string,
    designationName: string
}
export class Designation implements IDesignation {
    designationId: string;
    designationName: string;
    constructor(designation: IDesignation = {
        designationId: "",
        designationName: ""
    }) {
        this.designationId = designation.designationId;
        this.designationName = designation.designationName;
    }
}
interface IBillableStatus {
    billableStatusId: string,
    billableStatus: string
}

export class BillableStatus implements IBillableStatus {
    billableStatusId: string;
    billableStatus: string;
    constructor(billableStatus: IBillableStatus = {
        billableStatusId: "",
        billableStatus: ""
    }) {
        this.billableStatusId = billableStatus.billableStatusId;
        this.billableStatus = billableStatus.billableStatus;
    }
}
interface IServiceLine {
    serviceLineId: string,
    serviceLineName: string
}
export class ServiceLine implements IServiceLine {
    serviceLineId: string;
    serviceLineName: string;
    constructor(serviceLine: IServiceLine = {
        serviceLineId: "",
        serviceLineName: ""
    }) {
        this.serviceLineId = serviceLine.serviceLineId;
        this.serviceLineName = serviceLine.serviceLineName;
    }
}
interface IAcademics {
    academicsId: string,
    academicsName: string
}
export class Academics implements IAcademics {
    academicsId: string;
    academicsName: string;
    constructor(academics: IAcademics = {
        academicsId: "",
        academicsName: ""
    }) {
        this.academicsId = academics.academicsId;
        this.academicsName = academics.academicsName;
    }
}
interface IEmployeeSearchDataModel {
    employeeSqId: string;
    employeeId: string;
    employeeName: string;
    department: Department[];
    account: Account[];
    region: Region[];
    location: Location[];
    grade: Grade[];
    designation: Designation[];
    billableStatus: BillableStatus[];
    serviceLine: ServiceLine[];
    academics: Academics[];
}
export class EmployeeSearchDataModel implements  IEmployeeSearchDataModel{
    employeeSqId: string;
    employeeId: string;
    employeeName: string;
    department: Department[];
    account: Account[];
    region: Region[];
    location: Location[];
    grade: Grade[];
    designation: Designation[];
    billableStatus: BillableStatus[];
    serviceLine: ServiceLine[];
    academics: Academics[];
        constructor(employeeSearchDataModel: IEmployeeSearchDataModel = {
            employeeSqId: "",
            employeeId: "",
            employeeName: "",
            department: [],
            account: [],
            region: [],
            location: [],
            grade: [],
            designation: [],
            billableStatus: [],
            serviceLine: [],
            academics: [],
                }) {
            this.employeeSqId = employeeSearchDataModel.employeeSqId;
            this.employeeId = employeeSearchDataModel.employeeId;
            this.employeeName = employeeSearchDataModel.employeeName;
            this.department = employeeSearchDataModel.department;
            this.account = employeeSearchDataModel.account;
            this.region = employeeSearchDataModel.region;
            this.location = employeeSearchDataModel.location;
            this.grade = employeeSearchDataModel.grade;
            this.designation = employeeSearchDataModel.designation;
            this.billableStatus = employeeSearchDataModel.billableStatus;
            this.serviceLine = employeeSearchDataModel.serviceLine;
            this.academics = employeeSearchDataModel.academics;
        }
}
