function toggleImage() {
    // Get the image element
    const img = document.getElementById('myImage');

    const header = document.getElementById('imageHeader');

    // Check the current image source and toggle it
    if (img.src.includes('happy.png')) {
        // If it's happy, change to sad
        img.src = 'sad.png';
        header.textContent = 'Here is sad image';
    } else {
        // If it's sad, change to happy
        img.src = 'happy.png';
        header.textContent = 'Here is happy image';
    }
}
let clickCount = 0;    // Keeps track of total clicks
let levelCount = 0;    // Keeps track of the current level
const cookieImages = ['cookie0.png', 'cookie1.png', 'cookie2.png', 'cookie3.png', 'cookie4.png']; // Array of cookie images

function cookieClicker() {
    // Increment the click counter
    clickCount++;
    const clickCountElement = document.getElementById('clickCount');
    const cookie = document.getElementById('cookiePng');
    const cookieLevelElement = document.getElementById('cookieLevel');

    // Update click counter display
    clickCountElement.textContent = `${clickCount}`;

    // Add the shrink effect for visual feedback
    cookie.classList.add('shrink');
    setTimeout(() => cookie.classList.remove('shrink'), 100);

    // Change the cookie image every 10 clicks
    if (clickCount % 10 === 0) {
        levelCount = (levelCount + 1) % cookieImages.length; // Cycle through images
        cookie.src = cookieImages[levelCount];
        cookieLevelElement.textContent = `Level ${levelCount + 1} cookie`;
    }

    // Win condition at 100 clicks
    if (clickCount > 99) {
        cookie.src = 'youWin.png';
        clickCountElement.textContent = `Congratulations!!!`;
        cookieLevelElement.textContent = `You reached the max level!`;
    }
}
