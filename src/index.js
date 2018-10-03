document.addEventListener('DOMContentLoaded', () => {
  const bar = $('#progress-bar')
  const percent = $('#progress-percent')

  animate(() => {
    const progress = 100 * yearProgress()
    bar.style.setProperty('width', `${progress}%`)
    percent.innerText = progress.toFixed(20)
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
