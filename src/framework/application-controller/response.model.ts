import { EDIT_STATUS } from './edit-status.constant';

/**
 * The Response Model
 *
 * The model class for handling response
 */
export class ResponseModel {
  showNotification: boolean;
  navigateTo: string;
  editStatus: EDIT_STATUS;

  constructor(showNotification: boolean,
    navigateTo: string,
    editStatus: EDIT_STATUS) {
    this.showNotification = showNotification || false;
    this.navigateTo = navigateTo || '';
    this.editStatus = editStatus || EDIT_STATUS.NONE;
  }
}

