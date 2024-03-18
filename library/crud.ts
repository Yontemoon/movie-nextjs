import { MovieDetailsType, RatedType } from "./modals";

export const removeFromList = (list: MovieDetailsType[] | RatedType[], value: number) => {
    var index = list.findIndex(({id}) => id === value);
    if (index > -1) {
      list.splice(index, 1);
    }
    return list;
}

export const addToList = (list: MovieDetailsType[] | RatedType[], newMovie: MovieDetailsType | RatedType) => {
        const newList = [...list];
        newList.push(newMovie);
        return newList;
}