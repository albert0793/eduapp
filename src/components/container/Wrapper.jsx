import React, { Component } from "react";
import Card from "../Card";
import data from "../../course.json";
import images from "../../utilities/images";
import Header from "../Header";
import CardInfo from "../CardInfo";
class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.goTop = this.goTop.bind(this);
  }
  state = {
    show: false,
    courses: data,
    scroll: 0,
  };
  goTop() {
    // scrollTo.scrollIntoView({ behavior:'smooth' });
    if (window.scrollY > 0) {
      this.setState({ scroll: window.scrollY });
    } else {
      this.setState({ scroll: window.scrollY });
    }
  }
  up() {
    // scrollTo.scrollIntoView({ behavior:'smooth' });
    window.scrollTo(0, 0);
  }

  // const scrollUp = document.querySelector('.go__top');

  render() {
    window.addEventListener("scroll", () => this.goTop());
    return (
      <div className="wrapper">
        <Header />
        <div className="main__section">
          <div className="left__section">
            <h1 className="title__section">
              El aprendizaje al alcance de su mano y a un{" "}
              <span className="important">click</span> de distancia
            </h1>
            <p className="subtitle__section">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
              ullam numquam deleniti consequuntur, est officiis eveniet
              obcaecati optio repellat sapiente culpa nulla laborum autem
              tempora?
            </p>
            <a href="#" className="btn cta">
              Try Now
            </a>
          </div>
          <div className="right__section">
            <div className="card__section">
              <span>
                <i className="fa fa-users"></i>
              </span>
              <div className="column">
                <h4 className="card__section__title">
                  <span className="important">+</span> 5000
                </h4>
                <p>Estudiantes Satisfechos</p>
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
        <div className="search__bar__container">
          <form action="">
            <div>
              <span>
                <i className="fa fa-search"></i>
              </span>
              <input
                type="text"
                className="search__input"
                placeholder="Buscar por nombre del curso"
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
              <button className="btn btn__search">Search</button>
            </div>
          </form>
        </div>
        <div className="cards__info">
          <h2 className="section__title">
            ¿Por qué una ciudad de Scholeer fuera de lo común?
          </h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <div className="cards__container">
            <CardInfo icon="feed" />
            <CardInfo icon="cubes" />
            <CardInfo icon="clone" />
          </div>
        </div>
        {/* -------------- Courses Section ---------------- */}
        <section className="course__section">
          <h3 className="course__section--title">Cursos Principales</h3>
          <div className="course__container">
            {/* Courses Cards */}
            {
              // console.log(courses.length)
              this.state.courses.map((course, index) => (
                <Card
                  key={index}
                  image={images[index]}
                  description={course.description}
                  title={course.name}
                  category={course.category}
                  teacher={course.teacher}
                />
                // console.log(this.state.courses)
              ))
            }
          </div>
        </section>
        {/* -------------- Courses Section ---------------- */}
        <footer>
          {/* Go top element */}
          <div
            className={`go__top ${this.state.scroll > 10 ? "active" : "0"}`}
            title="Ir a arriba"
            onClick={this.up}
          >
            <i className="fa fa-arrow-up"></i>
          </div>
          {/* Go top element */}
          {/* <div className="footer__content">
                <div className="copyright">
                  <p>Copyright &copy; 2023 Derechos Reservados Powered By <a href="#">Carlos Alberto Guzmán</a></p>
              </div> */}

          <div className="row__footer">
            <div className="column">
              <a href="#" className="logo">
                <h2>
                  Raven <span className="important">.</span>io
                </h2>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit, assumenda?
              </p>
              <div className="social">
              <a href="#" className="social__link">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social__link">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="social__link">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="social__link">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            </div>
            <div className="column">
              <h6 className="column__title">Explorar</h6>
              <ul>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Articulos</a></li>
                <li><a href="#">Mapa del sitio</a></li>
                <li><a href="#">Regalos</a></li>
              </ul>
            </div>
            <div className="column">
              <h6 className="column__title">Nosotros</h6>
              <ul>
                <li><a href="#">Politica de privacidad</a></li>
                <li><a href="#">terminos y condiciones</a></li>
                <li><a href="#">Para empresas</a></li>
                <li><a href="#">Soporte</a></li>
              </ul>
            </div>
            <div className="column">
              <h6 className="column__title">Comunidad</h6>
              <ul>
                <li><a href="#">Referir un amigo</a></li>
                <li><a href="#">Miembros premiun</a></li>
                <li><a href="#">Zona Estudiantes </a></li>
                <li><a href="#">Cursos gratis</a></li>
              </ul>
            </div>
          </div>
        </footer>
        {/* <h1 className="title__page">Education App</h1>
          {registered ? <LoginForm /> : <RegisterForm />} */}
          {this.props.children}
      </div>
    );
    // );
  }
}

export default Wrapper;
