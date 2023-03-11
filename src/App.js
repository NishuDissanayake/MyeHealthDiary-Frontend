import './App.css';
import NavBar from './Components/Common/NavBar/navbar';
import Login from './Components/Pages/Login/login';
import Signup from './Components/Pages/UserSignUp/signup';
import Footer from './Components/Common/Footer/footer';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
