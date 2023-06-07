
import FoodCard from '../../Shared/FoodCard/FoodCard';

const OrderTab = ({item}) => {
    // Todo: pagination page here
    return (
        <div className="grid md:grid-cols-3 gap-7 my-10">
            {
                item.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;