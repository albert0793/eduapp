
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './css/style.css';

function App() {
    let registered = false;
  return (
    <div>
    <h1 className="title__page">Education App</h1>
        {
           registered ? <LoginForm /> : <RegisterForm />
        }
    </div>
  );
}

export default App;
