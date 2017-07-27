import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'firstLetterCapital'
})
export class FirstLetterCapitalPipe implements PipeTransform {
    transform(value: string, args: string[]): string {
        if (!value) { return value; }

        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
    }
}