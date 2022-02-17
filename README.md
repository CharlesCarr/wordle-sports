# Wordle Sports Web App

A sports themed Wordle web app clone built with HTML, CSS3, and Vanilla JavaScript

## Project Description

After seeing many other developers building Wordle clones, I decided to build my own and take it a step further with introducing the sports theme by having the word bank be only team names from the four major US sports leagues (NFL, MLB, NBA, NHL). 

Areas of focus for this project include: 
- Traversing the DOM with Vanilla JavaScript to create page elements
- Array Manipulation using different array methods for game logic (push, pop, slice, includes)
- Styling with Bootstrap 5 as well as custom CSS style sheets (using both CSS Grid and Flexbox)

## How To Play

The rules of Wordle Sports are very similar to the original Wordle game with a few changes. The first major change is that the word bank is limited to the team names from all four major professional sports leagues in the US (NFL, NBA, MLB, NHL). Guesses can also only be from this word bank (a total of 50+ team names). Due to the different approach and strategy of this game there are only 5 rounds of guesses. 

In an effort to increase the size of the word bank for Wordle Sports the game is played with words of 6 letters (instead of 5). Another way that I nearly doubled the possible word bank was by including both singular and plural versions of team names, dependent on the team name fitting to 6 letters. For example, 'Bulldog' vs. 'Bulldogs' (if one had a total of 6 letters it would be the included version).

After realizing how difficult this game was I added one image collage of each league's teams logos so the user has reference to make guessing easier.

### Next Steps 

There are a few bugs that I am aware of and may go back and fix sometime soon. (Not really a bug but a thing to note differing from the original game - when there are multiple of the same letter guesses and one of the letters is in the correct position the other letters will be yellow signalling they are correct guesses but in the wrong position. This does not mean that they are necessarily in the word and that letter that was in the correct position is what is causing the app to think that - the second letters are then yellow and not gray as the original Wordle would display.) The second is a bug where if you backspace too many times you can start erasing the previous guessed word and it will break the game - my friends and I who have played this many times have not run into this more than once but something to be aware of.

### Hosting

Hosted with GitHub Pages

Link: [Wordle Sports Web App](https://charlescarr.github.io/wordle-sports/wordle-sports/index.html)

#### Disclaimer

This is a personal project for fun and to practice web development skills. I do not have a goal of using the Wordle name or game idea for a live application to profit in anyway.