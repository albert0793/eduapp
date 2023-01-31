import Wrapper from "./components/container/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginForm from "./pages/Login";
import Register from "./pages/RegisterForm";
import Pqrs from "./pages/Pqrs";
import Help from "./pages/Help";
import Error from "./pages/NotFound";
import { Route, Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import CourseSection from "./pages/Courses";
import "./css/style.css";
import "./css/navbar.css";
import "./css/darkmode.css";
import "./css/globals.css";

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pqrs" element={<Pqrs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<CourseSection />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
