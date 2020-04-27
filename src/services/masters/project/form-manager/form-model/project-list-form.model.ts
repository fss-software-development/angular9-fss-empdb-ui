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
        this.regionId = region.regionId || 0;
        this.regionName = region.regionName || "";
    }
}

interface IAccount {
    accountId: number;
    accountName: string;
    region:  Region;
}
class Account implements  IAccount {
    accountId: number;
    accountName: string;
    region:  Region;
        constructor(account: IAccount = {
            accountId: 0,
            accountName: "",
            region:  new Region()
                }) {
            this.accountId = account.accountId || 0;
            this.accountName = account.accountName || '';
            this.region = account.region || new Region();
        }
}


interface IDepartment {
    departmentId: number;
    departmentName: string;
    departmentHead: string;
    insUser:  number;
}
class Department implements  IDepartment {
    departmentId: number;
    departmentName: string;
    departmentHead: string;
    insUser:  number;
        constructor(department: IDepartment = {
            departmentId: 0,
            departmentName: "",
            departmentHead:  "",
            insUser: 0
                }) {
            this.departmentId = department.departmentId || 0;
            this.departmentName = department.departmentName || '';
            this.departmentHead = department.departmentHead || "";
            this.insUser = department.insUser || 0;
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
        this.projectTaggingId = projectTagging.projectTaggingId || 0;
        this.projectTaggingName = projectTagging.projectTaggingName || "";
    }
}


interface IProjectListFormModel {
    projectId: number;
    department: Department;
    projectName: string;
    projectManager: string;
    projectStatus: string;
    region: Region;
    account: Account;
    projectTagging: ProjectTagging;
    projectStartDate : string;
    projectEndDate: string;
}
export class ProjectListFormModel implements  IProjectListFormModel {
    projectId: number;
    department: Department;
    projectName: string;
    projectManager: string;
    projectStatus: string;
    region: Region;
    account: Account;
    projectTagging: ProjectTagging;
    projectStartDate : string;
    projectEndDate: string;
        constructor(projectListFormModel: IProjectListFormModel = {
            projectId: 0,
            department: new Department(),
            projectName: "",
            projectManager: "",
            projectStatus: "",
            region: new Region(),
            account: new Account(),
            projectTagging: new ProjectTagging(),
            projectStartDate: "",
            projectEndDate: "",
            
                }) {
            this.projectId = projectListFormModel.projectId || 0;
            this.department = projectListFormModel.department || new Department();
            this.projectName = projectListFormModel.projectName || "";
            this.projectManager = projectListFormModel.projectManager || "";
            this.projectStatus = projectListFormModel.projectStatus || "";
            this.region = projectListFormModel.region || new Region();
            this.account = projectListFormModel.account || new Account();
            this.projectTagging = projectListFormModel.projectTagging || new ProjectTagging();
            this.projectStartDate = projectListFormModel.projectStartDate || "";
            this.projectEndDate = projectListFormModel.projectEndDate || "";
        }
}