const text = 'Hello World'
const fruits = ['apple', 'banana', 'orange']
const reverseString = (str) => str.split('').reverse().join('')
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'))
    }
    resolve(str.split('').reverse().join(''))
  })
}

test('Debe contener un texto', () => {
  expect(text).toMatch(/World/)
})

test('¿Tiene una banana?', () => {
  expect(fruits).toContain('banana')
})

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9)
})

test('True', () => {
  expect(true).toBeTruthy()
})

test('Reverse String', () => {
  expect(reverseString('Hello')).toBe('olleH')
})

test('Reverse String 2 resolve', () => {
  expect(reverseString2('Hello')).resolves.toBe('olleH')
})

test('Reverse String 2 rechazada', () => {
  expect(reverseString2()).rejects.toThrowError('Error')
})

test('Probar async/await', async () => {
  const string = await reverseString2('Hello')
  expect(string).toBe('olleH')
})

afterEach(() => console.log('Despues de cada prueba'))
afterAll(() => console.log('Despues de todas las pruebas'))

beforeEach(() => console.log('Antes de cada prueba'))
beforeAll(() => console.log('Antes de todas las pruebas'))
