import { MovieDetailsType } from "./modals";

export const removeFromList = (list: MovieDetailsType[], value: number) => {
    var index = list.findIndex(({id}) => id === value);
    if (index > -1) {
      list.splice(index, 1);
    }
    return list;
}

export const addToList = (list: MovieDetailsType[], newMovie: MovieDetailsType) => {
        const newList = [...list];
        newList.push(newMovie);
        return newList;
}