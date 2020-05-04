import {
    viewForm,
    fieldConstraint,
    CustomValidatorsService,
  } from '../../../../framework';
interface IDepartment {
    departmentId: string,
    departmentName: string,
}
class Department implements IDepartment {
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
class Account implements IAccount {
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
interface ILocation {
    locationId: string,
    locationName: string
}
class Location implements ILocation {
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
class Grade implements IGrade {
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
class Designation implements IDesignation {
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

class BillableStatus implements IBillableStatus {
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
class ServiceLine implements IServiceLine {
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
class Academics implements IAcademics {
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
interface IProject {
    projectId: string,
    projectName: string
}
class Project implements IProject {
    projectId: string;
    projectName: string;
    constructor(project: IProject = {
        projectId: "",
        projectName: ""
    }) {
        this.projectId = project.projectId;
        this.projectName = project.projectName;
    }
}
interface IEmployeeSearchFormModel {
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
    projects: Project[];
    serviceLine: ServiceLine[];
    academics: Academics[];
}
@viewForm('EmployeeSearch')
export class EmployeeSearchFormModel implements  IEmployeeSearchFormModel{
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
    projects: Project[];
    serviceLine: ServiceLine[];
    academics: Academics[];
        constructor(employeeSearchFormModel: IEmployeeSearchFormModel = {
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
            projects:[],
            serviceLine: [],
            academics: [],
                }) {
            this.employeeSqId = employeeSearchFormModel.employeeSqId;
            this.employeeId = employeeSearchFormModel.employeeId;
            this.employeeName = employeeSearchFormModel.employeeName;
            this.department = employeeSearchFormModel.department;
            this.account = employeeSearchFormModel.account;
            this.region = employeeSearchFormModel.region;
            this.location = employeeSearchFormModel.location;
            this.grade = employeeSearchFormModel.grade;
            this.designation = employeeSearchFormModel.designation;
            this.billableStatus = employeeSearchFormModel.billableStatus;
            this.projects = employeeSearchFormModel.projects;
            this.serviceLine = employeeSearchFormModel.serviceLine;
            this.academics = employeeSearchFormModel.academics;
        }
}
