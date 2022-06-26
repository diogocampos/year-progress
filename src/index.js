const UPDATES_PER_SECOND = 30

document.addEventListener('DOMContentLoaded', () => {
  const $title = $('#title')
  const $bar = $('#progress-bar')
  const $percentage = $('#progress-percentage')

  setInterval(() => {
    const { year, percentage } = getYearProgress()
    $title.innerText = year
    $bar.style.setProperty('width', `${percentage}%`)
    $percentage.innerText = percentage.toFixed(10)
  }, 1000 / UPDATES_PER_SECOND)
})

// Helpers

const $ = (selector) => document.querySelector(selector)

function getYearProgress() {
  const year = new Date().getFullYear()
  const start = new Date(`${year}`)
  const end = new Date(`${year + 1}`)
  const percentage = 100 * ((Date.now() - start) / (end - start))
  return { year, percentage }
}
