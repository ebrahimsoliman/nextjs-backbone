import React   from 'react';
import {
    Swiper,
    SwiperSlide
}              from "swiper/react";
import {Image} from "antd";
import SwiperCore, {
    Autoplay,
    EffectCube,
    Pagination
}              from 'swiper';

SwiperCore.use([
                   EffectCube,
                   Pagination,
                   Autoplay
               ]);

function SwiperSlider() {
    return (
        <div>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                autoplay={true}
                cubeEffect={{
                    "shadow"      : true,
                    "slideShadows": true,
                    "shadowOffset": 20,
                    "shadowScale" : 0.94
                }}
                pagination={true}
                className="mySwiper">
                <SwiperSlide><Image preview={false}
                                    src={'https://source.unsplash.com/user/c_v_r/1600x900'}/></SwiperSlide>
                <SwiperSlide><Image preview={false}
                                    src={'https://source.unsplash.com/user/c_v_r/1600x900'}/></SwiperSlide>
                <SwiperSlide><Image preview={false}
                                    src={'https://source.unsplash.com/user/c_v_r/1600x900'}/></SwiperSlide>
                <SwiperSlide><Image preview={false}
                                    src={'https://source.unsplash.com/user/c_v_r/1600x900'}/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperSlider;
