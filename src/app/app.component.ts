import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectofin'
  
  celulares: {modelo:string; marca:string; almacenamiento:string; year:number; urlImg:string}[]=[
    { modelo: 'iPhone 12', marca: 'Apple', almacenamiento: '64GB', year: 2020, urlImg:'https://www.catalogo.claro.com.ec/uploads/imgs/productos/iphone-12-128gb/blanco/zoom/04-iphone-12-128gb-blanco-other.png'},
    { modelo: 'Galaxy S21', marca: 'Samsung', almacenamiento: '128GB', year: 2021, urlImg:'https://i5.walmartimages.com/seo/Samsung-Galaxy-S21-Plus-5G-128-256GB-SM-G996U1-US-Model-Unlocked-Cell-Phones-Very-Good-Condition_46af8b5d-3a63-46e8-97d7-3a8f9fa35f00.4243b2ff1db36d328a46f09ad220d988.jpeg'},
    { modelo: 'Pixel 5', marca: 'Google', almacenamiento: '128GB', year: 2020, urlImg:'https://m.media-amazon.com/images/I/81-fNmQqlLL._AC_SL1500_.jpg'},
    { modelo: 'OnePlus 9', marca: 'OnePlus', almacenamiento: '128GB', year: 2021, urlImg:'https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Wintermist_2080a_euna.png'},
    { modelo: 'iPhone 13', marca: 'Apple', almacenamiento: '128GB', year: 2021, urlImg:'https://think-ecuador.com/wp-content/uploads/2021/10/iPhone_13_mini_Lineup_Print__WWEN-5-scaled.jpg'},
    { modelo: 'Galaxy Note 20', marca: 'Samsung', almacenamiento: '256GB', year: 2020, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlePS2WpVrjbDyo0uUzSBMaGNvvfA5Z2YWQ&s'},
    { modelo: 'Pixel 4a', marca: 'Google', almacenamiento: '64GB', year: 2020, urlImg:'https://imei.org/storage/files/images/2295/thumb/google-pixel-4a.png'},
    { modelo: 'OnePlus 8T', marca: 'OnePlus', almacenamiento: '128GB', year: 2020, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VAhw-q3o0AA1LFns9o46cXCjtACib-YP9Q&s'},
    { modelo: 'iPhone SE', marca: 'Apple', almacenamiento: '64GB', year: 2020, urlImg:'https://mundomac.com.ec/wp-content/uploads/2021/11/iphone-se-01.jpg'},
    { modelo: 'Galaxy S20', marca: 'Samsung', almacenamiento: '128GB', year: 2020, urlImg:'https://i5.walmartimages.com/seo/Like-New-Samsung-Galaxy-S20-5G-SM-G98U1-Full-Unlocked-128GB-In-Box-with-Excellent-Condition-Blue-Pink-Gray_d4f199aa-a1a8-42bd-b777-cd030a1ca9fd.96f907a99d893d293974306702fec0e2.jpeg'},
    { modelo: 'Pixel 6', marca: 'Google', almacenamiento: '128GB', year: 2021, urlImg:'https://m.media-amazon.com/images/I/71QQZr2pNSL._AC_SL1500_.jpg'},
    { modelo: 'OnePlus 7T', marca: 'OnePlus', almacenamiento: '128GB', year: 2019, urlImg:'https://m.media-amazon.com/images/I/51We9EBUWRL._AC_SL1000_.jpg'},
    { modelo: 'iPhone 11', marca: 'Apple', almacenamiento: '64GB', year: 2019, urlImg:'https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp'},
    { modelo: 'Galaxy A52', marca: 'Samsung', almacenamiento: '128GB', year: 2021, urlImg:'https://i5.walmartimages.com/seo/Pre-Owned-Samsung-Galaxy-A52-5G-T-Mobile-Only-128GB-Black-6-5-in-Refurbished-Good_e3d7be43-b559-41f4-a1a0-f136df049b29.994ec42956a69ec75cbd95b98925a58c.jpeg'},
    { modelo: 'Pixel 3a', marca: 'Google', almacenamiento: '64GB', year: 2019, urlImg:'https://m.media-amazon.com/images/I/61eQRrP5STL._AC_SL1000_.jpg'},    
    { modelo: 'OnePlus Nord', marca: 'OnePlus', almacenamiento: '128GB', year: 2020, urlImg:'https://m.media-amazon.com/images/I/61pNtvCrKPL._AC_SL1500_.jpg'},    
    { modelo: 'iPhone XR', marca: 'Apple', almacenamiento: '64GB', year: 2018, urlImg:'https://m.media-amazon.com/images/I/61lvuOnNpjL._AC_SL1500_.jpg'},    
    { modelo: 'Galaxy S10', marca: 'Samsung', almacenamiento: '128GB', year: 2019, urlImg:'https://m.media-amazon.com/images/I/512kRfynBpL._AC_SL1000_.jpg'},    
    { modelo: 'Pixel 4', marca: 'Google', almacenamiento: '64GB', year: 2019, urlImg:'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/11/07/11/google-pixel-4-review-0711.jpg?width=1200&height=1200&fit=crop'},    
    { modelo: 'OnePlus 6T', marca: 'OnePlus', almacenamiento: '128GB', year: 2018, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_wklwSMPiF1p3tyct-gLpN5K0nIpRin1iQ&s'},
    { modelo: 'iPhone XS', marca: 'Apple', almacenamiento: '64GB', year: 2018, urlImg:'https://i5.walmartimages.com/asr/1faaf365-77ee-4abc-ad26-5cccaf6f0cd8_1.430e428b3cd47988efbce2b83555ce2a.jpeg'},    
    { modelo: 'Galaxy Note 10', marca: 'Samsung', almacenamiento: '256GB', year: 2019, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaz-JglbgZpMtO1Jq0RQKG6nH8POJae7MnEw&s'},    
    { modelo: 'Pixel 2', marca: 'Google', almacenamiento: '64GB', year: 2017, urlImg:'https://m.media-amazon.com/images/I/51kW8PercTL._AC_SL1200_.jpg'},    
    { modelo: 'OnePlus 5T', marca: 'OnePlus', almacenamiento: '64GB', year: 2017, urlImg:'https://i.blogs.es/58a236/oneplus-5t/1366_2000.jpg'},    
    { modelo: 'iPhone X', marca: 'Apple', almacenamiento: '64GB', year: 2017, urlImg:'https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPhone-X-64GB-Factory-Unlocked-Smartphone-Refurbished-Good_9b5ec8b2-9665-463b-adc5-64829ba72da6.1b496e5a8fcee76fdad69bae12b54745.jpeg'},
    { modelo: 'Galaxy S9', marca: 'Samsung', almacenamiento: '64GB', year: 2018, urlImg:'https://i.blogs.es/d2767d/samsung-galaxy-a9-2018-01/450_1000.jpg'},
    { modelo: 'Pixel 2 XL', marca: 'Google', almacenamiento: '128GB', year: 2017, urlImg:'https://i5.walmartimages.com/seo/Google-Pixel-2-XL-Verizon-White-Black-128GB_7bdf962c-4e8f-46c9-b17d-7af47ccade8e.4bf8aa3372f3f9c6dd0047d1fdc28c05.jpeg'},
    { modelo: 'OnePlus 3T', marca: 'OnePlus', almacenamiento: '64GB', year: 2016, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2Us3aoLdxcHyo8AnyxMmcPEE-739D2sJoQ&s'},
    { modelo: 'iPhone 8', marca: 'Apple', almacenamiento: '64GB', year: 2017, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfi2tJGMRmyidpMge5igBYVyfXP9jKext0g&s'},
    { modelo: 'Galaxy S8', marca: 'Samsung', almacenamiento: '64GB', year: 2017, urlImg:'https://m.media-amazon.com/images/I/81NCJilmjzL._AC_SL1500_.jpg'},
    { modelo: 'Pixel 7 pro', marca: 'Google', almacenamiento: '32GB', year: 2016, urlImg:'https://i.blogs.es/0fb8dc/pixel-7-pro_0936-2/1366_2000.jpg'},
    { modelo: 'OnePlus 3', marca: 'OnePlus', almacenamiento: '64GB', year: 2016, urlImg:'https://files.refurbed.io/pi/6,03004e8ac68b.jpg?t=fitdesign&h=600&w=800'},
    { modelo: 'iPhone 7', marca: 'Apple', almacenamiento: '32GB', year: 2016, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7BaoK4MgbFy0bAB8BKJ9tkTPhqGrPOMBuw&s'},
    { modelo: 'Galaxy Note 8', marca: 'Samsung', almacenamiento: '64GB', year: 2017, urlImg:'https://m.media-amazon.com/images/I/61MRz0xqMgL._AC_SL1220_.jpg'},
    { modelo: 'Pixel XL', marca: 'Google', almacenamiento: '128GB', year: 2016, urlImg:'https://i5.walmartimages.com/seo/Google-Pixel-XL-Unlocked-Quite-Black-32GB-Used-Acceptable-5-5-12-3MP-G-2PW2100_412a6d29-0494-4de0-a0da-645a796bb7e3_1.717719605c1922e6ab088427111c3c59.jpeg'},
    { modelo: 'OnePlus 2', marca: 'OnePlus', almacenamiento: '64GB', year: 2015, urlImg:'https://imei.org/storage/files/images/6313/preview/oneplus-2-1.png'},
    { modelo: 'iPhone 6S', marca: 'Apple', almacenamiento: '16GB', year: 2015, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsR7FO_w-Aoaap4UDT-ImzWLlTVcHuer2aA&s'},
    { modelo: 'Galaxy S7', marca: 'Samsung', almacenamiento: '32GB', year: 2016, urlImg:'https://m.media-amazon.com/images/I/61OCfRvtCEL._AC_SL1054_.jpg'},
    { modelo: 'Nexus 6P', marca: 'Google', almacenamiento: '32GB', year: 2015, urlImg:'https://imei.org/storage/files/images/3011/preview/huawei-nexus-6p-1.png'},
    { modelo: 'OnePlus One', marca: 'OnePlus', almacenamiento: '64GB', year: 2014, urlImg:'https://i.blogs.es/33cbef/oneplus-one-1/450_1000.jpg'},
    { modelo: 'iPhone 6', marca: 'Apple', almacenamiento: '16GB', year: 2014, urlImg:'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111940_SP705-iphone_6-mul.png'},
    { modelo: 'Galaxy S6', marca: 'Samsung', almacenamiento: '32GB', year: 2015, urlImg:'https://guayaquil.solutekla.com/photo/1/samsung/celulares/galaxy_s6_64_gb_negro/galaxy_s6_64_gb_negro_0001'},
    { modelo: 'Nexus 5X', marca: 'Google', almacenamiento: '32GB', year: 2015, urlImg:'https://i.ebayimg.com/images/g/Y6EAAOSwi8thMKEX/s-l1600.jpg'},
    { modelo: 'OnePlus X', marca: 'OnePlus', almacenamiento: '16GB', year: 2015, urlImg:'https://images-na.ssl-images-amazon.com/images/I/512aiJKXQsL._SS400_.jpg'},
    { modelo: 'iPhone 5S', marca: 'Apple', almacenamiento: '16GB', year: 2013, urlImg:'https://i5.walmartimages.com/seo/Apple-iPhone-5s-16GB-Space-Gray-Unlocked-Used-Grade-B_edb8b4db-adfe-4f1e-b775-b6dce79a458a_1.f296a46dad5e579f690e29f3b8617a1f.jpeg'},
    { modelo: 'Galaxy S5', marca: 'Samsung', almacenamiento: '16GB', year: 2014, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIwjG7HCFJIG9_qLejGmJ2qRKWI081JxlFw&s'},
    { modelo: 'Nexus 6', marca: 'Google', almacenamiento: '32GB', year: 2014, urlImg:'https://www.huawei.com/es/news/es/2015/~/media/CORPORATE/Local-site/Es/News/2015/414229-1.jpg'},
    { modelo: 'OnePlus 9 pro', marca: 'OnePlus', almacenamiento: '16GB', year: 2014, urlImg:'https://http2.mlstatic.com/D_NQ_NP_899634-MLA47753768851_102021-O.webp'},
    { modelo: 'iPhone 5', marca: 'Apple', almacenamiento: '16GB', year: 2012, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Tg0a96spsz8Cs_jsR-3RyjBQek6oiQPF_Q&s'}
    
  ]


  filtrerByAlmacenamiento(){

    this.celulares = this.celulares.filter(item => item.almacenamiento==='64GB')

  }

  filtrerByMarca(){

    this.celulares = this.celulares.filter(item => item.marca==='Apple')

  }
  filtrerByYear(){
    this.celulares = this.celulares.filter(item => item.year===2020)
  }
}
