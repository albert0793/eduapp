import Button from "../components/Button";

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
            <input type="email" id="email" important onfocus="true" />
          </div>
          <div>
            <label htmlFor="passwd">
              Contraseña <span className="important">*</span>
            </label>
            <input type="password" id="passwd" important />
          </div>
          <div className="flex">
            <input type="checkbox" id="terms" important />
            <label htmlFor="terms">Acepto los terminos de uso</label>
          </div>
          <div>
            <Button action='Inicia Sesión' />
          </div>
          <div className="flex options">
            <div>
              <span>
                No tiene una cuenta ?{" "}
                <a href="register.html" className="important">
                  {" "}
                  Registrese aquí
                </a>
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