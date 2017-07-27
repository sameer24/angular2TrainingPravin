import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'events-home',
    templateUrl: 'app/home/views/home.component.html'
})

export class HomeComponent implements OnInit {
    constructor() { }
    title: string = "Synechron Future Events Home"
    ngOnInit() { }
}