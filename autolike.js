// click the target'th post, or if already liked the first one after that post
// if all posts have been liked, do nothing and reload
function clickLike(target = 0) {
  console.log('Attempting to like post ' + target.toString());
  if (target >= document.getElementsByClassName('coreSpriteHeartOpen').length) {
    console.log('All available posts liked, reloading');
    location.reload(true);
  }

  var targetButton = document.getElementsByClassName('coreSpriteHeartOpen')[target];

  if (targetButton.children[0].getAttribute('aria-label') === 'Like') {
    console.log('Clicking this button:');
    console.log(targetButton);
    targetButton.click();
    location.reload(true);
  } else {
    clickLike(target + 1);
  }
}

// Get appropriate timeout value in ms
function getTimeoutValue(likesPerHour = 90) {
  randomDiff = Math.random() * 5000 - 2500;
  baseLine = 1 / likesPerHour * 60 * 60 * 1000;
  return baseLine + randomDiff;
}

console.log('InstaLikes is active');
var likeTimeout = getTimeoutValue();
console.log('Waiting ' + likeTimeout.toString() + ' ms');
setTimeout(clickLike, likeTimeout, 0);
