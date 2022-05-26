import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,

} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    breakpoints: {
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
    
  };
  constructor() { }

  ngOnInit() {
  }
  ionSlideDidChange(event){
    console.log(event);
  }
}
