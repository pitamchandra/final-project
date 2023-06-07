import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
import SectionHeading from "../../../Components/SectionHeading";

const Category = () => {
    return (
        <section>
            <SectionHeading
                heading={'order online'}
                subHeading={'from 11:00am to 10.00pm'}
            ></SectionHeading>
         <Swiper
            slidesPerView={4}
            spaceBetween={40}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-5"
        >
            <SwiperSlide>
                <img className="w-full" src={image1} alt="" />
                <h2 className="text-4xl text-white uppercase -mt-28 text-center ">Salad</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full" src={image2} alt="" />
                <h2 className="text-4xl text-white uppercase -mt-28 text-center ">Salad</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full" src={image3} alt="" />
                <h2 className="text-4xl text-white uppercase -mt-28 text-center ">Salad</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full" src={image4} alt="" />
                <h2 className="text-4xl text-white uppercase -mt-28 text-center ">Salad</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full" src={image5} alt="" />
                <h2 className="text-4xl text-white uppercase -mt-28 text-center ">Salad</h2>
            </SwiperSlide>
        </Swiper>   
        </section>
    );
};

export default Category;