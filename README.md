# <a href="https://evabroberg.github.io/Flora-and-Fauna-memory-game/"><img style="width:50px;" src="imageAssets/logo.png"/></a>

# Flora and Fauna Memory Game
<div align="center"><a href="https://evabroberg.github.io/Flora-and-Fauna-memory-game/" target="blank">Check out the game</a><br>
	<a href="https://github.com/EvaBroberg/Flora-and-Fauna-memory-game" target="blank">Check out the code</a></div><br>


# Project Goals

Flora and Fauna is a memory game with a goal to entertain and visually appeal to the player, the game is targeted for anybody who wants a fun way to spend a short period of free time, suitable for children but designed for a grown-up user.  

<b>Players goals:</b>

<ul>
	<li>A Fun way to spend time</li>
	<li>Easy to understand and use</li>
	<li>Designed to match a theme therefore visually appealing</li>
</ul>

<h2>UX</h2>

<b>Why Flora and Fauna is awesome</b>

<ul>
	<li>The whole design was thought of and executed on adobe photoshop before programming</li>
	<li>Design is responsive allowing the user to play on any device</li>
	<li>Users name is displayed on the screen during the game</li>
	<li>Colour scheme, sounds, and imagery was carefully selected to fit the overall game theme</li>
	<li>Colour scheme was chosen to be neutral and calming, easy to look at and not provocative, stress-inducing</li>
</ul>

The game was created for people of any age that are looking for a fun way to spend a bit of free time and are looking for a game that would not only be entertaining but would also stimulate the brain. While game is kid-friendly and easy to understand and navigate, it's primary purpose was to appeal for a grown-up who needs to add some fun into their busy schedule.

The game was designed to be responsive, intuitive and easy to use on any devices. Sounds were added to card flips to make it obvious when the match is made or card combination was wrong. Background sound was added in order to make the game environment more engaging and stimulating, but the player that prefers soundless game can easily disable the sound by clicking a speaker button which is displayed in the obvious place at the top of the screen and is easily recognizable as a tool for sound control.

The game consists of three levels which are increasing in complexity by adding extra cards. Each level has flora and fauna theme separated by category: 1st level is Sea-creatures sub-category, 2nd level bugs/insects and third plants/flowers. Categories were split rather than mixed to increase the player's interest in the game, when looking forward to what awaits on the next level.

Once level is passed, pop up identifying the beginning of next level appears making it easy to follow the progress in the game. If a player has run out of given time or used up a given amount of turns game over screen appears, a big and obvious button with the text "Try Again" is displayed encouraging a player to start over. Once the game is won victory music is being played and "Congratulations" overlay fills the screen. Big button with words "Play again" appears similarly like in the "game over" state.

<h2>User stories</h2>

<ul>
	<li>As a person with a long commute to work I want something fun and engaging to make time go faster, I, however, prefer something that is eye-appealing and design not for children, so I don't feel embarrassed if somebody on the bus is looking at my screen</li>
	<li>As a student, I sometimes need to take a break from books and do something studies-unrelated to get my mind off things and give myself a break. A short game does it, I do enjoy a brain-stimulating games though, in order to beat the guilt of wasting time</li>
	<li>As a person who doesn't like wasting time, I need an activity while I'm in the waiting rooms for appointments or in the queue in the shop, a game that is easy enough yet with a little challenge makes time go faster</li>
</ul>

<h2>Raugh wireframe mockups</h2>

<ul>
	<li><a href="wireframes/login.jpg" target="_blank">Log-in page</a></li>
	<li><a href="wireframes/1.jpg" target="_blank">First Level</a></li>
	<li><a href="wireframes/2.jpg" target="_blank">Second Level</a></li>
	<li><a href="wireframes/3.jpg" target="_blank">Third Level</a></li>
	<li><a href="wireframes/rules.jpg" target="_blank">Lost Page</a></li>
	<li><a href="wireframes/win.jpg" target="_blank">Win Page</a></li>
</ul>

<h2>Final Wireframe mockups</h2>

