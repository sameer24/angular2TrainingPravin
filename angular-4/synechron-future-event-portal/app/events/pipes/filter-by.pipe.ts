import { Pipe, PipeTransform } from "@angular/core";
import { Events } from "../models/events"

@Pipe({
    name: 'filterBy'
})

export class FilterByPipe implements PipeTransform {
    transform(value: Events[], args: string[]): Events[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((event: any) => 
            event.eventName.toLocaleLowerCase().indexOf(filter) != -1 ): value;
    }
}


//write the filters which will filter the events list 
//1 Start with
//2 End with

//Write a filter for Start Date which will search for given date. use HTML date control
