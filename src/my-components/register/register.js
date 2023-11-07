import { LitElement, html } from 'lit-element';
import stylesCss from './registerStyle';

export class MyRegister extends LitElement {
    static get styles(){
        return [stylesCss]
    }
    
    render() {
        return html`
            <div class="register">
                <h3>Registro</h3>
                <form>
                    <div class="mb-3">
                        <label for="inputName">Nombre:</label>
                        <input type="text" id="inputName">
                    </div>
                    <div class="mb-3">
                        <label for="inputLastname">Apellido:</label>
                        <input type="text" id="inputLastname">
                    </div>
                    <div class="mb-3">
                        <label for="inputEmail">Correo electrónico:</label>
                        <input type="text" id="inputEmail">
                    </div>
                    <div class="mb-3">
                        <label for="inputPassword">Contraseña:</label>
                        <input type="password" id="inputPassword">
                    </div>
                    <button type="submit" class="btn">Ingresar</button>
                </form>
            </div>
        `;
}
}

customElements.define('my-register', MyRegister);