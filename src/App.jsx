
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './css/style.css';
import './css/navbar.css';
import Header from './components/Header';

function App() {
    let registered = false;
  return (
    <div className='wrapper'>
        <Header />
      {/* <h1 className="title__page">Education App</h1>
      {registered ? <LoginForm /> : <RegisterForm />} */}
    </div>
  );
}

export default App;
