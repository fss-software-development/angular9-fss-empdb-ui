export interface IRegionFormModel {
    regionId?: string,
    regionName?: string
}
export class RegionFormModel implements IRegionFormModel {
    regionId: string;
    regionName: string;
    constructor(regionFormModel: IRegionFormModel = {
        regionId: "",
        regionName: ""
    }) {
        this.regionId = regionFormModel.regionId;
        this.regionName = regionFormModel.regionName;
    }
}

export interface IDepartmentFormModel {
    departmentId: number,
    departmentName: string,
    departmentHead: string
}
export class DepartmentFormModel implements IDepartmentFormModel {
    departmentId: number;
    departmentName: string;
    departmentHead: string;
    constructor(departmentFormModel: IDepartmentFormModel = {
        departmentId: 0,
        departmentName: "",
        departmentHead: ""
    }) {
        this.departmentId = departmentFormModel.departmentId;
        this.departmentName = departmentFormModel.departmentName;
        this.departmentHead = departmentFormModel.departmentHead;
    }
}

export interface ILocationFormModel {
    locationId: number,
    locationName: string
}
export class LocationFormModel implements ILocationFormModel {
    locationId: number;
    locationName: string;
    constructor(locationFormModel: ILocationFormModel = {
        locationId: 0,
        locationName: ""
    }) {
        this.locationId = locationFormModel.locationId;
        this.locationName = locationFormModel.locationName;
    }
}

export interface IGradeFormModel {
    gradeId: number,
    gradeName: string
}
export class GradeFormModel implements IGradeFormModel {
    gradeId: number;
    gradeName: string;
    constructor(gradeFormModel: IGradeFormModel = {
        gradeId: 0,
        gradeName: ""
    }) {
        this.gradeId = gradeFormModel.gradeId;
        this.gradeName = gradeFormModel.gradeName;
    }
}

export interface IDesignationFormModel {
    designationId: number,
    designationName: string
}
export class DesignationFormModel implements IDesignationFormModel {
    designationId: number;
    designationName: string;
    constructor(designationFormModel: IDesignationFormModel = {
        designationId: 0,
        designationName: ""
    }) {
        this.designationId = designationFormModel.designationId;
        this.designationName = designationFormModel.designationName;
    }
}

export interface IBillableStatusFormModel {
    billableStatusId: number,
    billableStatus: string
}

export class BillableStatusFormModel implements IBillableStatusFormModel {
    billableStatusId: number;
    billableStatus: string;
    constructor(billableStatusFormModel: IBillableStatusFormModel = {
        billableStatusId: 0,
        billableStatus: ""
    }) {
        this.billableStatusId = billableStatusFormModel.billableStatusId;
        this.billableStatus = billableStatusFormModel.billableStatus;
    }
}

export interface IServiceLineFormModel {
    serviceLineId: number,
    serviceLineName: string
}
export class ServiceLineFormModel implements IServiceLineFormModel {
    serviceLineId: number;
    serviceLineName: string;
    constructor(serviceLineFormModel: IServiceLineFormModel = {
        serviceLineId: 0,
        serviceLineName: ""
    }) {
        this.serviceLineId = serviceLineFormModel.serviceLineId;
        this.serviceLineName = serviceLineFormModel.serviceLineName;
    }
}

