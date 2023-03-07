import axios from "axios";

/**
 * Esse arquivo não é .tsx pois não é um componente.
 */

const api = axios.create({
  /**
   * O React native não deixa utilizar o 'localhost' com 'http'.
   * Então é preciso inserir o ip da maquina.
   * No Ubuntu é só utilizar o 'hostname -I' no cmd
   */
  //baseURL:'http://localhost:3333'
  baseURL: 'http://192.168.0.2:3333'
})

//Exporta a base url criada
export { api };