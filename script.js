// const hello = () => {
//   console.log('Hello CodeRoad!!!')
// }

// const init = () => {
//   hello()
// }

// init()

// setTimeout(() => {
//   console.log('Hello CodeRoad!!!')
// }, 500)

// console.time()
// for (let i = 0; i <= 500000000; i++) {
//   if (i === 2500000000) console.log(i)
// }
// console.timeEnd()

// document
//   .querySelector('button')
//   .addEventListener(
//     'click',
//     () => console.log('CLICK')
//   )

setTimeout(
  () => console.log('4. timeout'),
  0
)

const promise = Promise.resolve()
  .then(() => console.log('-1. promise'))
  .then(() => console.log('0. promise'))
  .then(() => console.log('1. promise'))

console.log('2. promise object', promise)

console.log('3. sync')
