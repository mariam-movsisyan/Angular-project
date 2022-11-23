import { Component } from "@angular/core";

@Component({
    selector: 'app-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.scss', '../flex-properties.scss']
})

export class CollectionComponent{
    public items = [
        {
            src: "url('../../../assets/images/collections/image1.png')",
            text: 'Серия по уходу за бородой MUEHLE BEARD CARE'
        },
        {
            src: 'url(../../../assets/images/collections/image2.png)',
            text: 'MUEHLE Organic'
        },
        {
            src: 'url(../../../assets/images/collections/image3.png)',
            text: 'Коллекция Arlington'
        },
        {
            src: 'url(../../../assets/images/collections/image4.png)',
            text: 'Коллекция Windsor'
        }
    ]
}