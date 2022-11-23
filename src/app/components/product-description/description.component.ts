import { Component } from "@angular/core";

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss','../flex-properties.scss']
})

export class DescriptionComponent{

    
    public items = [
        {topText: 'СТИЛЬ И КЛАССИКА',title: 'Т-образные бритвы', text: "По-настоящему чистое и комфортное бритье", src: 'url(../../../assets/images/product-description/image1.png)'},
        {topText: 'МЯГКОСТЬ И ЭЛЕГАНТНОСТЬ',title: 'Помазки для бритья', text: "Превратят бритьё в лёгкий и приятный процесс", src: 'url(../../../assets/images/product-description/image2.png)'},
        {topText: 'УВЛАЖНЕНИЕ И АРОМАТ',title: 'Косметика для бритья', text: "Высококачественная косметика от брендов, заслуживших всеобщее признание", src: 'url(../../../assets/images/product-description/image3.png)'},
        {topText: 'КРАСОТА И ИЗЫСКАННОСТ',title: 'Бритвенные наборы', text: "Наборы с помазком и бритвой, бритвы в комплекте с подставками, с чашей, дорожные наборы и многое другое", src: 'url(../../../assets/images/product-description/image4.png)'}
    ]
    
}