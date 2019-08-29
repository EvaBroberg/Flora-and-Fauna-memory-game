# Automated Testing

<h1>Code validation</h1>

<ul>
    <li><a href="https://validator.w3.org/" target="blank">W3C Markup Validation</a> was used to test HTML all the errors caught were fixed.</li>
    <li><a href="https://validator.w3.org/" target="blank">W3C CSS Validation</a>was used to test CSS all the errors caught were fixed.</li>
    <li><a href="https://validator.w3.org/" target="blank">Code Beautify JavaScript Validator</a>was used to test JavaScript all the errors caught were fixed.</li>
</ul>

# UX testing

<ul>
    <li>Game is easy to navigate and not overcrowded with unnecessary features allowing the user to know exactly what is expected from them in each step of the game.</li>
    <li>The game starts with a login form which requires user's input, which then can be submitted by either clicking the button below or by pressing Enter.</li>
    <li>As User enters the game, music starts playing and timer sets off. Timer and turn counter is placed just below the logo at the top of the screen in order to capture users attention</li>
    <li>User is able to switch off background music if they prefer a quiet mode</li>
    <li>Card flips produce a sound adding the realistic feel of card game</li>
    <li>Matching and non-matching cards produce sound to give the user a better sensation of the move being correct or wrong</li>
    <li>User is lead to a "New level" overlay before they start the next level, allowing them time to get ready for a next game</li>
    <li>In case of winning the game user is rewarded with a victory sound and is encouraged to play again by clicking a button.</li>
    <li>Flora and Fauna theme was used throughout the design, combining colors and images to create a sense of playful serenity, hoping to bring the user in a high end mature looking game, in order to fight the stress of the day and sense of being childish playing the game</li>
</ul>

# Manual Testing

Multiple manual tests were done, by myself and several volunteers to ensure the game's functionality and in order to detect any errors on different browsers and/or devices.

<ol>
    <li>Log-in page:
        <ul>
            <li>Checked if the content was hidden under log-in overlay and there was no scrolling page is covering 100% viewport height.</li>
            <li>Checked if the logo is centered horizontally across the page.</li>
            <li>Checked if the log-in form is centered horizontally across the page under the logo.</li>
            <li>Checked if button color changes once hovered over.</li>
            <li>Checked if information icon is placed in the top right corner and changes color once hovered over</li>
            <li>Checked if information window opens once "i" icon is pressed.</li>
            <li>Pressed "start game" button without entering a name to check if modal requiring name input appears</li>
            <li>Pressed on X on the top right corner of the modal to see if it disappears.</li>
            <li>Pressed anywhere within the modal to see if it disappears.</li>
            <li>Entered a name and pressed the "start game" button to check if I am being redirected to the first level.</li>
        </ul>
    </li>
    <li>Information page:
        <ul>
            <li>All content and images are displayed as expected on all devices.</li>
            <li>Button changes color once hovered over</li>
            <li>Pressed "Got it button" to make sure it leads me back to the login page.</li>
        </ul>
    </li>
    <li>1st level:
        <ul>
            <li>Checked that all the items are displayed as expected on all devices.</li>
            <li>Made sure background music starts playing as soon as the user enters the level.</li>
            <li>Hovered over sound icon on the top right corner to make sure it changes color.</li>
             <li>Clicked on the sound icon to make sure it changes to a crossed-out speaker and music stops</li>
            <li>Checked that the timer starts at the exact time a user enters the page and is starting counting down from 60.</li>
            <li>Checked that user's selected name is displayed on the screen with a "Good Luck" message.</li>
            <li>Hovered over footer to check that it expands and copyright and GitHub icon increases in size</li>
            <li>Hovered over GitHub icon to check if it changes color</li>
            <li>Clicked GitHub icon to make sure it opens a separate window with git-hub repository</li>
             <li>Clicked on the cards to make sure that the back of the cards shows up and flipping sound is activated.</li>
            <li>Matched two cards to make sure matching sound is activated and cards stay unflipped</li>
            <li>Clicked on the open cards to make sure nothing happens and they stay face-up.</li>
            <li>Tried to open a third card before the second one closed, to make sure the board was locked and these three cards would not be open at any time.</li>
            <li>Opened two not matching cards to make sure that no-match sound is activated and cards flip back.</li>
            <li>Checked that every time two cards are opened a turn count increases by 1.</li>
            <li>tried to exceed the number of turns to check if losing overlay and sound is activated.</li>
            <li>tried to wait for a countdown to reach 0 to check if losing overlay and sound is activated.</li>
            <li>While Losing overlay is displayed, hovered over the "Try Again" button to see that color changes.</li>
            <li>While Losing overlay is displayed, clicked "Try Again" button to see if it will lead me back to the Login page.</li>
            <li>Tried winning the game to check next level overlay is displayed</li>
            <li>Severed over the "Play" button to see if color changes</li>
            <li>Clicked the "Play" button to see if it leads me to next level</li>
        </ul>
    </li>
    <li>2nd level:
        <ul>
            <li>Checked that as soon as enter second level timer is reset and extra time is added now starting to count down from 100</li>
            <li>Disabled sound on the 1st level and checked that it staid muted in the second level too, or left it on and checked it still plays on the second level</li>
            <li>Did all the exact same testing as for level 1</li>
        </ul>
    </li>
    <li>Level 3:
        <ul>
            <li>Did exact same testing as for levels 1 and 2.</li>
            <li>Won the game to check that winning sound is activated and "You won" overlay appears</li>
            <li>hovered over "play again" button to see if color changes.</li>
            <li>clicked "play again" button to see if it will lead me back to the login page.</li>
        </ul>
    </li>
</ol>





 












 

   







