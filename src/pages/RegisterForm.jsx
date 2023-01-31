import Button from "../components/Button";
import { Link } from 'react-router-dom';
function RegisterForm() {
    return (
      <div className="container container__form">
        <h3>
          Crear<span className="important"> cuenta</span>
        </h3>
        <form action="">
          <div>
            <label htmlFor="name">
              Ingrese su nombre <span className="important">*</span>
            </label>
            <input type="text" id="name"/>
          </div>
          <div>
            <label htmlFor="email">
              Ingrese su email <span className="important">*</span>
            </label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="passwd">
              Ingrese una contraseña <span className="important">*</span>
            </label>
            <input type="password" id="passwd"/>
          </div>
          <div>
            <label htmlFor="passwd_validate">
              Confirme contraseña <span className="important">*</span>
            </label>
            <input type="password" id="passwd_confirm"/>
          </div>
          <div className="flex">
            <input type="checkbox" id="terms"/>
            <label htmlFor="terms">Acepto los terminos de uso</label>
          </div>
          <div>
            <Button action='Registrarse' />
          </div>
          <div>
            <span>
              Ya tiene una cuenta ?{" "}
              <Link to={"/login"} className="important">
                  {" "}
                  Ingrese aquí
                </Link>
            </span>
          </div>
        </form>
      </div>
    );
}

export default RegisterForm;