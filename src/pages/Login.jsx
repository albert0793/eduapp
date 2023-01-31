import Button from "../components/Button";
import { Link } from 'react-router-dom';
function LoginForm(props) {
    return (
      <div className="container">
        <h3>
          Iniciar<span className="important"> Sesión</span>
        </h3>
        <form action="">
          <div>
            <label htmlFor="email">
              Email o nombre de usuario <span className="important">*</span>
            </label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="passwd">
              Contraseña <span className="important">*</span>
            </label>
            <input type="password" id="passwd"/>
          </div>
          <div className="flex">
            <input type="checkbox" id="terms"/>
            <label htmlFor="terms">Acepto los terminos de uso</label>
          </div>
          <div>
            <Button action='Inicia Sesión' />
          </div>
          <div className="flex options">
            <div>
              <span>
                No tiene una cuenta ?{" "}
                <Link to={"/register"} className="important">
                  {" "}
                  Registrese aquí
                </Link>
              </span>
            </div>
            <div>
              <span>
                Olvidó su contraseña ?{" "}
                <a href="#" className="important">
                  {" "}
                  Cambiela aquí
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
}

export default LoginForm;