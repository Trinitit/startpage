### Startpage with date, time and random quote/greeting & picture, primarily inspired by the Blade Runner movie.
---
### Preview:

https://user-images.githubusercontent.com/76884934/145708548-cd4575b7-4f52-4689-a9f0-4a91a651dac3.mp4

### GoodToKnow
The images shown in the showcase are frames I found [here on reddit](https://www.reddit.com/r/bladerunner/comments/7fsvzl/i_took_some_screenshots_of_blade_runner_in_full/), although I compress them to reduce size.<br>
Simply place images in [../img/imgBox](../main/img/imgBox) and name them `boxImg_<1..n>.jpg`<br>
In [script.js](../main/script.js) modify the number of images within the folder in `setImg()`<br>
<br>
For quotes/greetings I chose quotes from Blade Runner and some other movies.<br>
They are stored in an Array within `setGreeting()`
<br>
Everytime the page is refreshed the image and the quote/greeting are randomly chosen.
<br>

### live preview of this template
https://trinitit.github.io/startpage/
