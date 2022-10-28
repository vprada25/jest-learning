const text = 'Hello World';


test('Debe contener un texto', () => {
  expect(text).toMatch(/World/)
})