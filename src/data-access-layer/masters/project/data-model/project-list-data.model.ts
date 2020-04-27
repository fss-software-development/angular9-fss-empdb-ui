
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
interface IAccount {
    accountId?: number;
    accountName?: string;
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

interface IProjectListDataModel {
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
export class ProjectListDataModel implements  IProjectListDataModel {
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
        constructor(projectListDataModel: IProjectListDataModel = {
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
            this.projectId = projectListDataModel.projectId || 0;
            this.department = projectListDataModel.department || new Department();
            this.projectName = projectListDataModel.projectName || "";
            this.projectManager = projectListDataModel.projectManager || "";
            this.projectStatus = projectListDataModel.projectStatus || "";
            this.region = projectListDataModel.region || new Region();
            this.account = projectListDataModel.account || new Account();
            this.projectTagging = projectListDataModel.projectTagging || new ProjectTagging();
            this.projectStartDate = projectListDataModel.projectStartDate || "";
            this.projectEndDate = projectListDataModel.projectEndDate || "";
        }
}