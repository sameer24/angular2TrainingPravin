import { Component } from "@angular/core";

//{{}} => known as Interpolation in Angular 4 and expression on 1.x


@Component({
    selector:'syn-app',
    //Inline Template
    //template:`<h2>{{title}}</h2><hr>{{subTitle}}`    

    //External Template
    templateUrl:'app/app.component.html'
})

export class AppComponent{
    title:string="Welcome to Synechron Banglore!!!";
    subTitle:string="Core Developemnt Center of Pune";    
}