<ul>
	<li><a href="wireframes/Complete design/login.jpg" target="_blank">Log-in page</a></li>
	<li><a href="wireframes/Complete design/1.jpg" target="_blank">First Level</a></li>
	<li><a href="wireframes/Complete design/2.jpg" target="_blank">Second Level</a></li>
	<li><a href="wireframes/Complete design/3.jpg" target="_blank">Third Level</a></li>
	<li><a href="wireframes/Complete design/back.jpg" target="_blank">Closed card board</a></li>
	<li><a href="wireframes/Complete design/nextLevel.jpg" target="_blank">Next Level</a></li>
	<li><a href="wireframes/Complete design/lose.jpg" target="_blank">Losing</a></li>
	<li><a href="wireframes/Complete design/win.jpg" target="_blank">Winning</a></li>
</ul>



<h2>Features</h2>

The game environment is fully responsive allowing the user to play on any devices, desktop version fits all the visual information on the screen without scrolling allowing the user to see and engage with all the game features. For mobile view 1st level cards are displayed in pairs rather than in threes in attempt to keep card size larger and avoid unnecessary white space at the bottom of the screen, as the number of cards increases cards get smaller attempting to allow as many rows as needed to try and keep all the cards visible without scrolling.

i- icon for game instructions is added to the login page allowing the user to familiarise with a game.

All levels of the game share same design theme (the same header displaying the logo in the middle timer on the top left corner, flip count on the top right corner and a good luck message including their chosen name under the header). And a sound icon on the top right corner allowing uset to decide whether they want sound effects or not. The only thing changing as the game progresses is the number of cards displayed and the theme of the cards which is divided into three categories. Log in page was created to go with an overall design using an overlay of the same color as the dominant color of the game background, same fonts and logo are also displayed. All the overlay displays such as: "You won", "game over", "next level" share the exact same style and identical buttons to provide consistency.

<h2>Log-in Page</h2>

Log in page is immediately displayed once user access game, it overlays all the content displaying the large logo and requiring an input of the chosen name. If the name hasn't been entered modal pops up alerting that name must be provided. at the top right corner of the log-in page (top middle for mobile devices) user can navigate to "i" or "speaker" icons and read game rules as well as to disable sound effects. Once the user has familiarised themselves with game rules, amended sound options and chosen a name they then press the button to start the game (it is also possible to access the game by pressing enter, in order to provide convenience).  

<h2>First Level</h2>

As soon as the user enters the game "Good luck 'User's chosen name" is displayed on the screen and timer starts a count down from 60 and a game background music starts playing (unless the user had previously disabled it). The player flips the first card (every flip of the card has a sound effect), the player flips a second card, on the top right flip count increases by 1. If the match is made the user hears a matching sound and cards stay face up if cards didn't match no-match sound activated and cards flip back. Users get to try until they either ran out of given time or exceeded a given amount of flips per game. If the game was lost, losing sound activates and overlay announcing lost game appears covering all content. Under the "Sorry, you have lost" a big button with the text "Try again" is displayed allowing the user to reset the game. Every time user starts a new game card are reshuffled and their position changes. If a player has matched all the cards in the time given and not exceeded the number of flips provided overlay next level appears. Its functionality works similarly to the game over overlay as it displays text and the button, the only difference being that the button will lead to a second level rather than restarting the game. 

<h2>Second Level</h2>

Once the user had clicked "Start next level button" all same features as level one are activated, background music, timer and the flip count starts working. More cards are added to the board and the rest of the game is identical to the first level. 

<h2>Third Level</h2>

Exactly same as 1st and 2nd levels except even more cards are added to the board and if all cards were matched this time the game is won. "Congratulations You Won" overlay appears and victory sound is played. This overlay has the same functionality as game over displaying text and a button to "Play again", only the messaging changes.  

<h2>Existing features</h2>

<ul>
	<li>Log in page consists of a form and a submit button allowing the player to choose the name before the game starts, which is later displayed on the screen</li>
	<li>information and sound icons are provided that grows and changes color when hovered over, allowing the user to amend sound effects and read game rules before the game starts</li>
	<li>Timer and the flip count is provided throughout all levels of the game, sharing style and functionality</li>
	<li>Users name with "good luck message" is displayed throughout all levels of the game</li>
	<li>Set of interactive cards that shares same style properties (increasing in number by level) is provided throughout the game</li>
	<li>"Next Level", "Game over" and "You won" overlays are activated on each level also consisting of the button encouraging user to restart a game or progress to the next level</li>
	<li>The same footer is used throughout the game indicating copyright with a year of game creation and a GitHub icon which grows and changes color when hovered over and on the click leads a user to a GitHub repository where they are able to check out the code behind the game</li>
</ul>

<h4>Features to improve or create</h4>

