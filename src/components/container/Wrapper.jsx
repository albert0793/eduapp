import React, { Component } from 'react';
import Card from '../Card';
import data from '../../course.json';
import images from '../../utils/images';
import Header from '../Header';
import CardInfo from '../CardInfo';
class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.goTop = this.goTop.bind(this);
    }
    state = {
        show: false,
        courses: data,
        scroll: 0,
    }
    goTop() {
        // scrollTo.scrollIntoView({ behavior:'smooth' });
        if(window.scrollY > 0) {
          this.setState({scroll: window.scrollY});
        }
        else {
          this.setState({scroll: window.scrollY});
        }
    }
    up() {
      // scrollTo.scrollIntoView({ behavior:'smooth' });
      window.scrollTo(0,0);
    }
    
// const scrollUp = document.querySelector('.go__top');
    
    render() {
      window.addEventListener('scroll', () => this.goTop());
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dicta, ullam numquam deleniti consequuntur, est officiis
                  eveniet obcaecati optio repellat sapiente culpa nulla laborum
                  autem tempora?
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
                      <span className="required">+</span> 5000
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
                <CardInfo icon='feed'/>
                <CardInfo icon='cubes'/>
                <CardInfo icon='clone'/>
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
              <div className={`go__top ${this.state.scroll > 10 ? 'active' : '0'}`} title='Ir a arriba' onClick={this.up}>
                <i className="fa fa-arrow-up"></i>
              </div>
              {/* Go top element */}
              <div className="footer__content">
                <div className="copyright">
                  <p>Copyright &copy; 2023 Derechos Reservados Powered By <a href="#">Carlos Alberto Guzmán</a></p>
                </div>
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
            </footer>
            {/* <h1 className="title__page">Education App</h1>
          {registered ? <LoginForm /> : <RegisterForm />} */}
          </div>
        );
        // );
    }
}

export default Wrapper;
