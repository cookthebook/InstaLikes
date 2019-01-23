# InstaLikes
  InstaLikes is a Instagram like bot/browser extension. It is for purely educational purposes. I do not condone it's use.

  Note: Only test in Firefox.

## Usage
  If you do not have git installed, just download the zip file in the `Clone or Download` popup menu above and extract the zip somewhere you can find it.

  Go to `about:debugging` in your FireFox browser, check `Enable add-on debugging`, and `Load Temporary Add-on`. Navigate to your extracted extension and select `manifest.json`. Now, upon going to [Instagram](http://instagram.com), the extension will start automatically liking the first post it can, then reloading.
  
  The like/reload frequency is set to an average of 90 like an hour, but the time between likes is randomly decided. Think every 40 +/- 5 seconds.

  To disable the extension, go to `about:addons` and `Disable` InstaLikes.

## TODO
  - Settings page to set like rate and randomness level
  - Popup menu to easily enable/disable the auto-liking