<ul>
	<li>Create a registration form so that user can log in and continue their game where they left off (need to advance in JS)</li>
	<li>Amend that once user restarts the game they don't have to log in again, their name continues being displayed on the screen(need to advance in JS)</li>
	<li>Add more levels</li>
	<li>Add the grading system, that remembers users best score at the shortest time and least amount of flips, therefore, it can track personal record and announce when results were improved (need to advance in JS)</li>
	<li>Add a CSS animation for when the game is won (need to advance in CSS)</li>
</ul>

<h4>Technologies used</h4>

<ul>
	<li>Adobe Photoshop was used to create frameworks, cards, logos and icons</li>
	<li>Game was built using HTML, CSS, vanilla JavaScript and JQueries</li>
	<li>Code editor Visual Studio Code was used as a development environment</li>
	<li>Google Fonts were used with text styling purposes</li>
</ul>

<h2>Testing</h2>

Testing information can be found in separate <a href="testing.md">testing.md file</a>

<h2>Deployment</h2>

This project was developed using the Visual Studio Code IDE, committed to git and pushed to GitHub using Git open source version control system which I have installed to my computer.

Take the following actions in order to view a deployed version of the page:

<ol>
	<li>Log in to GitHub.</li>
	<li>Select <b>EvaBroberg/Flora and Fauna</b> from the list of repositories.</li>
	<li>Select <b>Settings</b> from the navbar near the top of the page.</li>
	<li>Scroll down to the GitHub Pages section.</li>
	<li>Under Source click the drop-down menu labeled None and select Master Branch. The page is automatically refreshed and the website is deployed.</li>
</ol>


Take following actions in order to run this project locally:

<ol>
	<li>Follow this link to the <a href="https://github.com/EvaBroberg/Flora-and-Fauna-memory-game">GitHub repository</a></li>
	<li>Under the repository name, click a green button that says "Clone or download"</li>
	<li>Copy the clone URL (make sure you have selected clone with HTTP section)</li>
	<li>In your local workspace open Git Bash</li>
	<li>Make sure you are inside of the directory where you want the cloned directory to be located.</li>
	<li>Type git clone and paste the URL copied from GitHub like so:

	<pre><span class="pl-c1">git clone https://github.com/USERNAME/REPOSITORY</span></pre>
</li>
</ol>


<h2>Credits</h2>

<h4>Content</h4>

<ul>
	<li>Game was designed, built and executed by Ieva Broberg.</li>
</ul>

<h4>Media</h4>

<ul>
	<li>Images used for cards and logo were taken fron free source vintage botanical imagery collection at <a href="https://www.flickr.com/photos/biodivlibrary/albums/">Flickr</a></li>
	<li>Sounds for the game were taken from a <a href="https://freesound.org/"></a>free sound library</li>
</ul>

<h4>Code</h4>

<h2>In preparation for the game development these educational videos were watched: </h2>
<ul>
	<li><a href="https://www.youtube.com/watch?v=3uuQ3g92oPQ"></a>1</li>
	<li><a href="https://www.youtube.com/watch?v=mbgbdM8Flg4"></a>2</li>
	<li><a href="https://www.youtube.com/watch?v=XH49scrvSjg&t=464s">3</a></li>
	<li><a href="https://www.youtube.com/watch?v=W3eJWpvIl0g&t=399s">4</a></li>
	<li><a href="https://www.youtube.com/watch?v=MLtAMg9_Svw&t=354s">5</a></li>
</ul>

<h2>To get better understanging of JS these external resources were used</h2>
<ul>
	<li><a href="https://www.udemy.com/modern-javascript-from-novice-to-ninja/">1</a></li>
	<li><a href="https://www.udemy.com/advanced-javascript-concepts/">2</a></li>
	<li><a href="https://github.com/getify/You-Dont-Know-JS"></a>3</li>
</ul>

<h2>Acknowledgements</h2>

<ul>
	<li>Codebar.io coders meet-up group for supporting me on my progress in JS and general advice</li>
	<li>FreeCodeCamp developers meet-up group for feedback on my work</li>
	<li>Mentors and fellow students on slack for help around the clock regarding any coding issue</li>
	<li>Super Thanks to Spencer Barriball for being available whenever I got stuck and needed advice.</li>
</ul>


<h2>Disclaimer</h2>

The game was created for educational purposes only and is not available for profit. I do not hold copy rights of imagery or sound effects.  
