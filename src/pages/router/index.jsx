import { Route, Routes, Navigate } from 'react-router-dom';
import {
  MainPage,
  ContactPage,
  CarrersPage,
  RoomPage,
  PolicyPage,
} from 'pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/californiacastle' element={<MainPage />} />
      <Route path='/room/:id' element={<RoomPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/policy' element={<PolicyPage />} />
      <Route path='/carrers' element={<CarrersPage />} />
      <Route path='*' element={<Navigate to='/californiacastle' replace />} />
    </Routes>
  );
};
