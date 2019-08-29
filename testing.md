# Automated Testing

<h1>Code validation</h1>

<ul>
    <li><a href="https://validator.w3.org/" target="blank">W3C Markup Validation</a> was used to test HTML all the errors caught were fixed.</li>
    <li><a href="https://validator.w3.org/" target="blank">W3C CSS Validation</a>was used to test CSS all the errors caught were fixed.</li>
    <li><li><a href="https://validator.w3.org/" target="blank">Code Beautify JavaScript Validator</a>was used to test JavaScript all the errors caught were fixed.</li>
</ul>

# UX testing

<ul>
    <li>Game is easy to navigate and not over crowded with unnecessary features allowin user to know exactly what is expected from the in each ste of the game.</li>
    <li>Game starts with a login form which requires user's input, which then can be submitted by either clicking the button below or by pressing Enter.</li>
    <li>As User enters game, music starts playing and timer sets off. Timer and turn counter are placed just below the logo at the top of the screen in order to capture users attention</li>
    <li>User is able to swithc off background music if they prefer a quiete mode</li>
    <li>Card flips produce a sound adding realistic feel of card game</li>
    <li>Matching and non-matching crds produce sound to give user a better sensation of move being correct or wrong</li>
    <li>User is lead to a "New level" overlay before they start next level, allowing them time to get ready for a next game</li>
    <li>In case of winning the game user is revarded with a victory sound and is encouraged to play again by clicking a button.</li>
    <li>Flora and Faunta theme was used throughout the design, combining colours and imges to create a sense of playful serenity, hoping to bring user in a high end mature looking game, in order to fight stress of the day and sense of being childish playing the game</li>
</ul>

# Manual Testing

Multiple manual tests were done, by myself and several volunteers to ensure game's functionality and in order to detect any errors on different browsers and/or devices.

<ol>
    <li>Log-in page:
        <ul>
            <li>Checked if content was hidden under log-in overlay and there was no scrolling page is covering 100% viewport hight.</li>
            <li>Checked if logo is centered horizontally across the page.</li>
            <li>Checked if log-in form is centered horizontally across the page under logo.</li>
            <li>Checked if button colour changes once hovered over.</li>
            <li>Checked if information icon is placed in the top right corner and changes colour once hovered over</li>
            <li>Checked if information window opens once "i" icon is pressed.</li>
            <li>Pressed "start game" button without entering name to check if modal requiring name input appears</li>
            <li>Pressed on X on the top right corner of the modal to see if it dissapears.</li>
            <li>Pressed anywhere within the modal to see if it dissapears.</li>
            <li>Entered a name and pressed "start game" button to check if I am being redirected to first level.</li>
        </ul>
    </li>
    <li>Information page:
        <ul>
            <li>All content and images are displaid as expected on all devices.</li>
            <li>Button changes colour once hovered over</li>
            <li>Pressed "Got it button" to make sure it leads me back to login page.</li>
        </ul>
    </li>
    <li>1st level:
        <ul>
            <li>Checked that all the the items are displid as expected on all devices.</li>
            <li>Made sure background music starts playing as soon as user enters the level.</li>
            <li>Hovered over sound icon on top right corner to make sure it changes colour.</li>
             <li>Clicked on sound icon to make supe it changes to a crossed out speaker and music stops</li>
            <li>Checked that the timer starts at exact time user enters page and is starting counting down from 60.</li>
            <li>Checked that user's selected name is displaid on the screen with a "Good Luck" message.</li>
            <li>Hovered over footer to check that it expands and copy right and github icon increases in size</li>
            <li>Hovered over github icon to check if it changes colour</li>
            <li>Clicked github icon to make sure it opens a separate window with git-hub repository</li>
             <li>Clicked on the cards to make sure that the back of the cards shows up and flipping sound is activated.</li>
            <li>Matched two cards to make sure matching sound is activated and cards stay unflipped</li>
            <li>Clicked on the open cards to make sure nothing happens and they stay face-up.</li>
            <li>Tried to open a third card before second one closed, to make sure the board was locked and this three cards would not be open at any time.</li>
            <li>Opened two not matching cards to make sure that no-match sound is activated and cards flip back.</li>
            <li>Checked that every time two cards are opened a turn count increases by 1.</li>
            <li>tried to exceed number of turns to check if losing overlay and sound is activated.</li>
            <li>tried to wait for a countdown to reack 0 to check if losing overlay and sound is activated.</li>
            <li>While Losing overlay is displaid, hovered over "Try Again" button to see that colour changes.</li>
            <li>While Losing overlay is displaid, clicked "Try Again" button to see if it will lead me back to Login page.</li>
            <li>Tried winning the game to check next level overlay is displaid</li>
            <li>Hevered over "Play" button to see if colour changes</li>
            <li>Clicked "Play" button to see if it leads me to next level</li>
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
            <li>hovered over "play again" button to see if colour changes.</li>
            <li>clicked "play again" button to see if it will lead me back to login page.</li>
        </ul>
    </li>
</ol>





 












 

   







