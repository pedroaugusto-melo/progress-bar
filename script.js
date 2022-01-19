const progressBar = document.querySelector('.progress');
const progressNum = document.querySelector('.percentage');

function loadBar() {
    progressBar.style.width = '1%';

    const intervalId = setInterval(() => {
        progressBar.style.width = `calc(${progressBar.style.width} + 1%)`;
        progressNum.innerHTML = `${progressBar.style.width.slice(
                                    5, progressBar.style.width.length - 1)
                                 }
                                `;
    }, 100);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 9900);

    setTimeout(() => {
        window.location.reload();
    }, 11000);
}

window.onload = loadBar;

