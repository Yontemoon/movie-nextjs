"use server"

import Popular from "@/components/Popular";
import { fetchData, postFetchApi } from "@/library/db";
import CarousalDefault from "@/components/CarousalDefault";
import { getServerSession } from "next-auth"


export default async function Home () {
  
  const popular = await fetchData("/movie/popular?language=en-US&page=1&region=US").then((response)=> {
    return response.results
  })

  const nowPlaying = await fetchData('/movie/now_playing?language=en-US&page=1&region=us').then((response) =>{
    return response.results
  })

  const topRated = await fetchData("/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&region=us").then((response) => {
    return response.results
  })

  // console.log(nowPlaying)
  return (
    <div className="">
      <Popular popular={popular}/>
      <CarousalDefault title="Now Playing" movieList={nowPlaying} />
      <CarousalDefault title="Top Rated" movieList={topRated}/>
    </div>
  );
}
