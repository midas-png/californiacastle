import { Route, Routes } from 'react-router-dom';
import { MainPage, AboutPage, BookPage } from 'pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/californiacastle' element={<MainPage />} />
      <Route path='/booking' element={<BookPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  );
};
