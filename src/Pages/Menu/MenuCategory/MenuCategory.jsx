import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import Items from "../../Shared/Items/Items";


const MenuCategory = ({items, title, img, desc}) => {
    return (
        <div className="my-12">
            {title && <Cover img={img} title={title} desc={desc}></Cover>}
            {items && <div className="grid md:grid-cols-2 gap-7 my-12">
                {
                    items.map(item => <Items
                        key={item._id}
                        item= {item}
                    ></Items>)
                }
            </div>}
            {title && <div className="text-center">
            <Link to={`/order/${title}`} ><button className="btn btn-primary-outline text-white mt-5 border-0 border-b-2 ">order now</button></Link>
            </div>}
        </div>
    );
};

export default MenuCategory;