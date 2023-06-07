import { Parallax } from 'react-parallax';

const Cover = ({img, title, desc}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div className="hero h-[600px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content bg-opacity-50 bg-slate-500 w-1/2 py-6 text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">{desc}</p>
                </div>
            </div>
        </div>
    </Parallax>
    );
};

export default Cover;