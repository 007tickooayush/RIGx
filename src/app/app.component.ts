import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'RIGx';
    
    creation = 'new site'
    currentVal = ''
    getVal(val){
        console.log(val)
        this.currentVal = val
    }
}

