
import SectionHeading from "../../../Components/SectionHeading";
import Items from "../../Shared/Items/Items";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu()

    const popular = menu.filter(item => item.category === 'popular')


    // const [menuItems, setMenuItems] = useState([])

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=> res.json())
    //     .then(data => {
    //         const popularItems = data.filter(popular => popular.category === 'popular')
    //         setMenuItems(popularItems)
    //     })
    // },[])

    return (
        <section className="my-12">
            <SectionHeading
                heading="Popular Menu"
                subHeading="Check it out"
            ></SectionHeading>
            <div className="grid md:grid-cols-2 gap-7 my-5">
                {
                    popular.map(item => <Items
                        key={item._id}
                        item= {item}
                    ></Items>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;