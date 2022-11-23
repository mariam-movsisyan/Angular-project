import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss', '../flex-properties.scss']
})

export class FooterComponent{
    public firstMenu = [
        {
            href: '#',
            name: 'АКЦИИ'
        },
        {
            href: '#',
            name: 'КОЛЛЕКЦИИ'
        },
        {
            href: '#',
            name: 'BRITVOLOGY'
        },
        {
            href: '#',
            name: 'ИДЕИ ПОДАРКОВ'
        },
        {
            href: '#',
            name: 'БРЕНДЫ'
        },
    ]

    public secondMenu = [
        {
            href: '#',
            name: 'О НАС'
        },
        {
            href: '#',
            name: 'Сотрудничество'
        },
        {
            href: '#',
            name: 'Новости'
        },
        {
            href: '#',
            name: 'Отзывы'
        },
        {
            href: '#',
            name: 'Контакты'
        },
        {
            href: '#',
            name: 'Адреса магазинов'
        },
    ]

    public thirdMenu = [
        {
            href: '#',
            name: 'ИНФОРМАЦИЯ'
        },
        {
            href: '#',
            name: 'Программа лояльности'
        },
        {
            href: '#',
            name: 'Условия доставки'
        },
        {
            href: '#',
            name: 'Условия оплаты'
        },
        {
            href: '#',
            name: 'Обмен и возврат'
        },
        {
            href: '#',
            name: 'Где купить'
        },
        {
            href: '#',
            name: 'Политика конфиденциальности'
        },
        {
            href: '#',
            name: 'Публичная оферта'
        }
    ] 
    
    
    public fourthMenu = [
        {
            href: '#',
            name: 'КАТАЛОГ'
        },
        {
            href: '#',
            name: 'Бритвы и аксессуары'
        },
        {
            href: '#',
            name: 'Косметика для бритья'
        },
        {
            href: '#',
            name: 'Уход за бородой и усами'
        },
        {
            href: '#',
            name: 'Уход за лицом и телом'
        }
    ]  

    public fifthMenu = [
        {
            href: '#',
            name: '8 (800) 555-51-24',
            icon: 'fa-solid fa-phone'
        },
        {
            href: '#',
            name: 'info@britvology.ru',
            icon: 'fa-regular fa-envelope'
        },
        {
            href: '#',
            name: '197183, Санкт-Петербург, ул. Дибуновская, дом 50, Помещение 27Н, второй этаж, офис 204',
            icon: 'fa-solid fa-location-dot'

        },
        {
            href: '#',
            name: 'Будние дни: 10.00 - 18.00 По пятницам и в выходные: 10.00 - 17.30',
        }
    ] 
}