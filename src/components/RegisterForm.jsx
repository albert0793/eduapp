import Button from "./Button";

function RegisterForm() {
    return (
      <div className="container">
        <h3>
          Crear<span className="required"> cuenta</span>
        </h3>
        <form action="">
          <div>
            <label htmlFor="name">
              Ingrese su nombre <span className="required">*</span>
            </label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">
              Ingrese su email <span className="required">*</span>
            </label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="passwd">
              Ingrese una contraseña <span className="required">*</span>
            </label>
            <input type="password" id="passwd" required />
          </div>
          <div>
            <label htmlFor="passwd_validate">
              Confirme contraseña <span className="required">*</span>
            </label>
            <input type="password" id="passwd_confirm" required />
          </div>
          <div className="flex">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">Acepto los terminos de uso</label>
          </div>
          <div>
            <Button action='Registrarse' />
          </div>
          <div>
            <span>
              Ya tiene una cuenta ?{" "}
              <a href="login.html" className="required">
                Ingrese aquí
              </a>
            </span>
          </div>
        </form>
      </div>
    );
}

export default RegisterForm;