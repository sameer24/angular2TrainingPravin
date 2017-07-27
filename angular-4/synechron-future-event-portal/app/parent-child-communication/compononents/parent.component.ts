import { Component } from "@angular/core";

@Component({
    selector: "syn-parent",
    templateUrl: 'app/parent-child-communication/views/parent.component.html'
})

export class ParentComponent {
    constructor() {

    }
    title: string = 'Parent Component';
    messageTextToSend: string='Hi';

    sendMessage():void {
        this.messageTextToSend = 'Mesage to child from parent component';
        console.log('message sent')
    }
}