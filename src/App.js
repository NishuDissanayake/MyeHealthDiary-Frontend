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
import UserEmergency from './Components/Pages/EmergencyData/userEmergency';
import ProfileUpdate from './Components/Pages/UserProfile/profileUpdate';
import EmtProfile from './Components/Pages/EMTProfile/emtProfile';
import AddEmt from './Components/Pages/AdminDashboard/addEmt';
import AddVaccine from './Components/Pages/DoctorProfile/addVaccine';
import DoctorProfile from './Components/Pages/DoctorProfile/doctorProfile';
import DoctorCurMeds from './Components/Pages/DoctorProfile/doctorCurrentMeds';
import DoctorFindRecord from './Components/Pages/DoctorProfile/doctorFindRecord';
import DoctorUpdateRecord from './Components/Pages/DoctorProfile/doctorUpdateRecord';
import updateReport from './Components/Pages/DoctorProfile/updateReport';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UpdateReport from './Components/Pages/DoctorProfile/updateReport';

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
        <Route path="/hospitalization-record/:id" element={<Hospitalization />} />
        <Route path="/mood-chart" element={<MoodChart />} />
        <Route path="/admin-profile" element={<Adminprofile />} />
        <Route path="/admin-dashboard" element={<Admindashboard />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/vaccinations" element={<Vaccines />} />
        <Route path="/manage-hospital" element={<ManageHospital />} />
        <Route path="/emergency" element={<EmergencyData />} />
        <Route path="/user-emergency-data" element={<UserEmergency />} />
        <Route path="/add-hospital" element={<AddHospital />} />
        <Route path="/add-emt" element={<AddEmt />} />
        <Route path="/manage-profile" element={<ProfileUpdate />} />
        <Route path="/emt-profile" element={<EmtProfile />} />
        <Route path="/add-vaccine" element={<AddVaccine />} />
        <Route path="/add-current-meds" element={<DoctorCurMeds />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/find-user-record" element={<DoctorFindRecord />} />
        <Route path="/update-user-record/:id" element={<DoctorUpdateRecord />} />
        <Route path="/update-report/:id" element={<UpdateReport />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter> 
  );
}

export default App;
