import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/home/Home";
import List from "./components/list/List";
import ListItem from "./components/listItem/ListItem";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotel/:id" element={<ListItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
