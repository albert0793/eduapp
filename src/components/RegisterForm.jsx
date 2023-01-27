import Button from "./Button";

function RegisterForm() {
    return (
      <div className="container">
        <h3>
          Crear<span className="important"> cuenta</span>
        </h3>
        <form action="">
          <div>
            <label htmlFor="name">
              Ingrese su nombre <span className="important">*</span>
            </label>
            <input type="text" id="name" important />
          </div>
          <div>
            <label htmlFor="email">
              Ingrese su email <span className="important">*</span>
            </label>
            <input type="email" id="email" important />
          </div>
          <div>
            <label htmlFor="passwd">
              Ingrese una contraseña <span className="important">*</span>
            </label>
            <input type="password" id="passwd" important />
          </div>
          <div>
            <label htmlFor="passwd_validate">
              Confirme contraseña <span className="important">*</span>
            </label>
            <input type="password" id="passwd_confirm" important />
          </div>
          <div className="flex">
            <input type="checkbox" id="terms" important />
            <label htmlFor="terms">Acepto los terminos de uso</label>
          </div>
          <div>
            <Button action='Registrarse' />
          </div>
          <div>
            <span>
              Ya tiene una cuenta ?{" "}
              <a href="login.html" className="important">
                Ingrese aquí
              </a>
            </span>
          </div>
        </form>
      </div>
    );
}

export default RegisterForm;