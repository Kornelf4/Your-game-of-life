<h1>YOUR Game of Life</h1>
<h2>What is this?</h2>
THis program is inspirated by Conway's Game of Life.
It's a small javascript program, that can run numerous two-position cellural automatas.<br>
You can create own rulesets for this.
<p></p>
<h2>How to use?</h2>
To run Conway's GAme of life: <br>
1. Download or clone this.<br>
2. Unzip and open the folder, click to the index.html<br>

To create YOUR Game of Life with own rules:<br>
3. Open the folder in VS Code or another IDE<br>
4. Crate a .js file with any name<br>
5. Write ruleset. The rulesets have three parts. There is an example named own.js<br>
  An array with the actual cells neighbours reletive location. Name the array "neighbours". Don'tz create two same element.<br>
  An object with the rules applied on the dead cells, what happens with the dead cell dependent on the number of live neighbors. Name it "rulesDead". You must have rules for all the possible neighbor numbers<br>
  An object with the rules applied on the live cells, what happens with the live cell dependent on the number of live neighbors. Name it "rulesLive". You must have rules for all the possible neighbor numbers<br>
6. The ruleset is complete. Link the file into index.html, change the file name from convay.js to your ruleset's name.<br>
7. It should work.<br>