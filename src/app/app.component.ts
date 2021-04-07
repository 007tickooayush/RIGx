import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'RIGx';
    
    name = ''
    show=false
    showStr='yes'
    showClr='red'
    // disabledBox = true

    // enableBox(){
    //     this.disabledBox = false
    // }
}

