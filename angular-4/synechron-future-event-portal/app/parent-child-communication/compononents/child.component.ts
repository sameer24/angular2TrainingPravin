import { Component,Input } from "@angular/core";

@Component({
    selector: "syn-child",
    templateUrl: 'app/parent-child-communication/views/child.component.html'
})

export class ChildComponent {
    constructor() {

    }
    title: string = 'Child Component';
    @Input() receivedMessage: string;

    // receiveMessage(str:string):void {
    //     this.receivedMessage = str;
    //     console.log('message received'+ this.receivedMessage )
    // }
}