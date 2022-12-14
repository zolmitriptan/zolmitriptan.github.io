import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Loading from "./components/loading/Loading";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import NoPage from "./pages/noPage/NoPage";
import Search from "./pages/search/Search";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

// index page
