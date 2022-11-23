import { Component, Input } from "@angular/core";

@Component ({
    selector: 'app-giftIdea',
    templateUrl: './giftIdea.component.html',
    styleUrls: ['./giftIdea.component.scss', '../flex-properties.scss']
})

export class GiftIdeaComponent{
    @Input()
    public items!: any;

}