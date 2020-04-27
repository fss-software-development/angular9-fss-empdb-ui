interface IDepartment {
    departmentId: number,
    departmentName: string,
    departmentHead: string
}
 class Department implements IDepartment {
    departmentId: number;
    departmentName: string;
    departmentHead: string;
    constructor(department: IDepartment = {
        departmentId: 0,
        departmentName: "",
        departmentHead: ""
    }) {
        this.departmentId = department.departmentId;
        this.departmentName = department.departmentName;
        this.departmentHead = department.departmentHead;
    }
}
interface IAccount {
    accountId: number,
    accountName: string,
    insUser: string
}
 class Account implements IAccount {
    accountId: number;
    accountName: string;
    insUser: string;
    constructor(account: IAccount = {
        accountId: 0,
        accountName: "",
        insUser: "",
    }) {
        this.accountId = account.accountId;
        this.accountName = account.accountName;
        this.insUser = account.insUser;
    }
}
interface IRegion {
    regionId: number,
    regionName: string
}
 class Region implements IRegion {
    regionId: number;
    regionName: string;
    constructor(region: IRegion = {
        regionId: 0,
        regionName: ""
    }) {
        this.regionId = region.regionId;
        this.regionName = region.regionName;
    }
}
interface ILocation {
    locationId: number,
    locationName: string
}
 class Location implements ILocation {
    locationId: number;
    locationName: string;
    constructor(location: ILocation = {
        locationId: 0,
        locationName: ""
    }) {
        this.locationId = location.locationId;
        this.locationName = location.locationName;
    }
}
interface IGrade {
    gradeId: number,
    gradeName: string
}
 class Grade implements IGrade {
    gradeId: number;
    gradeName: string;
    constructor(grade: IGrade = {
        gradeId: 0,
        gradeName: ""
    }) {
        this.gradeId = grade.gradeId;
        this.gradeName = grade.gradeName;
    }
}
interface IDesignation {
    designationId: number,
    designationName: string
}
 class Designation implements IDesignation {
    designationId: number;
    designationName: string;
    constructor(designation: IDesignation = {
        designationId: 0,
        designationName: ""
    }) {
        this.designationId = designation.designationId;
        this.designationName = designation.designationName;
    }
}
interface IBillableStatus {
    billableStatusId: number,
    billableStatus: string
}

 class BillableStatus implements IBillableStatus {
    billableStatusId: number;
    billableStatus: string;
    constructor(billableStatus: IBillableStatus = {
        billableStatusId: 0,
        billableStatus: ""
    }) {
        this.billableStatusId = billableStatus.billableStatusId;
        this.billableStatus = billableStatus.billableStatus;
    }
}
interface IServiceLine {
    serviceLineId: number,
    serviceLineName: string
}
 class ServiceLine implements IServiceLine {
    serviceLineId: number;
    serviceLineName: string;
    constructor(serviceLine: IServiceLine = {
        serviceLineId: 0,
        serviceLineName: ""
    }) {
        this.serviceLineId = serviceLine.serviceLineId;
        this.serviceLineName = serviceLine.serviceLineName;
    }
}
interface IAcademics {
    academicsId: number,
    academicsName: string
}
 class Academics implements IAcademics {
    academicsId: number;
    academicsName: string;
    constructor(academics: IAcademics = {
        academicsId: 0,
        academicsName: ""
    }) {
        this.academicsId = academics.academicsId;
        this.academicsName = academics.academicsName;
    }
}
interface IProject {
    projectId: number,
    projectName: string
}
 class Project implements IProject {
    projectId: number;
    projectName: string;
    constructor(project: IProject = {
        projectId: 0,
        projectName: ""
    }) {
        this.projectId = project.projectId;
        this.projectName = project.projectName;
    }
}

interface IProjectTagging {
    projectTaggingId: number,
    projectTaggingName: string
}
 class ProjectTagging implements IProjectTagging {
    projectTaggingId: number;
    projectTaggingName: string;
    constructor(projectTagging: IProjectTagging = {
        projectTaggingId: 0,
        projectTaggingName: ""
    }) {
        this.projectTaggingId = projectTagging.projectTaggingId;
        this.projectTaggingName = projectTagging.projectTaggingName;
    }
}

