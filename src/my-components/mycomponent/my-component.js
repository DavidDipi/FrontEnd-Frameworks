import { LitElement, html } from 'lit-element';
import stylesCss from './my-componentStyle';
import { MyRegister } from '../register/register';
import { MyLogin } from '../login/login';

export class MyElement extends LitElement {

  constructor(){
    super()
    this.saludo = "Saludo 1"
  }

  static get properties(){
    return{
      saludo: { type:String },
      componentesHtml: { type:String }
    }
  }

  static get scopedElements(){
    return {
      'my-login': MyLogin,
      "my-register": MyRegister
    };
  }

  static get styles() {
    return [ stylesCss ]
  }
  
  cambio() {
    this.saludo = "El primer componente"
  }

  renderAll() {
    if ( this.paramComponent == 1 ){
      this.componentesHtml = html `<my-login></my-login>`;
    }else{
      this.componentesHtml = html `<my-register></my-register>`;
    } 
  }

  mostrarComponent() {
    this.renderAll();
  }

  render() {
    this.paramComponent = 1;

    return html`
      <button onClick=${(e)=>this.mostrarComponent()}>Registrarse</button>
    `
  }
}

customElements.define('my-element', MyElement);
