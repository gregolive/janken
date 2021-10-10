# Janken

Learn how to play rock paper scissors in Japanese with this game of Janken (じゃんけん).

[Live demo](https://gregolive.github.io/janken/) 👈

## Functionality

- Play against the computer player by clicking on the rock, paper, or scissors buttons. The computer's move is highlighted by a red border and the player's by a blue border.
- Score is displayed below alongside a reset button that resets the scores.
- Above the buttons Japanese text is displayed to teach how Janken is started in the native language (alongside romanized prononcation).
- On a tie, the border of the selected move is split between the player's blue and the computer's red. The text above also changed to what is said in Japanese when a tie occurs.
- [Button illustrations](https://www.irasutoya.com/2013/07/blog-post_5608.html) by illustrator Takashi Mifune.

## Reflection

I struggled at first with wrapping my head around event listeners in Javascript, especially when adding the same event listener to a group of buttons. Adding Array.from and utlizing the e arrow function was the eventual solution following some serious reading about event listeners and query selectors. This process really helped me undestand these concepts and the time spent now will be worth it later on.

The first iteration of this project included more explanation of the importance of Janken in Japan, however this cluttered the page and negativlty impacted useability. There are definitely more optimizations to be made on the JS and HTML, especially when it comes to the romainzed pronunciations and Japanese text. In order to center the pronunciations over the accompanying word I made individual object for each, but when it came time to change the text during a tie, the number of objects changed. I look forward to learning a better way to handle this in the future, as for now I brute forced it by setting the leftover HTML tags to an empty string.

-Greg Olive