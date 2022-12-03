import { Route, Routes, Navigate } from 'react-router-dom';
import { MainPage, AboutPage, RoomPage } from 'pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/californiacastle' element={<MainPage />} />
      <Route path='/room/:id' element={<RoomPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='*' element={<Navigate to='/californiacastle' replace />} />
    </Routes>
  );
};
