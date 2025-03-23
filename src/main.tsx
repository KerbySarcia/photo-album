import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home-page/home-page.tsx";
import CreatePage from "./pages/create-page/create-page.tsx";
import PostPage from "./pages/post-page/post-page.tsx";
import LoginPage from "./pages/login-page/login-page.tsx";
import ProfilePage from "./pages/profile-page/profile-page.tsx";
import SearchPage from "./pages/search-page/search-page.tsx";
import MainLayout from "./pages/layouts/main-layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
