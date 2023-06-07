import Cover from "../../Shared/Cover/Cover";
import coverBg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import drinksImg from '../../../assets/menu/banner3.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import { Helmet } from 'react-helmet-async';
import useMenu from "../../../hooks/useMenu";
import SectionHeading from "../../../Components/SectionHeading";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={coverBg}
                title="our menu"
                desc={'this is menu page'}
            ></Cover>
            <SectionHeading
                heading="today's item"
                subHeading={"take from us"}
            ></SectionHeading>
            <MenuCategory items={offered} ></MenuCategory>
            <MenuCategory items={dessert} title="dessert" img={desertImg} desc={'desert food is very sweets'}></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg} desc={'salad food is very sweets'}></MenuCategory>
            <MenuCategory items={drinks} title="drinks" img={drinksImg} desc={'drinks food is very sweets'}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg} desc={'pizza food is very sweets'}></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg} desc={'soup food is very sweets'}></MenuCategory>
        </>
    );
};

export default Menu;