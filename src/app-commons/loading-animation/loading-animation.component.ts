import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormHelperService} from '../../framework';
@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.css']
})
export class LoadingAnimationComponent implements OnInit {

  constructor(
      private spinner: NgxSpinnerService,
      private formHelper: FormHelperService
    ) { }

  ngOnInit(): void {
    this.formHelper.hideLoadingSpinner.subscribe((data) => {
      if (data) {
        this.spinner.hide();
      }else {
        this.spinner.show();
      }
    })
  }

}
