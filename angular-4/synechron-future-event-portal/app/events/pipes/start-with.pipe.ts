import { Pipe, PipeTransform } from "@angular/core";

import { Events } from "../models/events";

@Pipe({
    name: 'startsWith'
})

export class StartsWith implements PipeTransform {
    transform(value: Events[], args: string[]): Events[] {
   let filter: string = args ? args.toString().toLowerCase() : null;  
        return filter ? value.filter((event: any) =>
            event.eventName.toLocaleLowerCase().startsWith(filter) == true) : value;
    }
}