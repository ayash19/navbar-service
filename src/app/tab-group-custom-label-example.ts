import { Component } from '@angular/core';
import { NavService } from './nav.service';

/**
 * @title Using tabs with a custom label template
 */
@Component({
  selector: 'tab-group-custom-label-example',
  templateUrl: 'tab-group-custom-label-example.html',
  styleUrls: ['tab-group-custom-label-example.css'],
})
export class TabGroupCustomLabelExample {
  
  tab2Valid = false;

  constructor(private navService: NavService) {
    this.navService.getFormState().subscribe((value) => {
      this.tab2Valid = value;
    });
  }

}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
