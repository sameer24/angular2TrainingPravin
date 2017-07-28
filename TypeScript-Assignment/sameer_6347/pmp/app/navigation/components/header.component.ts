import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'pmp-header',
    templateUrl: 'app/navigation/views/header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor() {
    }
    title: string = "Project Management Portal"; 
    brandName: string = "Synechron Pvt Ltd";   
    ngOnInit() {      
    }

}