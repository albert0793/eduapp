
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';
import './css/style.css';
import './css/navbar.css';
import Header from './components/Header';
import CardInfo from './components/CardInfo';
import Card from './components/Card';

function App() {
    let registered = false;
  return (
    <div className="wrapper">
      <Header />
      <div className="main__section">
        <div className="left__section">
          <h1 className="title__section">
            El aprendizaje al alcance de su mano y a un{" "}
            <span className="required">click</span> de distancia
          </h1>
          <p className="subtitle__section">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
            ullam numquam deleniti consequuntur, est officiis eveniet obcaecati
            optio repellat sapiente culpa nulla laborum autem tempora?
          </p>
          <a href="#" className="btn cta">
            Try Now
          </a>
        </div>
        <div className="right__section">
          <div className="card__section">
            <div>
              <span>
                <i className="fa fa-users"></i>
              </span>
            </div>
            <div>
              <h3 className="title__card">
                50 <span className="required">+</span>
              </h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="margin__shadow">
            <div className="bars">
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
            </div>
          </div>
          <div className="point"></div>
          <div className="point"></div>
          <div className="point"></div>
        </div>
      </div>
      <div className='search__bar__container'>
        <form action="" >
          <div>
            <span>
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              className="search__input"
              placeholder='Buscar por nombre del curso'
            />
          </div>
          <div>
            <select name="" id="">
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Php">Php</option>
              <option value="NodeJS">NodeJS</option>
              <option value="GoLang">GoLang</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Sql">Sql</option>
            </select>
          </div>
          <div>
            <button className='btn btn__search'>Search</button>
          </div>
        </form>
      </div>
      <div className='cards__info'>
        <h2 className="section__title">
        ¿Por qué una ciudad de Scholeer fuera de lo común?
        </h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="cards__container">
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
      </div>
      {/* -------------- Courses Section ---------------- */}
      <section className="course__section">
          <h3 className='course__section--title'>Cursos Principales</h3>
        <div className="course__container">
          {/* Courses Cards */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      {/* -------------- Courses Section ---------------- */}
      {/* <h1 className="title__page">Education App</h1>
      {registered ? <LoginForm /> : <RegisterForm />} */}
    </div>
  );
}

export default App;
