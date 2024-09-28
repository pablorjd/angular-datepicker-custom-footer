import { Component, ElementRef, ViewChild } from "@angular/core";
import { MatDatepicker } from "@angular/material/datepicker";

/** @title Basic datepicker */
@Component({
  selector: "datepicker-overview-example",
  templateUrl: "datepicker-overview-example.html",
  styleUrls: ["datepicker-overview-example.css"]
})
export class DatepickerOverviewExample {
    @ViewChild('datepickerFooter', {static: false}) datepickerFooter: ElementRef;
    @ViewChild('datepicker', {static: false}) datepicker: MatDatepicker<any>;

    selectedValue : Date | null = null;

    onOpen() {
        this.appendFooter();
    }

    today() {
        this.selectedValue = new Date();
        this.datepicker.close();
        // console.log('today', this.datepicker);
        // this.datepicker.nativeElement.close();
    }

    done() {
        console.log('done');
        this.datepicker.close();
    }

    private appendFooter() {
        const matCalendar = document.getElementsByClassName('mat-datepicker-content')[0] as HTMLElement;
        matCalendar.appendChild(this.datepickerFooter.nativeElement);
    }

}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
