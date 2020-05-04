import {
  Component,
  Input
} from '@angular/core';
import {FieldErrorHandler} from '../error-handling-decorator';
import {SLIDE_IN} from '../../utils/animation/animation-constant';
import {MultiKeyTranslatePipeMeta} from '../../utils/multikeytranslate.pipe';
import {
  AutowireViewModel,
  getOnScreenMessage
} from '../form-creators';

/**
 * The OnScreenMessage Component
 */
@Component({
  selector: 'app-on-screen-message',
  templateUrl: './on-screen-message.component.html',
  styleUrls: ['./on-screen-message.component.css'],
  animations: [SLIDE_IN]
})
export class OnScreenMessageComponent {
  /**
   * Form name as input to the component
   */
  @Input() appFormName: string;
  /**
   * Field name as input to the component
   */
  @Input() appFieldName: string;
  /**
   * Custom object as input for MultiKeyTranslatePipe
   */
  @Input() appMultiKeyTranslate: MultiKeyTranslatePipeMeta;
  
  @Input() multikeytranslate: String;
  
  @Input() isMatElement: boolean = false;

  constructor() {
  }

  /**
   * Method with a custom decorator for handling field error
   * @param {string} formName
   * @param {string} keyName
   */
  @FieldErrorHandler()
  private getError(...args) {
    if (args.length > 2) {
      const errorMsgs = getOnScreenMessage(args[0], args[1]);
      let message = '';
      for (const ctrlError in args[2]) {
        message = errorMsgs[ctrlError] + ',';
      }
      return message.substr(0, message.lastIndexOf(','))
        .trim();
    } else {
      return null;
    }
  }

  /**
   * Return error message for the field name
   * @return {any}
   */
  displayError(): any {
    return this.getError(this.appFormName, this.appFieldName);
  }
}
