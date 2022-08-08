import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/footer/Footer";

// import MovieListing from "./components/MovieListing/MovieListing";

function App() {
  return (
    <div className="App">
       <Router>
           <Header />
           <div className="container">
         
           <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="movie/:imbdID" element={<MovieDetails/>}/>
            <Route path="null" element={<PageNotFound/>}/>
           </Routes>
           </div>
           <Footer/>
          </Router>
          
         

    </div>
  );
}

export default App;
