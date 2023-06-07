

const SectionHeading = ({subHeading, heading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-500">--- {subHeading} ---</p>
            <h3 className="border-y-2 text-3xl uppercase mt-2 py-3">{heading}</h3>
        </div>
    );
};

export default SectionHeading;