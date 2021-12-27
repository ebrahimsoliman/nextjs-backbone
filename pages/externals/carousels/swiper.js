import React  from 'react';
import {Grid} from "@mui/material";
import {
    Swiper,
    SwiperSlide
}             from 'swiper/react';

function SwiperSlider() {
    return (
        <Grid container><Grid item
                              xs={12}
                              component={'div'}><Swiper
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
        </Swiper>
        </Grid> </Grid>
    );
}

export default SwiperSlider;
