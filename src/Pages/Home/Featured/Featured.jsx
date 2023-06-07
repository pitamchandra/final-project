import SectionHeading from "../../../Components/SectionHeading";

import featured from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-item my-12 py-16 text-white">
            <SectionHeading
                subHeading={"checking it up"}
                heading={'from our menu'}
            ></SectionHeading>
            <div className="md:flex gap-6 z-10 justify-center items-center md:w-3/4 mx-auto">
                <img className="w-1/2" src={featured} alt="" />
                <div>
                    <p>20 may, 2023</p>
                    <h3 className="uppercase">where can i get some</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nihil quod blanditiis pariatur eaque cumque magnam similique, nulla repellat consequuntur ex, facere minima at impedit unde, consequatur fugiat. Quibusdam blanditiis tenetur, molestias in quidem dolorum culpa consectetur ipsum non tempora!</p>
                    <button className="btn btn-outline text-white mt-5 border-0 border-b-2 ">order now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;