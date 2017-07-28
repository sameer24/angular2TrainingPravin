import { Pipe, PipeTransform } from "@angular/core";
// import { Company } from "../models/company";

@Pipe({
    name: 'filterContains'
})

export class FilterContains implements PipeTransform {
    transform(value: any[], args: string[]): any[] {
        let filter: string = args ? args.toString().toLocaleLowerCase() : null;
        console.log(args)        
        return filter ? value.filter((obj: any) => obj.name.toLocaleLowerCase().indexOf(filter) != -1) : value;        
    }
} 