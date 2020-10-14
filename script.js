const hello = () => {
  console.log('Hello CodeRoad!!!')
}

const init = () => {
  hello()
}

init()

setTimeout(() => {
  console.log('Hello CodeRoad!!!')
}, 500)

console.time()
for (let i = 0; i <= 500000000; i++) {
  if (i === 2500000000) console.log(i)
}
console.timeEnd()

document
  .querySelector('button')
  .addEventListener(
    'click',
    () => console.log('CLICK')
  )