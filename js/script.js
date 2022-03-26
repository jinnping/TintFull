import './css/style.css';
import '.innerHTML';
//NAV BAR



//END NAV BAR

/*================================================
Start Important Part
==================================================*/

// VARIABLES
const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

// HELPER FUNCTIONS


// // 1. Get random number in range. Used to get random index from array.
// const randNumInRange = max => Math.floor(Math.random() * (max - 1));

// // 2. Merge two separate array values at the same index to 
// // be the same value in new array.
// const mergeArrays = (arrOne, arrTwo) => arrOne
//     .map((item, i) => `${item} ${arrTwo[i]}`)
//     .join(', ');

// // 3. Curried function to add a background to array of elms
// const addBackground = (elms) => (color) => {
//     elms.forEach(el => {
//         el.style.backgroundImage = color;
//     });
// }


// 4. Function to get data from API
const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}

// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant
const addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
const applyGradient = async (url, callback) => {
  const data = await getData(url);
  const gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
}

// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);




// video

// Get the video
var video = document.getElementById("myVideo");
var video1 = document.getElementById("myVideo1");


// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video1.paused) {
    video1.play();
    btn.innerHTML = "Pause";
  } else {
    video1.pause();
    btn.innerHTML = "Play";
  }
}

$('video').each(function () {
  if ($(this).is(":in-viewport")) {
    $(this)[0].play();
  } else {
    $(this)[0].pause();
  }
}); $('video').each(function () {
  if ($(this).is(":in-viewport")) {
    $(this)[0].play();
  } else {
    $(this)[0].pause();
  }
})

$('video1').each(function () {
  if ($(this).is(":in-viewport")) {
    $(this)[0].play();
  } else {
    $(this)[0].pause();
  }
}); $('video1').each(function () {
  if ($(this).is(":in-viewport")) {
    $(this)[0].play();
  } else {
    $(this)[0].pause();
  }
})

$(window).scroll(function () {
  $('video').each(function () {
    if ($(this).visible(true)) {
      $(this)[0].play();
    } else {
      $(this)[0].pause();
    }
  })
});

$(window).scroll(function () {
  $('video1').each(function () {
    if ($(this).visible(true)) {
      $(this)[0].play();
    } else {
      $(this)[0].pause();
    }
  })
});

$video.each(function () {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

$video1.each(function () {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function () {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $video.each(function () {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });
  // Kick off one resize to fix all videos on page load
}).resize();

$(window).resize(function () {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $video1.each(function () {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });
  // Kick off one resize to fix all videos on page load
}).resize();





// rwd

var meta = document.createElement('meta');
var w = screen.width;
if (w > 640) {
  meta.setAttribute("name", "viewport");
  meta.setAttribute("content", "width=960");
}
else {
  meta.setAttribute("name", "viewport");
  meta.setAttribute("content", "width=device-width initial-scale=1");
}

var s = document.getElementsByTagName('head')[0].children; s[s.length - 1].parentNode.insertBefore(meta, s[s.length - 1]);