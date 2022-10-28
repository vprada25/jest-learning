const cities = [
  'bogota',
  'buenos aires',
  'caracas',
  'Barranquilla',
  'madrid',
  'lisboa',
  'santiago',
  'brasilia',
  'quito',
  'rio de janeiro',
]

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)]
  return string
}

module.exports = randomString
