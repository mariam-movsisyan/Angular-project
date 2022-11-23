import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sliderImages: any = [
    {
      src: "../../../assets/images/content/image1.png",
      title: 'Т-образная бритва MUEHLE TRADITIONAL, черный хром, сlosed comb',
      count: 'Много',
      article: 'Арт.: R 89 BLACK',
      price: '5 340 ₽',
    },
    {
      src: "../../../assets/images/content/image5.png",
      title: 'Твердое мыло для бритья MUEHLE в деревянной чаше, Алоэ Вера, 65 гр',
      count: 'Мало',
      article: 'Арт.: RN 3 AV',
      price: '3 920 ₽'
    },
    {
      src: "../../../assets/images/content/image7.png",
      title: 'Т-образная бритва MUEHLE TRADITIONAL, черный хром, open comb',
      count: 'Много',
      article: 'Арт.: R 41 BLACK',
      price: '5 340 ₽',
    },
    {
      src: "../../../assets/images/content/image8.png",
      title: 'Бритва MUEHLE SOPHIST, Fusion, железное дерево',
      count: 'Мало',
      article: 'Арт.: R 47 F',
      price: '19 980 ₽',
    },
    {
      src: "../../../assets/images/content/image10.png",
      title: 'Масло для бороды MUEHLE BEARD CARE, 30 мл',
      count: 'Достаточно',
      article: 'Арт.: BP BO',
      price: '1 960 ₽'
    },
    {
      src: "../../../assets/images/content/image11.png",
      title: 'Бритвенный набор MUEHLE SOPHIST, железное дерево, барсучий ворс высшей категории Silvertip, бритва Fusion, чаша',
      count: 'Мало',
      article: 'Арт.: S 93 H 47 SF',
      price: '50 950 ₽'
    },
    {
      src: "../../../assets/images/content/image13.png",
      title: 'Бритвенный набор MUEHLE SOPHIST, железное дерево, барсучий ворс высшей категории Silvertip, Т-образная бритва, чаша',
      count: 'Мало',
      article: 'Арт.: S 93 H 47 SSR',
      price: '47 960 ₽'
    }
  ];


  public gifts: any = [
    {
      src: '../../../assets/images/gift_Ideas/image1.png',
      title: 'Подарочные бритвенные наборы'
    },
    {
      src: '../../../assets/images/gift_Ideas/image2.png',
      title: 'Мужская косметика в подарок'
    }, 
    {
      src: '../../../assets/images/gift_Ideas/image3.png',
      title: 'Подарки для путешественников'
    },
    {
      src: '../../../assets/images/gift_Ideas/image4.png',
      title: 'Подарки для бородачей'
    }
  ]

}
