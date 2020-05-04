import { Observable } from 'rxjs';
import {
    AcademicsDataModel,
    BillableStatusDataModel,
    DepartmentDataModel,
    DesignationDataModel,
    GradeDataModel,
    LocationDataModel,
    ProjectTaggingDataModel,
    RegionDataModel,
    ServiceLineDataModel,
    PrimarySkillDataModel,
    ToolsDataModel
} from './data-model';
export  abstract class CommonDataInterface {
    abstract getAcademicsList(): Observable<AcademicsDataModel[]>;
    abstract getBillableStatusList(): Observable<BillableStatusDataModel[]>;
    abstract getDepartmentList(): Observable<DepartmentDataModel[]>;
    abstract getDesignationList(): Observable<DesignationDataModel[]>;
    abstract getGradeList(): Observable<GradeDataModel[]>;
    abstract getLocationList(): Observable<LocationDataModel[]>;
    abstract getProjectTaggingList(): Observable<ProjectTaggingDataModel[]>;
    abstract getRegionList(): Observable<RegionDataModel[]>;
    abstract getServiceLineList(): Observable<ServiceLineDataModel[]>;
    abstract getSkillsList(): Observable<PrimarySkillDataModel[]>;
    abstract getToolsList(): Observable<ToolsDataModel[]>;
}
