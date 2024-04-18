import { MovieDetailsType, RatedType } from "./modals";

export const removeFromList = (list: MovieDetailsType[] | RatedType[], value: number) => {
    // const newList =
    var index = list.findIndex(({id}) => id === value);
    if (index > -1) {
      list.splice(index, 1);
    }
    return list;
}

export const addToList = (list: MovieDetailsType[], newMovie: MovieDetailsType ) => {
  list.push(newMovie);
  return list;
}

export const addToRatedList = (list: RatedType[], newMovie:  RatedType) => {
  list.push(newMovie);
  return list;
}