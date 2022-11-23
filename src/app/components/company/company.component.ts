import { Component } from "@angular/core";

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss', '../flex-properties.scss']
})

export class CompanyComponent{
    public names = [
        {name: 'MUEHLE', country: '(Германия)'},
        {name: 'Bolin Webb', country: '(Великобритания)'},
        {name: 'D. R. Harris', country: ' (Великобритания)'},
        {name: 'Rockwell Razors', country: '(Канада)'},
        {name: 'Henson Shaving', country: '(Канада)'},
    ]
}