import { Observable } from 'rxjs';
import {
 LoginDataModel
} from './data-model'
export abstract class LoginDataInterface {
  abstract login(formData: FormData): Observable<any>;
}
