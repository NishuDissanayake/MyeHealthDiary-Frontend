import './App.css';
import NavBar from './Components/Common/NavBar/navbar';
import Login from './Components/Pages/Login/login';
import Signup from './Components/Pages/UserSignUp/signup';
import Footer from './Components/Common/Footer/footer';
import Welcome from './Components/Pages/WelcomeScreen/welcome';
import Profile from './Components/Pages/UserProfile/userprofile';
import Calendar from './Components/Pages/UserCalendar/calendar';
import Doctor from './Components/Pages/UserFindDoctor/finddoctor';
import Hospitalization from './Components/Pages/UserHospitalization/hospitalization';
import MoodChart from './Components/Pages/UserMoodChart/moodchart';
import Records from './Components/Pages/UserRecords/records';
import Vaccines from './Components/Pages/UserVaccines/vaccines';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/records" element={<Records />} />
        <Route path="/hospitalization-record" element={<Hospitalization />} />
        <Route path="/mood-chart" element={<MoodChart />} />
        <Route path="/vaccinations" element={<Vaccines />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter> 
  );
}

export default App;
