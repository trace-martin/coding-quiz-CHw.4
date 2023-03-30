# Code-Quiz-CHw.4

## Deployed

A deployed page can be found [here](https://trace-martin.github.io/coding-quiz-CHw.4/)!

## User Instructions
**First:** When you click "Lets Go".
- The quiz will begin.
- Timer will start (120 seconds)

 **Next:** The questions will be presented.
- When the user answers a correct answer, they will be awarded +5 points and shown a "that is correct" at the bottom of the page.
- When the user answers incorrectly. They will lose 20 seconds from their total timer and be given a prompt at the bottom of the screen, displaying: the is incorrect and informing them of the correct answer.
<br><br>

**Then:** When the timer hits 0 seconds or all questions have been answerd the game will be over and user directed to the submit score form.
- User can save name/score to local storage and view highscore page.
<br><br>

**Finally:** After submitting the user name (if left blank an alert will pop), they will be directed to the Highscore section.

- User can clear highscore with button
- User can return to first section (Lets Go!) and retake quiz. 
<br><br>

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
<br>

## Preview
![image](https://user-images.githubusercontent.com/123417800/226799060-17ec83b7-889e-478d-bbc7-95f91b00afd4.png)
<br>
![image](https://user-images.githubusercontent.com/123417800/226799278-308e6eca-3ac2-40d2-b1b5-76ddf4bfbc52.png)
<br>
![image](https://user-images.githubusercontent.com/123417800/226799366-bf1ff79d-0ab5-499d-8052-9c6d3341f12d.png)
<br>
![image](https://user-images.githubusercontent.com/123417800/226799421-353a3372-712d-47dc-8676-db47619ca34f.png)
<br>
![image](https://user-images.githubusercontent.com/123417800/226799460-6870703f-1da5-4539-b6e6-b544daa16487.png)
<br><br>

# Known Issue:
When user "clears score". <br>
They must reload the page for any following scores to be shown.<br>
Issue w/ get savedPlayerScores(javaS) after clear (I believe).

# Author
Trace Martin

# Code Guide
[Mei Tu](https://github.com/mmeii)
<br>
[JQuery](https://jqueryui.com/)
<br>
[Bootstrap](https://getbootstrap.com/)
