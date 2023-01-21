import Button from "./Button";

function LoginForm(props) {
    return (
      <div className="container">
        <h3>
          Iniciar<span className="required"> Sesión</span>
        </h3>
        <form action="">
          <div>
            <label htmlFor="email">
              Email o nombre de usuario <span className="required">*</span>
            </label>
            <input type="email" id="email" required onfocus="true" />
          </div>
          <div>
            <label htmlFor="passwd">
              Contraseña <span className="required">*</span>
            </label>
            <input type="password" id="passwd" required />
          </div>
          <div className="flex">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">Acepto los terminos de uso</label>
          </div>
          <div>
            <Button action='Inicia Sesión' />
          </div>
          <div className="flex options">
            <div>
              <span>
                No tiene una cuenta ?{" "}
                <a href="register.html" className="required">
                  {" "}
                  Registrese aquí
                </a>
              </span>
            </div>
            <div>
              <span>
                Olvidó su contraseña ?{" "}
                <a href="#" className="required">
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