interface IRole {
    roleId: number,
    roleName: string
}
 class Role implements IRole {
    roleId: number;
    roleName: string;
    constructor(role: IRole = {
        roleId: 0,
        roleName: ""
    }) {
        this.roleId = role.roleId;
        this.roleName = role.roleName;
    }
}
interface IPrimarySkill {
    skillId: number,
    skillName: string
}
class PrimarySkill implements IPrimarySkill {
    skillId: number;
    skillName: string;
    constructor(primarySkill: IPrimarySkill = {
        skillId: 0,
        skillName: ""
    }) {
        this.skillId = primarySkill.skillId;
        this.skillName = primarySkill.skillName;
    }
}

interface IEmployeeListDataModel {
    employeeSqId: number;
    employeeId: number;
    department: Department;
    account: Account;
    region: Region;
    location: Location;
    employeeName: string;
    mobileNum: number;
    emailId: string;
    grade: Grade;
    designation: Designation;
    reportingManager: string;
    previousExp: number;
    joiningDate: string;
    billableStatus: BillableStatus;
    serviceLine: ServiceLine;
    activityName: string;
    experienceGaps: number;
    academics: Academics;
    insUser: string;
    insDate: string;
    lastUpdateUser: number;
    lastUpdateDate: string;
}
export class EmployeeListDataModel implements  IEmployeeListDataModel{
    employeeSqId: number;
    employeeId: number;
    department: Department;
    account: Account;
    region: Region;
    location: Location;
    employeeName: string;
    mobileNum: number;
    emailId: string;
    grade: Grade;
    designation: Designation;
    reportingManager: string;
    previousExp: number;
    joiningDate: string;
    billableStatus: BillableStatus;
    serviceLine: ServiceLine;
    activityName: string;
    experienceGaps: number;
    academics: Academics;
    insUser: string;
    insDate: string;
    lastUpdateUser: number;
    lastUpdateDate: string;
        constructor(employeeListDataModel: IEmployeeListDataModel = {
            employeeSqId: 0,
            employeeId: 0,
            department: new Department(),
            account: new Account(),
            region: new Region(),
            location: new Location(),
            employeeName: "",
            mobileNum: 0,
            emailId: "",
            grade: new Grade(),
            designation: new Designation(),
            reportingManager: "",
            previousExp: 0,
            joiningDate: "",
            billableStatus: new BillableStatus(),
            serviceLine: new ServiceLine(),
            activityName: "",
            experienceGaps: 0,
            academics: new Academics(),
            insUser: "",
            insDate: "",
            lastUpdateUser: 0,
            lastUpdateDate: "",
                }) {
                    this.employeeSqId = employeeListDataModel.employeeSqId || 0;
                    this.employeeId = employeeListDataModel.employeeId || 0;
                    this.employeeName = employeeListDataModel.employeeName || '';
                    this.mobileNum = employeeListDataModel.mobileNum || 0;
                    this.emailId = employeeListDataModel.emailId || '';
                    this.department = employeeListDataModel.department || new Department();
                    this.account = employeeListDataModel.account || new Account();
                    this.region = employeeListDataModel.region || new Region();
                    this.location = employeeListDataModel.location || new Location();
                    this.grade = employeeListDataModel.grade || new Grade();
                    this.designation = employeeListDataModel.designation || new Designation();
                    this.billableStatus = employeeListDataModel.billableStatus || new BillableStatus();
                    this.serviceLine = employeeListDataModel.serviceLine || new ServiceLine();
                    this.academics = employeeListDataModel.academics || new Academics();
                    this.reportingManager = employeeListDataModel.reportingManager || '';
                    this.previousExp = employeeListDataModel.previousExp || 0;
                    this.joiningDate = employeeListDataModel.joiningDate || '';
                    this.activityName = employeeListDataModel.activityName || '';
                    this.experienceGaps = employeeListDataModel.experienceGaps || 0;
                    this.insUser = employeeListDataModel.insUser || '';
                    this.insDate = employeeListDataModel.insDate || '';
                    this.lastUpdateUser = employeeListDataModel.lastUpdateUser || 0;
                    this.lastUpdateDate = employeeListDataModel.lastUpdateDate || '';
        }
}
