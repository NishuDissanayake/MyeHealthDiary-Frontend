import './App.css';
import NavBar from './Components/Common/NavBar/navbar';
import Login from './Components/Pages/Login/login';
import Signup from './Components/Pages/UserSignUp/signup';
import Home from './Components/Pages/UserHome/userhome';
import Footer from './Components/Common/Footer/footer';
import Welcome from './Components/Pages/WelcomeScreen/welcome';
import Profile from './Components/Pages/UserProfile/userprofile';
import Calendar from './Components/Pages/UserCalendar/calendar';
import Doctor from './Components/Pages/UserFindDoctor/finddoctor';
import Hospitalization from './Components/Pages/UserHospitalization/hospitalization';
import MoodChart from './Components/Pages/UserMoodChart/moodchart';
import Records from './Components/Pages/UserRecords/records';
import Vaccines from './Components/Pages/UserVaccines/vaccines';
import Adminprofile from './Components/Pages/AdminProfile/adminprofile';
import Admindashboard from './Components/Pages/AdminDashboard/admindashboard';
import AddDoctor from './Components/Pages/AdminDashboard/addDoctor';
import ManageHospital from './Components/Pages/AdminDashboard/manageHospital';
import AddHospital from './Components/Pages/AdminDashboard/addHospital';
import EmergencyData from './Components/Pages/EmergencyData/emergencyData';
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
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/records" element={<Records />} />
        <Route path="/hospitalization-record" element={<Hospitalization />} />
        <Route path="/mood-chart" element={<MoodChart />} />
        <Route path="/admin-profile" element={<Adminprofile />} />
        <Route path="/admin-dashboard" element={<Admindashboard />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/vaccinations" element={<Vaccines />} />
        <Route path="/manage-hospital" element={<ManageHospital />} />
        <Route path="/emergency" element={<EmergencyData />} />
        <Route path="/add-hospital" element={<AddHospital />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter> 
  );
}

export default App;
