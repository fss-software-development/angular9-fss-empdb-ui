export interface IRegionDataModel {
    regionId?: string,
    regionName?: string
}
export class RegionDataModel implements IRegionDataModel {
    regionId: string;
    regionName: string;
    constructor(regionDataModel: IRegionDataModel = {
        regionId: "",
        regionName: ""
    }) {
        this.regionId = regionDataModel.regionId;
        this.regionName = regionDataModel.regionName;
    }
}

export interface IDepartmentDataModel {
    departmentId: number,
    departmentName: string,
    departmentHead: string
}
export class DepartmentDataModel implements IDepartmentDataModel {
    departmentId: number;
    departmentName: string;
    departmentHead: string;
    constructor(departmentDataModel: IDepartmentDataModel = {
        departmentId: 0,
        departmentName: "",
        departmentHead: ""
    }) {
        this.departmentId = departmentDataModel.departmentId;
        this.departmentName = departmentDataModel.departmentName;
        this.departmentHead = departmentDataModel.departmentHead;
    }
}

export interface ILocationDataModel {
    locationId: number,
    locationName: string
}
export class LocationDataModel implements ILocationDataModel {
    locationId: number;
    locationName: string;
    constructor(locationDataModel: ILocationDataModel = {
        locationId: 0,
        locationName: ""
    }) {
        this.locationId = locationDataModel.locationId;
        this.locationName = locationDataModel.locationName;
    }
}

export interface IGradeDataModel {
    gradeId: number,
    gradeName: string
}
export class GradeDataModel implements IGradeDataModel {
    gradeId: number;
    gradeName: string;
    constructor(gradeDataModel: IGradeDataModel = {
        gradeId: 0,
        gradeName: ""
    }) {
        this.gradeId = gradeDataModel.gradeId;
        this.gradeName = gradeDataModel.gradeName;
    }
}

export interface IDesignationDataModel {
    designationId: number,
    designationName: string
}
export class DesignationDataModel implements IDesignationDataModel {
    designationId: number;
    designationName: string;
    constructor(designationDataModel: IDesignationDataModel = {
        designationId: 0,
        designationName: ""
    }) {
        this.designationId = designationDataModel.designationId;
        this.designationName = designationDataModel.designationName;
    }
}

export interface IBillableStatusDataModel {
    billableStatusId: number,
    billableStatus: string
}

export class BillableStatusDataModel implements IBillableStatusDataModel {
    billableStatusId: number;
    billableStatus: string;
    constructor(billableStatusDataModel: IBillableStatusDataModel = {
        billableStatusId: 0,
        billableStatus: ""
    }) {
        this.billableStatusId = billableStatusDataModel.billableStatusId;
        this.billableStatus = billableStatusDataModel.billableStatus;
    }
}

export interface IServiceLineDataModel {
    serviceLineId: number,
    serviceLineName: string
}
export class ServiceLineDataModel implements IServiceLineDataModel {
    serviceLineId: number;
    serviceLineName: string;
    constructor(serviceLineDataModel: IServiceLineDataModel = {
        serviceLineId: 0,
        serviceLineName: ""
    }) {
        this.serviceLineId = serviceLineDataModel.serviceLineId;
        this.serviceLineName = serviceLineDataModel.serviceLineName;
    }
}

