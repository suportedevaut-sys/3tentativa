const {teste} = require ("../models/Calculadora.js")

test("deve retornar uma soma !",()=>{
  const resultado = teste(2 , 3)
  expect(resultado).toBe(5)
  
})