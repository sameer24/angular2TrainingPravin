//decorator
import { Component } from "@angular/core";

//Component Decorator
@Component({
    selector: 'syn-app',
    //inline Template
    // template: `
    // <h1> Welcome To synechron-future-event-portal </h1>
    // <h3>Title : {{title}}</h3><h5>subTitle : {{subTitle}}</h5>
    // abc <h2>Second Line</h2>`,
    templateUrl:'./app/app.component.html'
})

//{{title}} Interpolation/Expression

export class AppComponent {
    //model properties
    title: string = "Welcome to Synechron";
    subTitle: string = "Core Development Center of Pune";
}