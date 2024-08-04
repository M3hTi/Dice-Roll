const buttonElement = document.querySelector('.btn')
// console.dir(buttonElement)
const imgElement = document.querySelector('.js-img')
// console.dir(imgElement)


const shakeDice = function () {
        // Add shake class to start animation
        imgElement.classList.add('shake');
    
        // Generate random number between 1 and 6
        const dice = Math.floor(Math.random() * 6) + 1;
        
        // Set a timeout to change the image and remove the shake class
        setTimeout(() => {
            imgElement.src = `images/${dice}.png`;
            imgElement.classList.remove('shake');
        }, 500); // 500ms matches the duration of our shake animation
}














buttonElement.addEventListener('click', shakeDice)