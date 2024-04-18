import Image from "next/image";

type PropsType = {
    movieTitle: string
}

const DefaultPoster = ({movieTitle}: PropsType) => {
    return (
        <div 
            className="
                w-full h-full transition-all rounded-md 
                shadow-2xl  duration-300 cursor-pointer p-4 flex 
                justify-center items-center text-sm bg-[#18212f] text-balance text-center overflow-auto whitespace-nowrap
            "
            >
            {movieTitle}
        </div>
    );
};

export default DefaultPoster;