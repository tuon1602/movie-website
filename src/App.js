import "antd/dist/reset.css";
import Header from "./component/Header";
import { Layout, Space } from "antd";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import DetailPage from "./pages/DetailPage";
import HotMovie from "./pages/HotMovie";
import AllMovie from "./pages/AllMovie";
import NewMovie from "./pages/NewMovie";
import AllTvSeries from "./pages/AllTvSeries";
import MovieSearch from "./pages/MovieSearch";
import CategoryPage from "./pages/CategoryPage";
import YearPage from "./pages/YearPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/hot" element={<HotMovie />} />
        <Route path="/new" element={<NewMovie />} /> */}
        <Route path="/movie" element={<AllMovie />}/>
        <Route path="/tv" element={<AllTvSeries />} />
        <Route path="/detail">
          <Route path=":detailId" element={<DetailPage/>}/>
        </Route>
        <Route path="/search">
          <Route path=":searchQuery" element={<MovieSearch/>}/>
        </Route>
        <Route path="/category">
          <Route path=":categoryQuery" element={<CategoryPage/>}/>
        </Route>
        <Route path="/year">
          <Route path=":yearQuery" element={<YearPage/>}/>
        </Route>
        <Route path="/collection" element={<CollectionPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
