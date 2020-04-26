import { Observable } from 'rxjs';
import {ProjectListDataModel} from './data-model'
export abstract class ProjectDataInterface {
  abstract getProjectListOnSearch(formData: FormData): Observable<ProjectListDataModel[]>;
  abstract getProjectList(formData: FormData): Observable<ProjectListDataModel[]>;
  abstract getProjectById(id): Observable<any>;
}
