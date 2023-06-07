

const Items = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className="flex gap-6">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[118px]" src={image} alt="" />
            <div>
                <h2 className="uppercase font-semibold">{name} -----------------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default Items;