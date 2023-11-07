import { LitElement, html } from 'lit-element';
import stylesCss from './loginStyle';


export class MyLogin extends LitElement {

  constructor(){
    super()
    this.firstName = ""
    this.lastName = ""
  }

  static get styles(){
    return [stylesCss]
  }

  

  render() {
    return html`
      <div class="login">
        <h3>Login</h3>
        <form>
          <div class="camp">
            <label for="inputEmail" class="">Correo electrónico:</label>
            <input type="email" id="inputEmail" class="input-login">
          </div>
          <div class="camp">
            <label for="inputPassword">Contraseña:</label>
            <input type="password" id="inputPassword">
          </div>
          <button type="submit" class="btn">Ingresar</button>
        </form>
      </div>
    `;
  }
}

customElements.define('my-login', MyLogin);