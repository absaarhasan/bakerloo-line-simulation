# Bakerloo Line Simulation


Write a program using the front end technologies HTML/CSS/Javascript (any library of your choice) to simulate the following rail industry requirements.
What we are expecting: Simple, executable code, that fulfills the below requirements as well as possible.

## Requirements:

-Graphical depiction of rail network: TFL Bakerloo Line (underground network).
-The line map can be found here: https://en.wikipedia.org/wiki/Bakerloo_line (under 'Map' section).
-Animated trains navigating the network in the following way:
-Travelling from Elephant & Castle Underground Station to Harrow & Wealdstone Underground Station.
-Headway (interval between trains): Every 3 minutes.
-Stops: Elephant & Castle, Lambeth North, Waterloo , Embankment, ....., South Kenton, Kenton, Harrow & Wealdstone (the entire stops list can be found in the tfl link:  https://tfl.gov.uk/tube/route/bakerloo/).
-Train should stop at each station for 30 seconds.
-Assume train speed is constant.
-Trains should travel quicker than real time so the solution can be easily demonstrated.

##Optional Requirements:

-Add Harrow & Wealdstone to Elephant & Castle service in a separate track (reverse direction) with the same interval, stoppage pattern given above.
-Add speed restrictions between some stations so the train moves at a different rate on certain station to station links, e.g Piccadilly Circus - Charing Cross 20mph, whereas all other links train moves at a maximum of 40mph.

##Key Points:

 (1) Use Javascript/CSS animations to move the trains between the stations in the line map.
 (2) If you are using Javascript for animations, there is no restriction to your choice of JS libraries (JQuery, Angular, paper, etc..).
 (3) Assume any missing parameters/constants and list in "Assumptions.txt".
 (4) Code need not be production level quality, please provide pseudo-code for any further development that has not been implemented.
 (5) Unit tests are NOT required.
 (6) If you have any questions, please do get in touch.