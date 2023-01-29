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
        {this.props.children}
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
          <div className="row__footer">
            <div className="column">
              <a href="#" className="logo">
                <h6>
                  CodersTeam<span className="important">.</span>co
                </h6>
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
                <li>
                  <a href="#">Cursos</a>
                </li>
                <li>
                  <a href="#">Articulos</a>
                </li>
                <li>
                  <a href="#">Mapa del sitio</a>
                </li>
                <li>
                  <a href="#">Regalos</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h6 className="column__title">Nosotros</h6>
              <ul>
                <li>
                  <a href="#">Politica de privacidad</a>
                </li>
                <li>
                  <a href="#">terminos y condiciones</a>
                </li>
                <li>
                  <a href="#">Para empresas</a>
                </li>
                <li>
                  <a href="#">Soporte</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h6 className="column__title">Comunidad</h6>
              <ul>
                <li>
                  <a href="#">Referir un amigo</a>
                </li>
                <li>
                  <a href="#">Miembros premiun</a>
                </li>
                <li>
                  <a href="#">Zona Estudiantes </a>
                </li>
                <li>
                  <a href="#">Cursos gratis</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="copyright__section">
            <div className="copyright">
              <p>
                Copyright &copy; 2023 Powered By{" "}
                <a href="#" className="logo">
                <h6>
                  CodersTeam<span className="important">.</span>co
                </h6>
              </a>
              </p>
            </div>
            <div className="payment__methods">
              <p>Medios de pago admitidos</p>
              <div><span className="important">Nequi</span></div>
              <div><span className="important">Daviplata</span></div>
              <div><span className="important">Paypal</span></div>
              <div><span className="important">Efecty</span></div>
              <div><span className="important">Payu</span></div>
            </div>
          </div>
        </footer>
      </div>
    );
    // );
  }
}

export default Wrapper;
