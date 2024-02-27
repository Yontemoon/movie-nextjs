import { getGenreName } from "@/library/genres";
import { Button } from "./ui/button";
import { movieDetails } from "@/library/modals";


const GenreButtons = ({movie}: {movie: movieDetails}) => {
    return (
        <div className="gap-2 flex">
            {movie.genre_ids.slice(0, 3).map((genreId, index) => (
                <Button variant="outline" size="sm"key={index}>{getGenreName(genreId)}</Button>
            ))}
        </div>
    );
};

export default GenreButtons;