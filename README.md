# inject-website-offline
inject-website-offline : advanced method, we inject js and css files into local storage end serv webpage with worker offline

## Test offline Webpage:
<button id="buton-actiune" src="https://ghepes.github.io/inject-website-offline/">TEST NOW</button>
<a href="https://ghepes.github.io/inject-website-offline/">visit Website Offline</a>


Now the advanced method, we inject js and css files into local storage and the html page requests from local web storage, so index.html we attach a worker to it:
now without internet and without server the website serves that domain indefinitely!




## worker settings set, Dev Tool: 
"Checked" Offline; 

"Checked" Update on reloud; 

"Unchecked." Bypass for network;


## Logic:

index.html - Worker offline

scripts js & css to - Web local storage


it lives in the web without Server or internet:  keeps domain rute


## strict rule:
Service Worker = sw.js :
has a very strict rule and cannot be served as an external url files!
It must be strictly as a local file next to index.html

## VIDEO - OFFLINE WEBSITE
<video src="https://github.com/user-attachments/assets/03ddd082-e334-4561-a99a-c1fd146e77ca" width="1680" controls="controls"></video>

<img width="1484" height="1055" alt="Screenshot 2026-07-29 021137" src="https://github.com/user-attachments/assets/2f86381e-2200-4f76-a927-355f285b1e3c" />




