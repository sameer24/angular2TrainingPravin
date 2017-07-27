import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Events } from "../models/events";

@Pipe({
    name: 'dateStartsWith'
})

export class DateStartsWith implements PipeTransform {
    constructor(private datePipe: DatePipe) { }
    transform(value: Events[], args: string[]): Events[] {
        console.log(args);
        let filter: string = args ? args.toString().toLowerCase() : null;
        return filter ? value.filter((event: any) =>
            this.datePipe.transform(event.startDate, 'yyyy-MM-dd') == this.datePipe.transform(filter, 'yyyy-MM-dd')) : value;
    }
}