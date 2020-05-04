import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {EDIT_STATUS} from './edit-status.constant';
import {ModalState} from './modal-state';

/**
 * The FormHelper Service
 *
 * This is a helper class for form actions
 */
@Injectable()
export class FormHelperService {
  hideLoadingSpinner = new BehaviorSubject(false);
  isInEditMode = new BehaviorSubject(false);
  isMenuEnabled = new BehaviorSubject<boolean>(false);
  isLoggedIn = new BehaviorSubject<boolean>(false);
  /**
   * Contains the status information of the modal popup
   */
  modalState = new BehaviorSubject<string>(ModalState.INACTIVE);
  /**
   * Contains the alert slide animation information
   */
  alertAnimation = new BehaviorSubject(null);

  constructor(private router: Router) {
  }
  
  /**
   * Method to set the edit status of the form
   * @param {EDIT_STATUS} editStatus
   */
  setEditStatus(editStatus: EDIT_STATUS) {
    if (editStatus === EDIT_STATUS.EDITABLE) {
      this.isInEditMode.next(true);
    } else if (editStatus === EDIT_STATUS.NON_EDITABLE) {
      this.isInEditMode.next(false);
    }
  }

  /**
   * Method enables navigation from one view to next as user perform application tasks
   * @param {string} navigateTo
   */
  navigateTo(navigateTo: string) {
    this.router.navigate([navigateTo]);
  }
  
  /**
   * close the error in icu-modal
   */
  public closeAlert() {
    this.alertAnimation.next({
      msg: '',
      state: 'slideUp'
    });
  }
}
