import { Component, OnInit, Input } from "@angular/core";


@Component({
    selector: 'pmp-home',
    templateUrl: 'app/home/views/home.component.html'
})

export class HomeComponent implements OnInit {
    constructor() {
    }
    title: string = "PMP Home";
   
    ngOnInit() {      
    }

}