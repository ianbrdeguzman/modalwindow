/*
add event listener to learn more button
*/
document.getElementById('learn-more')
    .addEventListener('click', () => {
        document.querySelector('.modal')
            .classList.toggle('modal-active');
    });

/*
add event listener to modal x button
*/
document.querySelector('#close-modal')
    .addEventListener('click', () => {
        document.querySelector('.modal')
            .classList.toggle('modal-active');
    });
   
/*
add event listener to about modal
*/
document.querySelector('#about')
    .addEventListener('click', () => {
        document.querySelector('.about')
            .classList.toggle('about-active');
    });

/*
add event listener to about x button
*/
document.querySelector('#close-about')
    .addEventListener('click', () => {
        document.querySelector('.about')
            .classList.toggle('about-active');
    });

/*
add event listener to submit button
*/
document.querySelector('form')
    .addEventListener('submit', () => {

        // change text when submitted
        document.getElementById('text')
            .textContent = 'Thank you for submitting';

        // hides form input when submitted
        document.querySelector('form')
            .style.display = 'none';
    });