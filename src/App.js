import './App.css';
import NavBar from './Components/Common/NavBar/navbar';
import Login from './Components/Pages/Login/login';
import Signup from './Components/Pages/UserSignUp/signup';
import Footer from './Components/Common/Footer/footer';
import Welcome from './Components/Pages/WelcomeScreen/welcome'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
