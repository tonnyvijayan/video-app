import "./ListingArea.css";
import "../../App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PlayList } from "../PlayList/PlayList";
import { SavedList } from "../Saved/SavedList";
import { VideoHome } from "../VideoSection/VideoHome";
import { Login } from "../Login.js";
import { useAuth } from "../../Contexts/AuthProvider";
import { PrivateRoute } from "../PrivateRoute";
import { VideoPage } from "../VideoSection/VideoPage";
import { SignUp } from "../SignUp";

export function ListingArea() {
  return (
    <div className="listing-area">
      <Routes>
        <PrivateRoute path="/playlist" element={<PlayList />} />
        <Route path="/" element={<VideoHome />} />
        <Route path="/watchlater" element={<SavedList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/videos/:videoId" element={<VideoPage />} />
      </Routes>
    </div>
  );
}
