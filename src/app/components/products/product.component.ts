import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss','../flex-properties.scss']
})

export class ProductComponent{
    public products: any[] = [
        {subtitle: 'ИЗЫСКАННАЯ ЦВЕТОВАЯ ПАЛИТРА',title: 'Наборы Bolin Webb', src: '../../../assets/images/products/image1.png'},
        {subtitle: 'НАСТОЯЩАЯ КЛАССИКА',title: 'MUEHLE TRADITIONAL', src: '../../../assets/images/products/image2.png'},
        {subtitle: 'ВЫСШЕЕ КАЧЕСТВО',title: 'Премиум класс', src: '../../../assets/images/products/image3.png'},
        {subtitle: 'НОВЫЕ ОЩУЩЕНИЯ',title: 'Бритвы Henson Shaving', src: '../../../assets/images/products/image4.png'},
        {subtitle: 'ТРАДИЦИИ В АНГЛИЙСКОМ СТИЛЕ',title: 'Косметика D. R. Harris', src: '../../../assets/images/products/image5.png'},
        {subtitle: 'СТИЛЬНЫЕ И СОВРЕМЕННЫЕ',title: 'Бритвы Rockwell', src: '../../../assets/images/products/image6.png'}
    ]
}