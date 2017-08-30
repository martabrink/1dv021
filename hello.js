/**
 * Hello module.
 *
 * @module src/hello
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the classic phrase 'Hello, World!'.
 *
 * @returns {string} The greeting 'Hello, World!'.
 */
function sayHello () {
  let greeting = 'Hello, World!'

  return greeting
}
let message = sayHello()
console.log(message)

exports.sayHello = sayHello
