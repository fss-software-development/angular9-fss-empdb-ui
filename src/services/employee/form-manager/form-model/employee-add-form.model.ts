import {
    viewForm,
    fieldConstraint,
    CustomValidatorsService,
  } from '../../../../framework';
import {Validators} from '@angular/forms';

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
interface IEmployeeAddFormModel {
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
@viewForm('EmployeeAdd')
export class EmployeeAddFormModel implements  IEmployeeAddFormModel{
    employeeSqId: number;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Employee ID required'
        }
    })
    employeeId: string;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Department required'
        }
    })
    department: Department;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Account required'
        }
    })
    account: Account;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Region required'
        }
    })
    region: Region;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Location required'
        }
    })
    location: Location;
    @fieldConstraint({
        validation: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),

        ],
        onScreenMessage: {
              'required': 'Employee name required',
              'minlength': 'Employee name must have 3 to 30 characters.\n',
              'maxlength': 'Employee name must have 3 to 30 characters.\n'
        }
    })
    employeeName: string;
    @fieldConstraint({
        validation: [
            Validators.required,
            CustomValidatorsService.isPhoneNumber
        ],
        onScreenMessage: {
              'required': 'Mobile number required',
              'isPhoneNumber': 'Enter a valid phone number'
        }
    })
    mobileNum: number;
    @fieldConstraint({
        validation: [
            Validators.required,
            CustomValidatorsService.isEmail
        ],
        onScreenMessage: {
              'required': 'Email Id required',
              'isEmail': 'Enter a valid email'
        }
    })
    emailId: string;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Grade required'
        }
    })
    grade: Grade;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Designation required'
        }
    })
    designation: Designation;
    reportingManager: string;
    previousExp: number;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Joining Date required'
        }
    })
    joiningDate: string;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Billable Status required'
        }
    })
    billableStatus: BillableStatus;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Service Line required'
        }
    })
    serviceLine: ServiceLine;
    activityName: string;
    experienceCurrentRole: number;
    totalExperience: number;
    experienceGaps: number;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Academics required'
        }
    })
    academics: Academics;
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Project required'
        }
    })
    projects: Project[];
    skills: PrimarySkill[];
    tools: Tools[];
    definiteRole: DefiniteRole[];
    possibleRole: PossibleRole[];
    @fieldConstraint({
        validation: [Validators.required],
        onScreenMessage: {
              'required': 'Project Tagging required'
        }
    })
    projectTagging: ProjectTagging;
        constructor(employeeAddFormModel: IEmployeeAddFormModel = {
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
            experienceCurrentRole: 0,
            totalExperience: 0,
            experienceGaps: 0,
            academics: new Academics(),
            projects: [],
            skills: [],
            tools: [],
            definiteRole: [],
            possibleRole: [],
            projectTagging: new ProjectTagging()
                }) {
                    this.employeeSqId = employeeAddFormModel.employeeSqId || 0;
                    this.employeeId = employeeAddFormModel.employeeId || "";
                    this.department = employeeAddFormModel.department || new Department();
                    this.account = employeeAddFormModel.account || new Account();
                    this.region = employeeAddFormModel.region || new Region();
                    this.location = employeeAddFormModel.location || new Location();
                    this.employeeName = employeeAddFormModel.employeeName || '';
                    this.mobileNum = employeeAddFormModel.mobileNum || null;
                    this.emailId = employeeAddFormModel.emailId || '';
                    this.grade = employeeAddFormModel.grade || new Grade();
                    this.designation = employeeAddFormModel.designation || new Designation();
                    this.reportingManager = employeeAddFormModel.reportingManager || '';
                    this.previousExp = employeeAddFormModel.previousExp || null;
                    this.joiningDate = employeeAddFormModel.joiningDate || '';
                    this.billableStatus = employeeAddFormModel.billableStatus || new BillableStatus();
                    this.serviceLine = employeeAddFormModel.serviceLine || new ServiceLine();
                    this.activityName = employeeAddFormModel.activityName || '';
                    this.experienceCurrentRole = employeeAddFormModel.experienceCurrentRole || null;
                    this.totalExperience = employeeAddFormModel.totalExperience || null;
                    this.experienceGaps = employeeAddFormModel.experienceGaps || null;
                    this.academics = employeeAddFormModel.academics ||  new Academics();
                    this.projects = employeeAddFormModel.projects || [];
                    this.skills = employeeAddFormModel.skills || [];
                    this.tools = employeeAddFormModel.tools ||  [];
                    this.definiteRole = employeeAddFormModel.definiteRole || [];
                    this.possibleRole= employeeAddFormModel.possibleRole || [];
                    this.projectTagging = employeeAddFormModel.projectTagging || new ProjectTagging();
        }
}
