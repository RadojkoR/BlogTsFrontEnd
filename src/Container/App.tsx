import { Route, Routes } from 'react-router-dom';
import { Nav, Footer } from '../Components/Layout';
import '../Styles/App.scss';
import { About, Blog, BlogItem, Continent, Country, CreateBlog, CreateContinent, CreateCountry, DeleteContinent, Destinations, Home, LogIn, TravelTips } from '../Pages/indexPages';
import BlogToolBar from '../Components/Layout/BlogToolBar';

function App() {

  return (
    <div className="relative">
      <Nav />
      <BlogToolBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/destinations" element={<Destinations />}></Route>
          <Route
            path="/destinations/:continentName"
            element={<Continent />}
          ></Route>
          <Route
            path="/destinations/:continentName/:countryName/"
            element={<Country />}
          ></Route>
          <Route
            path="/destinations/:continentName/:countryName/:blogTitle"
            element={<BlogItem />}
          ></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/traveltips" element={<TravelTips />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/createBlog" element={<CreateBlog />}></Route>
          <Route path="/createContinent" element={<CreateContinent />}></Route>
          <Route path="/deleteContinent" element={<DeleteContinent />}></Route>
          <Route path="/createCountry" element={<CreateCountry />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
