import { Component } from "@angular/core";

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.scss', '../flex-properties.scss']
})

export class OffersComponent{

    public items =[
        {sale: 'до 30%', src: './../../assets/images/profitable_offers/image1.png', date: 'До 30.11.2022', title: 'Черная Пятница 2022'},
        {sale: 'Лезвия в подарок', src: './../../assets/images/profitable_offers/image2.png', date: 'Бессрочная акция', title: 'Набор лезвий в подарок'},
        {sale: '-10%', src: './../../assets/images/profitable_offers/image3.png', date: ' До последнего товара', title: 'SALE — Товары со скидкой'},
    ]
}