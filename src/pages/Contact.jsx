import Button from "../components/Button";
import { Link } from 'react-router-dom';
function Contact(props) {
    return (
      <div className="container">
        <h3>
          Contacte<span className="important">nos</span>
        </h3>
        <form action="">
        <div>
            <label htmlFor="email">
              Nombre y Apellido<span className="important">*</span>
            </label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="email">
              Email<span className="important">*</span>
            </label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="passwd">
              Telefono <span className="important">*</span>
            </label>
            <input type="text" id="passwd" required />
          </div>
          <div>
            <label htmlFor="subject">
              Asunto<span className="important">*</span>
            </label>
            <textarea name="subject" id="subject" cols="30" rows="10"></textarea>
          </div>
          <div className="flex">
            <input type="checkbox" id="terms" important />
            <label htmlFor="terms">Acepto los terminos de uso</label>
          </div>
          <div>
            <Button action='Enviar Mensaje' />
          </div>
        </form>
      </div>
    );
}

export default Contact;