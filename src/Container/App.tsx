import { Route, Routes } from 'react-router-dom';
import { Nav, Footer } from '../Components/Layout';
import '../Styles/App.scss';
import { About, Blog, BlogItem, Continent, Country, Destinations, Home, LogIn, TravelTips } from '../Pages/indexPages';

function App() {


  return (
    <div className="relative">
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/destinations" element={<Destinations />}></Route>
          <Route path='/destinations/:continentName/:continentId' element={<Continent/>}></Route>
          <Route path='/destinations/:continentName/:continentId/:countryName/:countryId' element={<Country/>}></Route>
          <Route path='/destinations/:continentName/:continentId/:countryName/:countryId/:blogTitle' element={<BlogItem/>}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/traveltips" element={<TravelTips />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