export interface IAcademicsFormModel {
    academicsId: number,
    academicsName: string
}
export class AcademicsFormModel implements IAcademicsFormModel {
    academicsId: number;
    academicsName: string;
    constructor(academicsFormModel: IAcademicsFormModel = {
        academicsId: 0,
        academicsName: ""
    }) {
        this.academicsId = academicsFormModel.academicsId;
        this.academicsName = academicsFormModel.academicsName;
    }
}
interface IAccountFormModel {
    accountId? : number;
    accountName?: string;
    region: RegionFormModel;
}
export class AccountFormModel implements  IAccountFormModel {
    accountId? : number;
    accountName: string;
    region: RegionFormModel;
        constructor(accountFormModel: IAccountFormModel = {
            accountId: 0,
            accountName: "",
                region: new RegionFormModel(),
                }) {
            this.accountId = accountFormModel.accountId || 0;
            this.accountName = accountFormModel.accountName || "";
            this.region = accountFormModel.region || new RegionFormModel();
        }
}
export interface IProjectFormModel {
    projectId: number,
    projectName: string,
    projectStartDate: string,
    projectEndDate: string,
    region: RegionFormModel,
    account: AccountFormModel
}
export class ProjectFormModel implements IProjectFormModel {
    projectId: number;
    projectName: string;
    projectStartDate: string;
    projectEndDate: string;
    region: RegionFormModel;
    account: AccountFormModel;
    constructor(projectFormModel: IProjectFormModel = {
        projectId: 0,
        projectName: "",
        projectStartDate: "",
        projectEndDate: "",
        region: new RegionFormModel(),
        account: new AccountFormModel()
    }) {
        this.projectId = projectFormModel.projectId || 0;
        this.projectName = projectFormModel.projectName || "";
        this.projectStartDate = projectFormModel.projectStartDate || "";
        this.projectEndDate = projectFormModel.projectEndDate || "";
        this.region = projectFormModel.region || new RegionFormModel();
        this.account = projectFormModel.account || new AccountFormModel();
    }
}

export interface IProjectTaggingFormModel {
    projectTaggingId: number,
    projectTaggingName: string
}
export class ProjectTaggingFormModel implements IProjectTaggingFormModel {
    projectTaggingId: number;
    projectTaggingName: string;
    constructor(projectTaggingFormModel: IProjectTaggingFormModel = {
        projectTaggingId: 0,
        projectTaggingName: ""
    }) {
        this.projectTaggingId = projectTaggingFormModel.projectTaggingId;
        this.projectTaggingName = projectTaggingFormModel.projectTaggingName;
    }
}

export interface IRoleFormModel {
    roleId: number,
    roleName: string
}
export class RoleFormModel implements IRoleFormModel {
    roleId: number;
    roleName: string;
    constructor(roleFormModel: IRoleFormModel = {
        roleId: 0,
        roleName: ""
    }) {
        this.roleId = roleFormModel.roleId;
        this.roleName = roleFormModel.roleName;
    }
}

export interface IPrimarySkillFormModel {
    skillId: number,
    skillName: string
}
export class PrimarySkillFormModel implements IPrimarySkillFormModel {
    skillId: number;
    skillName: string;
    constructor(primarySkillFormModel: IPrimarySkillFormModel = {
        skillId: 0,
        skillName: ""
    }) {
        this.skillId = primarySkillFormModel.skillId;
        this.skillName = primarySkillFormModel.skillName;
    }
}

export interface IToolsFormModel {
    toolId: string;
    toolName: string;
}
export class ToolsFormModel implements IToolsFormModel {
    toolId: string;
    toolName: string;
    constructor(toolsFormModel: IToolsFormModel = {
        toolId: "",
        toolName: ""
    }){
        this.toolId = toolsFormModel.toolId || "";
        this.toolName = toolsFormModel.toolName || "";
    }
}

export interface IDefiniteRoleFormModel {
    roleId: string;
    roleName: string;
}
export class DefiniteRoleFormModel implements IDefiniteRoleFormModel {
    roleId: string;
    roleName: string;
    constructor(definiteRoleFormModel:IDefiniteRoleFormModel = {
        roleId: "",
        roleName:""
    }){
        this.roleId = definiteRoleFormModel.roleId || "";
        this.roleName = definiteRoleFormModel.roleName || "";
    }
}

export interface IPossibleRoleFormModel {
    roleId: string;
    roleName: string;
}
export class PossibleRoleFormModel implements IPossibleRoleFormModel {
    roleId: string;
    roleName: string;
    constructor(possibleRoleFormModel:IPossibleRoleFormModel = {
        roleId: "",
        roleName:""
    }){
        this.roleId = possibleRoleFormModel.roleId || "";
        this.roleName = possibleRoleFormModel.roleName || "";
    }
}