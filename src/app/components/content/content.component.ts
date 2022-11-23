import { Component,Input } from "@angular/core";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss', '../flex-properties.scss']
})
export class ContentComponent{

  @Input()
   public arr!: any;

}