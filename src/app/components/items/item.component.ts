import { Component } from "@angular/core";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss', '../flex-properties.scss']
})

export class ItemComponent{
    public items = [
        {
            src: "../../../assets/images/items/image2.png",
            text: 'Т-ОБРАЗНАЯ БРИТВА',
            title: 'Какая бритва подходит для зоны бикини',
            data: '10 июля 2022'
        },
        {
            src: "../../../assets/images/items/image3.png",
            text: 'ОБЩИЕ ВОПРОСЫ БРИТЬЯ',
            title: 'Чаша для бритья, виды и как выбрать',
            data: '10 июля 2022'
        },
        {
            src: "../../../assets/images/items/image4.png",
            text: 'БОРОДА И УСЫ',
            title: 'Как отрастить бороду — 6 шагов к успеху!',
            data: '30 июня 2022'
        }
    ]
}