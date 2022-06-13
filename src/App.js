import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Main from './pages/main/main';
import SignUp from './pages/signUp/signUp';
import SignIn from './pages/signIn/signIn';
import TripPage from './pages/tripPage/tripPage';
import Bookings from './pages/bookings/bookings';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/trip/:tripId" element={<TripPage />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
