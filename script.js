'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own 😉
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path
// 2. When the image is done loading,append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error' event), reject the promise
// 3. If this part is too tricky for you,just watch the first part of the solution
// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed,hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element returned by the 'createImage' promise to hide the current image. You will need a global variable for that 😉)
// 7. After the second image has loaded,pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab, otherwise images load too fast

// const newImg = document.createElement('img');
// const imgContainer = document.querySelector('.images');
// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// const createImage = function (imgPath) {
//     return new Promise(function (resolve, reject) {
//         newImg.src = `./img/${imgPath}`;
//         newImg.addEventListener('load', function () {
//             // newImg.classList.add('images');
//             newImg.style.display = 'block';
//             imgContainer.append(newImg);
//             resolve(newImg);
//         })
//         newImg.addEventListener('error', function () {
//             reject(new Error('Image not found 😟'));
//         })
//     })
// }

// createImage('img-1.jpg').then(newImg => {
//     console.log('Image 1 loaded');
//     return wait(2)
// }).then(() => {
//     newImg.style.display = 'none';
//     return createImage('img-2.jpg')
// }).then(newImg => {
//     console.log('Image 2 loaded');
//     return wait(2)
// }).then(() => newImg.style.display = 'none')
//     .catch(err => console.log(err));


//Jonas sc 16 challenge 3
//     PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge#2, this time using async/await (only the part where the promise is consumed, reuse the 'createImage' function from before)
// 2. Compare the two versions,think about the big differences, and see which one you like more
// 3. Don't forget to test the error handler, and to set the network speed to“Fast3G” in the dev tools Network tab
// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img- 3.jpg']. To test, turn off the 'loadNPause' function

const newImg = document.createElement('img');
const imgContainer = document.querySelector('.images');
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        newImg.src = `./img/${imgPath}`;
        newImg.addEventListener('load', function () {
            // newImg.classList.add('images');
            newImg.style.display = 'block';
            imgContainer.append(newImg);
            resolve(newImg);
        })
        newImg.addEventListener('error', function () {
            reject(new Error('Image not found 😟'));
        })
    })
}

createImage('img-1.jpg').then(newImg => {
    console.log('Image 1 loaded');
    return wait(2)
}).then(() => {
    newImg.style.display = 'none';
    return createImage('img-2.jpg')
}).then(newImg => {
    console.log('Image 2 loaded');
    return wait(2)
}).then(() => newImg.style.display = 'none')
    .catch(err => console.log(err));