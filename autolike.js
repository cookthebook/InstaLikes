function clickFirstLike() {
  var targetButton = document.getElementsByClassName('coreSpriteHeartOpen')[0];
  console.log('Clicking this button:');
  console.log(targetButton);
  targetButton.click();
}

console.log('InstaLikes is active');
setTimeout(clickFirstLike, 5*1000);
