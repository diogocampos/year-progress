document.addEventListener('DOMContentLoaded', () => {
  const bar = $('#progress-bar')
  const percentage = $('#progress-percentage')

  animate(() => {
    const progress = 100 * yearProgress()
    bar.style.setProperty('width', `${progress}%`)
    percentage.innerText = progress.toFixed(10)
  })
})

const $ = selector => document.querySelector(selector)

function animate(callback) {
  let request = requestAnimationFrame(frame)
  function frame(timestamp) {
    request = requestAnimationFrame(frame)
    callback(timestamp)
  }
  return () => cancelAnimationFrame(request)
}

function yearProgress() {
  const year = new Date().getFullYear()
  const start = new Date(`${year}`)
  const end = new Date(`${year + 1}`)
  return (Date.now() - start) / (end - start)
}
