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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/hot" element={<HotMovie />} />
        <Route path="/new" element={<NewMovie />} />
        <Route path="/movie" element={<AllMovie />}/>
        <Route path="/tv" element={<AllTvSeries />} />
        <Route path="/detail">
          <Route path=":detailId" element={<DetailPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
