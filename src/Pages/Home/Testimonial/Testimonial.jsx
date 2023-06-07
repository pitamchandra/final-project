import SectionHeading from "../../../Components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])

    return (
        <section className="my-12">
            <SectionHeading
                heading={"testimonials"}
                subHeading={"what our client say"}
            ></SectionHeading>
            <Swiper
                pagination={{
                type: "progressbar",
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="w-3/4 mx-auto text-center">
                                <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                />
                            <FaQuoteRight className="mx-auto w-10 h-10 mt-6"></FaQuoteRight>
                            <p className="my-4">{review.details}</p>
                            <h2 className="text-2xl text-orange-600">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;