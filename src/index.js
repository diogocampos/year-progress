document.addEventListener('DOMContentLoaded', () => {
  const title = $('#title')
  const bar = $('#progress-bar')
  const percentage = $('#progress-percentage')

  setInterval(() => {
    title.innerText = new Date().getFullYear()
  }, 1000)

  setInterval(() => {
    const progress = 100 * yearProgress()
    bar.style.setProperty('width', `${progress}%`)
    percentage.innerText = progress.toFixed(10)
  }, 1000 / 30)
})

const $ = (selector) => document.querySelector(selector)

function yearProgress() {
  const year = new Date().getFullYear()
  const start = new Date(`${year}`)
  const end = new Date(`${year + 1}`)
  return (Date.now() - start) / (end - start)
}