export interface IAcademicsDataModel {
    academicsId: number,
    academicsName: string
}
export class AcademicsDataModel implements IAcademicsDataModel {
    academicsId: number;
    academicsName: string;
    constructor(academicsDataModel: IAcademicsDataModel = {
        academicsId: 0,
        academicsName: ""
    }) {
        this.academicsId = academicsDataModel.academicsId;
        this.academicsName = academicsDataModel.academicsName;
    }
}
interface IAccountDataModel {
    accountId? : number;
    accountName?: string;
    region: RegionDataModel;
}
export class AccountDataModel implements  IAccountDataModel {
    accountId? : number;
    accountName: string;
    region: RegionDataModel;
        constructor(accountDataModel: IAccountDataModel = {
            accountId: 0,
            accountName: "",
                region: new RegionDataModel(),
                }) {
            this.accountId = accountDataModel.accountId || 0;
            this.accountName = accountDataModel.accountName || "";
            this.region = accountDataModel.region || new RegionDataModel();
        }
}
export interface IProjectDataModel {
    projectId: number;
    projectName: string;
    projectStartDate: string;
    projectEndDate: string;
    region: RegionDataModel;
    account: AccountDataModel;
}
export class ProjectDataModel implements IProjectDataModel {
    projectId: number;
    projectName: string;
    projectStartDate: string;
    projectEndDate: string;
    region: RegionDataModel;
    account: AccountDataModel;
    constructor(projectDataModel: IProjectDataModel = {
        projectId: 0,
        projectName: "",
        projectStartDate: "",
        projectEndDate: "",
        region: new RegionDataModel(),
        account: new AccountDataModel()
    }) {
        this.projectId = projectDataModel.projectId;
        this.projectName = projectDataModel.projectName;
        this.projectStartDate = projectDataModel.projectStartDate || "";
        this.projectEndDate = projectDataModel.projectEndDate || "";
        this.region = projectDataModel.region || new RegionDataModel();
        this.account = projectDataModel.account || new AccountDataModel();
    }
}

export interface IProjectTaggingDataModel {
    projectTaggingId: number,
    projectTaggingName: string
}
export class ProjectTaggingDataModel implements IProjectTaggingDataModel {
    projectTaggingId: number;
    projectTaggingName: string;
    constructor(projectTaggingDataModel: IProjectTaggingDataModel = {
        projectTaggingId: 0,
        projectTaggingName: ""
    }) {
        this.projectTaggingId = projectTaggingDataModel.projectTaggingId;
        this.projectTaggingName = projectTaggingDataModel.projectTaggingName;
    }
}

export interface IRoleDataModel {
    roleId: number,
    roleName: string
}
export class RoleDataModel implements IRoleDataModel {
    roleId: number;
    roleName: string;
    constructor(roleDataModel: IRoleDataModel = {
        roleId: 0,
        roleName: ""
    }) {
        this.roleId = roleDataModel.roleId;
        this.roleName = roleDataModel.roleName;
    }
}

export interface IPrimarySkillDataModel {
    skillId: number,
    skillName: string
}
export class PrimarySkillDataModel implements IPrimarySkillDataModel {
    skillId: number;
    skillName: string;
    constructor(primarySkillDataModel: IPrimarySkillDataModel = {
        skillId: 0,
        skillName: ""
    }) {
        this.skillId = primarySkillDataModel.skillId;
        this.skillName = primarySkillDataModel.skillName;
    }
}

export interface IToolsDataModel {
    toolId: string;
    toolName: string;
}
export class ToolsDataModel implements IToolsDataModel {
    toolId: string;
    toolName: string;
    constructor(toolsDataModel: IToolsDataModel = {
        toolId: "",
        toolName: ""
    }){
        this.toolId = toolsDataModel.toolId || "";
        this.toolName = toolsDataModel.toolName || "";
    }
}

export interface IDefiniteRoleDataModel {
    roleId: string;
    roleName: string;
}
export class DefiniteRoleDataModel implements IDefiniteRoleDataModel {
    roleId: string;
    roleName: string;
    constructor(definiteRoleDataModel:IDefiniteRoleDataModel = {
        roleId: "",
        roleName:""
    }){
        this.roleId = definiteRoleDataModel.roleId || "";
        this.roleName = definiteRoleDataModel.roleName || "";
    }
}

export interface IPossibleRoleDataModel {
    roleId: string;
    roleName: string;
}
export class PossibleRoleDataModel implements IPossibleRoleDataModel {
    roleId: string;
    roleName: string;
    constructor(possibleRoleDataModel:IPossibleRoleDataModel = {
        roleId: "",
        roleName:""
    }){
        this.roleId = possibleRoleDataModel.roleId || "";
        this.roleName = possibleRoleDataModel.roleName || "";
    }
}