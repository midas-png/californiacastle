import { Route, Routes } from 'react-router-dom';
import { MainPage, AssistancePage, ContactsPage, LocationsPage } from 'pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/californiacastle' element={<MainPage />} />
      <Route path='/assistance' element={<AssistancePage />} />
      <Route path='/contacts' element={<ContactsPage />} />
      <Route path='/locations' element={<LocationsPage />} />
    </Routes>
  );
};
