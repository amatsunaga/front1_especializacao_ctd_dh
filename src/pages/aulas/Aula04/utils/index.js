/**
 * Função que recebe o ano de nascimento de um usuário e retorna sua idade
 * @author Andrea Mizuno Matsunaga
 * @param {number} ano
 * @returns {number}
 */

import axios from "axios";

export function calculaIdade(ano) {
  const ATUAL_YEAR = 2023;
  return ATUAL_YEAR - ano;
}

/**
 * Função que recebe uma lista de números e retorna apenas os números pares
 * @param {Array<number>} numeros
 * @returns {Array<number>}
 */

export function filtraNumerosPares(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}


/**
 * Função que busca no servidor as infos de um produto
 * @param {number} id 
 * @returns {Promise<{id: number, title: string, description: string}>}
 */
export async function getProduct(id) {
    return await axios.get(`https://dummyjson.com/products/${id}`);
}