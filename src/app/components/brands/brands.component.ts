import { Component } from "@angular/core";

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.scss', '../flex-properties.scss']
})

export class BrandsComponent{
    public brands = [
        {
            src: '../../../assets/images/brands/icon1.png',
            href: '#'
        },
        {
            src: '../../../assets/images/brands/icon2 (1).png',
            href: '#'
        },
        {
            src: '../../../assets/images/brands/icon3.png',
            href: '#'
        },
        {
            src: '../../../assets/images/brands/icon4.png',
            href: '#'
        },
        {
            src: '../../../assets/images/brands/icon5.png',
            href: '#'
        },
        {
            src: '../../../assets/images/brands/icon6.png',
            href: '#'
        }
    ]
}