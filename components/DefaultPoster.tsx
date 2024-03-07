import Image from "next/image";

type PropsType = {
    movieTitle: string
}

const DefaultPoster = ({movieTitle}: PropsType) => {
    return (
        // <Image
        //     src={`${imageUrl}${details.poster_path}`}
        //     alt={`${details.id}`}
        //     width={width}
        //     height={height}
        //     sizes={sizes}
        //     // placeholder='blur'
        //     // fill
        //     // sizes="(max-width: 640px) 100vw, 25vw" 
        //     // sizes="(min-width: 540px) 260px, calc(54.55vw - 24px)" 
        //     className={`w-full h-autoborder-white rounded-md shadow-2xl hover:border-slate-500 transition-shadow duration-300 cursor-pointer ${className} ${showHover ? 'opacity-50' : ''}`}
        //     priority
        //     quality={50}
        // // onLoadingComplete={(img) => console.log(img.naturalWidth)} 
        // />
        <div className="rounded-lg bg-blue-800 text-white">
            {movieTitle}
        </div>
    );
};

export default DefaultPoster;