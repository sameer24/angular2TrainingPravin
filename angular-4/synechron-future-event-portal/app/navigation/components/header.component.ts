import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'events-header',
    templateUrl: 'app/navigation/views/header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor() { }
    brand:string = "Synechron"
    ngOnInit() { }
}