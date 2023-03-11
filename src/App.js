import './App.css';
import NavBar from './Components/Common/NavBar/navbar';
import Login from './Components/Pages/Login/login';
import Footer from './Components/Common/Footer/footer';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
