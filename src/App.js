import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./components/MovieList";
import data from "./Data";
import Add from "./components/Add";
import { useState } from "react";
import Filter from "./components/Filter";

function App() {
  const [searchrat, setSearchRat] = useState(0)
  const [searchname, setSearchName] = useState("")
  const [movies, setMovies] = useState(data)
  const filterByName =(srn)=>{setSearchName(srn)}
  const filterByRating =(srr)=>{setSearchRat(srr)}
 
  const handelAdd = (M)=>{setMovies([{...M,_id:movies.length},...movies]) }


  return (
    <div >
      <Filter filterByName={filterByName} filterByRating={filterByRating}/>
      <Add handelAdd={handelAdd}/>
     <MovieList data={movies.filter((el)=> el.Title.toLowerCase().includes(searchname.toLowerCase())&& el.Rating >= searchrat) }></MovieList>
    </div>
  );
}

export default App;
