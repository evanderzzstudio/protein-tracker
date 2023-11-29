const smallBowls = document.querySelectorAll('.bowl-small')
const grams = document.getElementById('gram')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigBowl()

smallBowls.forEach((bowl, idx) => {
    bowl.addEventListener('click', () => highlightBowls(idx))
})

function highlightBowls(idx) {
    if (idx === 7 && smallBowls[idx].classList.contains("full")) idx--;
    else if (smallBowls[idx].classList.contains('full') && !smallBowls[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallBowls.forEach((bowl, idx2) => {
        if (idx2 <= idx) {
            bowl.classList.add('full')
        } else {
            bowl.classList.remove('full')
        }
    })

    updateBigBowl()
}

function updateBigBowl() {
    const fullBowls = document.querySelectorAll('.bowl-small.full').length
    const totalBowls = smallBowls.length

    if (fullBowls === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullBowls / totalBowls * 330}px`
        percentage.innerText = `${fullBowls / totalBowls * 100}%`
    }

    if (fullBowls === totalBowls) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullBowls / 1000)}gram`
    }
}
