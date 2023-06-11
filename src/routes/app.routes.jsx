import { Routes, Route } from 'react-router-dom';

import { CreateNote } from '../pages/CreateNote';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createnote" element={<CreateNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}