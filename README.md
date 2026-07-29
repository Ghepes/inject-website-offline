# inject-website-offline
inject-website-offline : advanced method, we inject js and css files into local storage end serv webpage with worker offline




Now the advanced method, we inject js and css files into local storage and the html page requests from local web storage, so index.html we attach a worker to it:
now without internet and without server the website serves that domain indefinitely!




## worker settings set, Dev Tool: 
"Checked" Offline; 

"Checked" Update on reloud; 

"Unchecked." Bypass for network;


## Logic:

index.html - Worker offline

scripts js & css to - Web local storage


it lives in the web without server and without internet: and keeps its domain name
,


## strict rule:
Service Worker = sw.js :
has a very strict rule and cannot be served as an external url files!
It must be strictly as a local file next to index.html

