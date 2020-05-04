import { Observable } from 'rxjs';
import {ProjectListDataModel,
   ProjectAddDataModel,
   ProjectEditDataModel} from './data-model'
export abstract class ProjectDataInterface {
  abstract getProjectListOnSearch(formData: FormData): Observable<ProjectListDataModel[]>;
  abstract getProjectList(): Observable<ProjectListDataModel[]>;
  abstract getProjectById(id: any): Observable<ProjectEditDataModel>;
  abstract addProject(formData: FormData): Observable<ProjectAddDataModel>;
  abstract updateProject(formData: FormData): Observable<ProjectEditDataModel>;
  abstract deleteProject(id: string): Observable<any>;
}
