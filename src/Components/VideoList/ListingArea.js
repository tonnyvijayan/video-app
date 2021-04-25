import "./ListingArea.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PlayList } from "../PlayList/PlayList";
import { SavedList } from "../Saved/SavedList";
import { Login } from "../Login.js";
import { useAuth } from "../../Contexts/AuthProvider";
import { PrivateRoute } from "../PrivateRoute";

export function ListingArea() {
  return (
    <div class="listing-area">
      <Routes>
        <PrivateRoute path="/playlist" element={<PlayList />} />

        <Route path="/saved" element={<SavedList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
