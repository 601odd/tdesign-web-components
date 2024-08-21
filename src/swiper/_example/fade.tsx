import 'tdesign-web-components/swiper';

import { Component } from 'omi';

import { SwiperDemoCss } from './base';

export default class Demo extends Component {
  render() {
    return (
      <t-swiper animation="fade" height={280}>
        <t-swiper-item>
          <div className={SwiperDemoCss}>1</div>
        </t-swiper-item>
        <t-swiper-item>
          <div className={SwiperDemoCss}>2</div>
        </t-swiper-item>
        <t-swiper-item>
          <div className={SwiperDemoCss}>3</div>
        </t-swiper-item>
        <t-swiper-item>
          <div className={SwiperDemoCss}>4</div>
        </t-swiper-item>
        <t-swiper-item>
          <div className={SwiperDemoCss}>5</div>
        </t-swiper-item>
        <t-swiper-item>
          <div className={SwiperDemoCss}>6</div>
        </t-swiper-item>
      </t-swiper>
    );
  }
}