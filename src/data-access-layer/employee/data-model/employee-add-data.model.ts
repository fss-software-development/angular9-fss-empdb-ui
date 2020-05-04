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
    region: Region
}
 class Account implements IAccount {
    accountId: number;
    accountName: string;
    region: Region;
    constructor(account: IAccount = {
        accountId: 0,
        accountName: "",
        region: new Region(),
    }) {
        this.accountId = account.accountId;
        this.accountName = account.accountName;
        this.region = account.region || new Region();
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
interface ITools {
    toolId: string;
    toolName: string;
}
class Tools implements ITools {
    toolId: string;
    toolName: string;
    constructor(tools: ITools = {
        toolId: "",
        toolName: ""
    }){
        this.toolId = tools.toolId || "";
        this.toolName = tools.toolName || "";
    }
}

interface IDefiniteRole {
    roleId: string;
    roleName: string;
}
class DefiniteRole implements IDefiniteRole {
    roleId: string;
    roleName: string;
    constructor(definiteRole:IDefiniteRole = {
        roleId: "",
        roleName:""
    }){
        this.roleId = definiteRole.roleId || "";
        this.roleName = definiteRole.roleName || "";
    }
}

interface IPossibleRole {
    roleId: string;
    roleName: string;
}
class PossibleRole implements IPossibleRole {
    roleId: string;
    roleName: string;
    constructor(possibleRole:IPossibleRole = {
        roleId: "",
        roleName:""
    }){
        this.roleId = possibleRole.roleId || "";
        this.roleName = possibleRole.roleName || "";
    }
}
interface IEmployeeAddDataModel {
    employeeSqId: number;
    employeeId: string;
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
    experienceCurrentRole: number;
    totalExperience: number;
    experienceGaps: number;
    academics: Academics;
    projects: Project[];
    skills: PrimarySkill[];
    tools: Tools[];
    definiteRole: DefiniteRole[];
    possibleRole: PossibleRole[];
    projectTagging: ProjectTagging;
}
export class EmployeeAddDataModel implements  IEmployeeAddDataModel{
    employeeSqId: number;
    employeeId: string;
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
    experienceCurrentRole: number;
    totalExperience: number;
    experienceGaps: number;
    academics: Academics;
    projects: Project[];
    skills: PrimarySkill[];
    tools: Tools[];
    definiteRole: DefiniteRole[];
    possibleRole: PossibleRole[];
    projectTagging: ProjectTagging;
        constructor(employeeAddDataModel: IEmployeeAddDataModel = {
            employeeSqId: 0,
            employeeId: "",
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
            previousExp: null,
            joiningDate: "",
            billableStatus: new BillableStatus(),
            serviceLine: new ServiceLine(),
            activityName: "",
            experienceCurrentRole: null,
            totalExperience: null,
            experienceGaps: 0,
            academics: new Academics(),
            projects: [],
            skills: [],
            tools: [],
            definiteRole: [],
            possibleRole: [],
            projectTagging: new ProjectTagging()
                }) {
                    this.employeeSqId = employeeAddDataModel.employeeSqId || 0;
                    this.employeeId = employeeAddDataModel.employeeId || "";
                    this.department = employeeAddDataModel.department || new Department();
                    this.account = employeeAddDataModel.account || new Account();
                    this.region = employeeAddDataModel.region || new Region();
                    this.location = employeeAddDataModel.location || new Location();
                    this.employeeName = employeeAddDataModel.employeeName || '';
                    this.mobileNum = employeeAddDataModel.mobileNum || 0;
                    this.emailId = employeeAddDataModel.emailId || '';
                    this.grade = employeeAddDataModel.grade || new Grade();
                    this.designation = employeeAddDataModel.designation || new Designation();
                    this.reportingManager = employeeAddDataModel.reportingManager || '';
                    this.previousExp = employeeAddDataModel.previousExp || null;
                    this.joiningDate = employeeAddDataModel.joiningDate || '';
                    this.billableStatus = employeeAddDataModel.billableStatus || new BillableStatus();
                    this.serviceLine = employeeAddDataModel.serviceLine || new ServiceLine();
                    this.activityName = employeeAddDataModel.activityName || '';
                    this.totalExperience = employeeAddDataModel.totalExperience || null;
                    this.experienceGaps = employeeAddDataModel.experienceGaps || null;
                    this.experienceGaps = employeeAddDataModel.experienceGaps || 0;
                    this.academics = employeeAddDataModel.academics ||  new Academics();
                    this.projects = employeeAddDataModel.projects || [];
                    this.skills = employeeAddDataModel.skills || [];
                    this.tools = employeeAddDataModel.tools ||  [];
                    this.definiteRole = employeeAddDataModel.definiteRole || [];
                    this.possibleRole= employeeAddDataModel.possibleRole || [];
                    this.projectTagging = employeeAddDataModel.projectTagging || new ProjectTagging();
        }
}
