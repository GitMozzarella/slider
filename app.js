const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')

const mainSlide = document.querySelector('.main-slide')
mainSlide.querySelectorAll('div')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

document.addEventListener('keydown', event => {
	if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
		changeSlide('up')
	} else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
		changeSlide('down')
	}
})

upBtn.addEventListener('click', () => {
	changeSlide('up')
})
downBtn.addEventListener('click', () => {
	changeSlide('down')
})

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
		}
	} else if (direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
	}
	const height = container.clientHeight

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
