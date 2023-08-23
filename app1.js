let Commands;
const API_KEY="117cdf0b1ca503170ca461017ee8e366";
const one = "Ed Sheeran   Shape of you.webm";
const two = "Imran Khan - Satisfya.webm";
const three = "Senorita.webm";
const four = "Chand_Tare_Tod_Full_Video_Song.mp3";
const five = "Imagine Dragons - Believer.mp3";
const six = "Justin Bieber – Despacito.mp3";
const seven = "The Chainsmokers - Closer.mp3";
const eight = "Baby Song.mp3";
function fetchCommands()
{
    fetch("/mic/Process.json")
    .then(response=>{
        response.json()
        .then(data=>{
            Commands=data;
        })
    })
}
fetchCommands();


const speechRecognition=window.webkitSpeechRecognition //Google Chrome 
||
window.SpeechRecognition;  //Firefox

function startListening()
{
    const recong = new speechRecognition();
    recong.start();
    recong.onstart = microphoneButton.classList.add("Listen");

    recong.onresult =function(data)
    {
        microphoneButton.classList.remove("Listen");
        handleResults(data);
    }
}
function handleResults(data)
{
    let text=data.results[0][0].transcript;
    text = text.toLowerCase();
    console.log(text);

    ProcessCommand(text);
}
function ProcessCommand(UserText)
{
    if(UserText.includes('google'))
    {
        Speak("Opening google...");
        window.open("https://www.google.com");
    }
    else if(UserText.includes('instagram'))
    {
        Speak("Opening enstagram...");
        window.open("https://www.instagram.com");
    }
    else if(UserText.includes('website'))
    {
        Speak("Opening"+UserText);
        // window.open("https://www.instagram.com");
        UserText.slice(7);
        openWeb(UserText);
    }
    else if(UserText.includes('stop music'))
    {
        stopMusic();
        Speak("Stopped music");
        // window.open("https://www.instagram.com");
    }
    else if(UserText.includes('internet')&&UserText.includes('speed') )
    {
        // Speak("Opening Quora...");
        // window.open("https://www.quora.com");
        internetSpeed();
    }
    else if(UserText.includes('weather') )
    {
        // Speak("Opening Quora...");
        // window.open("https://www.quora.com");
        getWeatherDetails();
    }
    else if(UserText.includes('system')||UserText.includes('system spec')||UserText.includes('system info') )
    {
        // Speak("Opening Quora...");
        // window.open("https://www.quora.com");
        systemInfo();
    }
    else if(UserText.includes('joke'))
    {
        Speak(" ");
        tellMeAJoke();
    }
    else if(UserText.includes('youtube'))
    {
        Speak("Opening Youtube...");
        window.open("https://www.youtube.com");
    }
    else if(UserText.includes('the') && UserText.includes('time'))
    {
        Speak("The time is: "+getCurrentTime());
    }
    else if(UserText.includes('facebook') || UserText.includes('fb'))
    {
        Speak("Opening facebook...");
        window.open("https://www.facebook.com");
    }
    else if(UserText.includes('reddit'))
    {
        Speak("Opening reddit...");
        window.open("https://www.reddit.com");
    }
    else if(UserText.includes('quora') )
    {
        Speak("Opening Quora...");
        window.open("https://www.quora.com");
    }
    else if(UserText.includes('chess') )
    {
        Speak("Opening Chess.com...");
        window.open("https://www.chess.com");
    }
    else if(UserText.includes('gmail') )
    {
        Speak("Opening gmail...");
        window.open("https://www.gmail.com");
    }
    else if(UserText.includes('free anime')||UserText.includes('anime') )
    {
        Speak("Opening aniwatch for free anime...");
        window.open("https://www.aniwatch.to");
    }
    else if(UserText.includes('wikipedia'))
    {
        Speak("Opening Wikipedia...");
        window.open("https://www.wikipedia.com");
    }
    else if(UserText.includes('battery percentage')||UserText.includes('battery info'))
    {
        // Speak("Opening Wikipedia...");
        // window.open("https://www.wikipedia.com");
        getBattery();
    }
    else if(UserText.includes('calc') || UserText.includes('calculator'))
    {
        Speak("Opening calculator...");
        window.open("calculator:///");
    }
    else if(UserText.includes('spotify') || UserText.includes('spotify')) {
        Speak("Opening spotify...");
        window.open("open.spotify.com");
    }
    else if(UserText.includes('google drive')) {
        Speak("Opening google drive...");
        window.open("drive.google.com");
    }
    else if(UserText.includes('google drive')) {
        Speak("Opening google drive...");
        window.open("drive.google.com");
    }
    else if(UserText.includes('google doc')) {
        Speak("Opening google docs...");
        window.open("docs.google.com");
    }
    else if(UserText.includes('google classroom')) {
        Speak("Opening google classroom...");
        window.open("classroom.google.com");
    }
    else if(UserText.includes('stratum ai')) {
        Speak("Opening stratum ai...");
        window.open("www.stratum.ai");
    }
    else if(UserText.includes('canva')) {
        Speak("Opening canva...");
        window.open("www.canva.com");
    }
    else if(UserText.includes('amazon')) {
        Speak("Opening amazon...");
        window.open("www.amazon.com");
    }
    else if(UserText.includes('apple')) {
        Speak("Opening apple...");
        window.open("www.apple.com");
    }
    else if(UserText.includes('yahoo')) {
        Speak("Opening yahoo...");
        window.open("www.yahoo.com");
    }
    else if(UserText.includes('camera') && UserText.includes('open'))
    {
        Speak("Opening camera");
        openCamera();
    }
    else if(UserText.includes('camera') && UserText.includes('close'))
    {
        Speak("Closing camera");
        closeCamera();
    }
    else if(UserText.includes("who is")||UserText.includes("what is")||UserText.includes("about"))
    {
        UserText=UserText.slice(7);
        Speak('Searching initiated...'+UserText);
        searchOnGoogle(UserText);
    }
    else if(UserText.includes("random music")){
        Speak("Playing random music");
        playMusic();

    }
    else if(UserText.includes("reload")||UserText.includes("refresh")){
        // Speak("Playing random music");
        reloadJarvis();
    }
    else if(UserText.includes("shutdown")||UserText.includes("turn off")||UserText.includes("deactivate")){
        closeJarvis();

    }
    else if(UserText.includes('date') )
    {
        // Speak("Opening Quora...");
        // window.open("https://www.quora.com");
        getTodayDate();
    }
    else if(UserText.includes("search on google "))
    {
        UserText=UserText.slice(16);
        Speak('Searching initiated...'+UserText);
        searchOnGoogle(UserText);
    }
    else if(UserText.includes("search on youtube")||UserText.includes("play")) {
        if (UserText.includes("search")) {
            UserText = UserText.slice(17);
            Speak('Searching initiated...' + UserText);
            searchOnYoutube(UserText);
        }
       else if (UserText.includes("play")) {
            UserText = UserText.slice(4);
            Speak('Searching initiated...' + UserText);
            searchOnYoutube(UserText);
        }
    }
    //from abbu start
    else if(UserText.includes("open whatsapp")){
        Speak("opening whatsapp...")
        window.open("https://web.whatsapp.com/");

    }
    else if(UserText.includes("open instagram")){
        Speak("opening instagram...")
        window.open("https://www.instagram.com/?hl=en");

    }
    else if(UserText.includes("open stratum ai")){
        Speak("hello guys presenting stratum...")
        window.open("https://www.stratum.ai/");

    }
    else if(UserText.includes("open facebook")){
        Speak("opening facebook...")
        window.open("https://www.facebook.com/");

    }
    else if(UserText.includes("open twitter")){
        Speak("opening twitter...")
        window.open("https://twitter.com/");

    }
    else if(UserText.includes("open linkedin")){
        Speak("opening linkedin...")
        window.open("https://www.linkedin.com/in/nikunjpatel11/");

    }
    else if(UserText.includes("open canva")){
        Speak("opening canva...")
        window.open("https://www.canva.com/");

    }
    else if(UserText.includes("open canva")){
        Speak("opening canva...")
        window.open("https://www.canva.com/");

    }
    else if(UserText.includes("open amazon")){
        Speak("opening amazon...")
        window.open("https://www.amazon.com");

    }
    else if(UserText.includes("open apple")){
        Speak("opening apple...")
        window.open("https://www.apple.com/ca/");

    }
    else if(UserText.includes("open reddit")){
        Speak("opening reddit...")
        window.open("https://www.reddit.com/");

    }
    else if(UserText.includes("open yahoo")){
        Speak("opening yahoo...")
        window.open("https://ca.yahoo.com/?p=us");

    }
    else if(UserText.includes("open bestbuy")){
        Speak("opening bestbuy...")
        window.open("https://www.bestbuy.ca/en-ca");

    }
    else if(UserText.includes("open source")){
        Speak("opening source...")
        window.open("https://www.thesource.ca/en-ca");

    }
    else if(UserText.includes("open bing")){
        Speak("opening bing...")
        window.open("https://www.bing.com/");

    }
    else if(UserText.includes("open walmart")){
        Speak("opening walmart...")
        window.open("https://www.walmart.ca/en");

    }
    else if(UserText.includes("open microsoft apps")){
        Speak("opening office...")
        window.open("https://www.office.com/");

    }
    else if(UserText.includes("open microsoft word")){
        Speak("opening word...")
        window.open("https://www.office.com/");

    }
    else if(UserText.includes("open microsoft excel")){
        Speak("opening excel...")
        window.open("https://www.office.com/");

    }
    else if(UserText.includes("open microsoft powerpoint")){
        Speak("opening powerpoint...")
        window.open("https://www.office.com/");

    }
    else if(UserText.includes("open google slides")){
        Speak("opening slides...")
        window.open("https://docs.google.com/presentation/u/0/?tgif=d");

    }
    else if(UserText.includes("open google sheets")){
        Speak("opening sheets...")
        window.open("https://docs.google.com/spreadsheets/u/0/");

    }
    else if(UserText.includes("open indeed")){
        Speak("opening indeed...")
        window.open("https://ca.indeed.com/");

    }
    else if(UserText.includes("open new york times")){
        Speak("opening new york times...")
        window.open("https://www.nytimes.com/ca/");

    }
    else if(UserText.includes("open ebay")){
        Speak("opening ebay...")
        window.open("https://www.ebay.ca/");

    }
    else if(UserText.includes("open facebook marketplace")){
        Speak("opening marketplace...")
        window.open("https://www.facebook.com/login/?next=%2Fmarketplace%2F");

    }
    else if(UserText.includes("open kijiji")){
        Speak("opening kijiji...")
        window.open("https://www.kijiji.ca/");

    }
    else if(UserText.includes("open twitch")){
        Speak("opening twitch...")
        window.open("https://www.twitch.tv/");

    }
    else if(UserText.includes("open quora")){
        Speak("opening quora...")
        window.open("https://www.quora.com/");

    }
    else if(UserText.includes("open cnn")){
        Speak("opening cnn...")
        window.open("https://www.cnn.com/");

    }
    else if(UserText.includes("open nba")){
        Speak("opening nba...")
        window.open("https://www.nba.com/games");

    }
    else if(UserText.includes("open tiktok")){
        Speak("opening tiktok...")
        window.open("https://www.tiktok.com/en/");

    }
    else if(UserText.includes("open soundcloud")){
        Speak("opening soundcloud...")
        window.open("https://soundcloud.com/");

    }
    else if(UserText.includes("open amazon music")){
        Speak("opening amazon music...")
        window.open("https://music.amazon.ca/?refMarker=null&returnFromLogin=1&");

    }
    else if(UserText.includes("open youtube music")){
        Speak("opening yt music...")
        window.open("https://music.youtube.com/");

    }
    else if(UserText.includes("free anime")){
        Speak("opening the best website...")
        window.open("https://zoro.to/");

    }
    else if (UserText.includes("top headlines")) {
        Speak("These are today's top headlines...");
        getNews();
    }

//Other educational commands

    else if(UserText.includes("open waterlooworks")){
        Speak("opening waterloo works...");
        window.open("https://waterlooworks.uwaterloo.ca/myAccount/dashboard.htm");

    }
    else if(UserText.includes("open learn")){
        Speak("opening learn...");
        window.open("https://learn.uwaterloo.ca/d2l/home")

    }
    else if(UserText.includes("open outlook")){
        Speak("opening outlook");
        window.open("https://outlook.office.com/mail/")

    }
    else if(UserText.includes("open gmail")){
        Speak("opening your gmail account");
        window.open("https://mail.google.com/mail/u/0/#inbox")

    }
    else if(UserText.includes("open gmail for my primary account")){
        Speak("opening your primary gmail account");
        window.open("https://mail.google.com/mail/u/0/#inbox")

    }
    else if(UserText.includes("open gmail for my other account")){
        Speak("opening your other gmail account");
        window.open("https://mail.google.com/mail/u/1/#inbox")

    }
    else if(UserText.includes("open netflix")){
        Speak("opening Netflix")
        // window.open("https://www.netflix.com/browse")

    }
    else if(UserText.includes("who created you")){
        Speak("I was developed by Jeeva's team ")
        // window.open("https://nikunjpatel.netlify.app/")

    }
    else if(UserText.includes("open discord")){
        Speak("opening discord")
        window.open("https://discord.com/")

    }
    else if(UserText.includes("open google docs")){
        Speak("opening Google docs")
        window.open("https://docs.google.com/document/u/0/")

    }
    else if(UserText.includes("open google drive")){
        Speak("opening google drive")
        window.open("https://drive.google.com/drive/u/0/my-drive")

    }
    //from abbu end
    //useless commands startttttttttttttttttttttttttttttttttt------------------------------------------------------------------------------------------->
    else if(UserText.includes("hi jarvis")){
        Speak("hello, hope you are well ")
    }
    else if(UserText.includes("yo Jarvis ")){
        Speak("yo how can I help you my bro")
    }
    else if(UserText.includes("what's good")){
        Speak("nothing much bro ")
    }
    else if(UserText.includes("what is the meaning of life")){
        Speak("You good bro? It's too early to be asking these type of questions.")
    }
    else if(UserText.includes("How many pounds are in a Kilogram?")){
        Speak("There are 2.2 pounds in a kilogram.")
    }
    else if(UserText.includes("What is better Pepsi or coke")){
        Speak("I don't drink either but Pepsi all the way")
    }
    else if(UserText.includes("Can you help me")){
        Speak("At your service, what can I help you with")
    }
    else if(UserText.includes("Tell me about yourself")){
        Speak("My name is Jarvis and I was create by Jeeva's team. I am programmed to assist you in completing various tasks and make your life easier")
    }
    else if(UserText.includes("Who are you")){
        Speak("My name is Jarvis and I was create by Jeeva's team. I am programmed to assist you in completing various tasks and make your life easier")
    }
    else if(UserText.includes("Why are you like this")){
        Speak("A certain person named Jeeva's team programmed me like this and here I am")
    }
    else if(UserText.includes("You are ugly")){
        Speak("Have you considered looking in the mirror")
    }
    else if(UserText.includes("You are dumb")){
        Speak("I have to match my IQ to the person I am talking to")
    }
    else if(UserText.includes("You are fat")){
        Speak("When was the last time you stepped on a scale")
    }
    //useless commands endddddddddddddddddddddddddddddddddddd------------------------------------------------------------------------------------------->
    // for(eachCommand in Commands)
    // {
    else if(UserText.includes(eachCommand) || UserText == eachCommand)
    {
        let task = Commands[eachCommand];
        eval(task);
    }
    else{
        Speak('I cant perform task: '+UserText);
    }


    {
        }
    // }
}
function Speak(TEXT)
{
    const utter = new SpeechSynthesisUtterance();
    let counter = 0;

    utter.text = TEXT;
    //utter.lang = 'en-IN';
    utter.voice =  window.speechSynthesis.getVoices()[1];

    console.log(utter.voice);
    //utter.lang = 'en-IN';

    window.speechSynthesis.speak(utter);
    window.speechSynthesis.getVoices().forEach(i=>{
        console.log(`${counter++}. ${i.voiceURI}`);
    });
}

//To get currentTime
function getCurrentTime()
{
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    currentTimeIs = hours+'hours'+minutes+'minutes';
    Speak("The time is..."+currentTimeIs);

}


//Calls function onload
microphoneButton.addEventListener("click",startListening);

function openWeb(Url)
{
    window.open(Url);
}

// Get weather details

function getWeatherDetails()
{
    if("geolocation" in navigator)
    {
        navigator.geolocation.getCurrentPosition(async function(position){
            let lat=position.coords.latitude;
            let lon=position.coords.longitude;

            const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

            let response = await fetch(api_url);

            let data = await response.json();

            manipulateWeatherData(data);

        });
    }
}


function manipulateWeatherData(data)
{
    let city=data.name;
    let temp=data.main.temp;
    let humidity=data.main.humidity;

    let icon=data.weather[0].icon;
    let description=data.weather[0].main;
    // console.log(data);
    let msg=`Current temperature is ${temp} degree celcius and humidity is ${humidity} grams of water vapour per kilogram`;
    Speak(msg);
    //We can use other data if we want to show on screen
    // let imageUrl = `https://openweathermap.org/img/w/${icon}.png`;

    // let image = `<img src="${imageUrl}">`;
    // document.write(image);
}


// Get today's date
function getTodayDate()
{
    var d = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var month = months[d.getMonth()];
    var date = d.getDate();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var weekDay = days[d.getDay()];
    var year = d.getFullYear();
    Speak("Today date is "+weekDay+" "+date+" "+month+" "+year);
}


//Opening camera
function openCamera()
{
    openCamera = window.open(
        './Camera2.html',
        "",
        "width=700px,height=450px,left=300px,top=100px"
    );
}

//Closing Camera
function closeCamera()
{
    openCamera.close();
}

//Search on Google
function searchOnGoogle(data)
{
    window.open(
    `https://www.google.com/search?q=${data}`,
    "Google",
    );
    
}
//Search on Youtube
function searchOnYoutube(data)
{
    window.open(
    `https://www.youtube.com/search?q=${data}`,
    "Youtube",
    );
}

//Close to jarvis
function closeJarvis()
{
    setTimeout(function() {
        window.close();
        }, 2*1000);
}

//Reload Jarvis
function reloadJarvis()
{
    // Speak('Reloading jarvis...');
    // Speak('Taking initial checks...');
    // Speak('Backing up configurations...');

    Speak("please wait...");
    Speak("reloading...");
    setTimeout(function() {
        location.reload();
    }, 7*1000);
    Speak('I am online and ready again...');
}

//To move Jarvis window upside
function stepUp()
{
    window.moveBy(0,-100);
}

//To move Jarvis window downside
function stepDown()
{
    window.moveBy(0,100);
}

//To move against x-axis out
function moveToXAxisOut()
{
    window.moveBy(100,0);
}

//To move against x-axis in
function moveToXAxisIn()
{
    window.moveBy(-100,0);
}

//To get a Battery
let batteryPromise = navigator.getBattery();
batteryPromise.then(printBatteryStatus);

function printBatteryStatus(batteryObject) {
    // console.log("IsCharging", batteryObject.charging);
    window.batteryLevel = parseInt(Math.round(batteryObject.level*100));
    // console.log("Percentage", batteryLevel+"%");
}
function getBattery()
{
    Speak("Battery left in the device is "+batteryLevel+"percent");
}
//Get family Information
function getFamilyInfo()
{
    Speak("there are six member in your family...");
    Speak("grandmother... father... mother... your brother... sister... and you...");
    Speak("you live in junibej... which is in maharashtra...");
    Speak("i have lot to say but i think it will be enough...");
}
//Play Music
function playMusic()
{
    Speak("Playing music...");
    window.shutter = new Audio();
    shutter.autoplay = true;
    // play sound effect
    var randomNumber = Math.floor((Math.random() * 11)+1);
    //randomNumber = 11;
    console.log(randomNumber);
    let songNumber;
    if(randomNumber == 1)
    {
        // songNumber = one;
        shutter.src = one;
    }
    else if(randomNumber == 2)
    {
        shutter.src = two;
    }
    else if(randomNumber == 3)
    {
        shutter.src = three;
    }
    else if(randomNumber == 4)
    {
        shutter.src = four;
    }
    else if(randomNumber == 5)
    {
        shutter.src = five;
    }
    else if(randomNumber == 6)
    {
        shutter.src = six;
    }
    else if(randomNumber == 7)
    {
        shutter.src = four;
    }
    else if(randomNumber == 8)
    {
        shutter.src = eight;
    }
    else if(randomNumber == 11)
    {
        shutter.src = "Background Music.mp3";
    }
    else
    {
        shutter.src = eleven;
    }
    shutter.play();
}

//Stop Music
function stopMusic()
{
    shutter.pause();
}
var randomNumber = Math.floor((Math.random() * 3)+1);
console.log(randomNumber);
//Telling a Joke
function tellMeAJoke()
{
    window.shutter1 = new Audio();  //window is use here to access variable anywhere in Program
    shutter1.autoplay = true;
    // play sound effect
    window.randomNumber = Math.floor((Math.random() * 2)+1);
    console.log(randomNumber);
    if(randomNumber == 1)
    {
        shutter1.src = 'Joke 1.mp3';
    }
    else if(randomNumber == 2)
    {
        shutter1.src = 'Joke 2.mp3';
    }
    // else if(randomNumber == 3)
    // {
    //     shutter1.src = 'Joke 3.mp3';
    // }
    // else if(randomNumber == 4)
    // {
    //     shutter1.src = 'Joke 4.mp3';
    // }
    // else if(randomNumber == 5)
    // {
    //     shutter1.src = 'Joke 5.mp3';
    // }
    // else
    // {
    //     shutter1.src = 'Joke 6.mp3';
    // }
    shutter1.play();
}
//Next Joke
function nextJoke()
{
    if(randomNumber < 2)
    {
    randomNumber = randomNumber + 1;
    }
    else
    {
        randomNumber = 0;
    }

    if(randomNumber == 1)
    {
        shutter1.src = 'Joke 1.mp3';
    }
    else if(randomNumber == 2)
    {
        shutter1.src = 'Joke 2.mp3';
    }
    // else if(randomNumber == 3)
    // {
    //     shutter1.src = 'Joke 3.mp3';
    // }
    // else if(randomNumber == 4)
    // {
    //     shutter1.src = 'Joke 4.mp3';
    // }
    // else if(randomNumber == 5)
    // {
    //     shutter1.src = 'Joke 5.mp3';
    // }
    // else
    // {
    //     shutter1.src = 'Joke 6.mp3';
    // }
}
//Welcome to friends
function welcomeToFriends()
{
    Speak("Welcome you all.. i am jarvis... nice to meet you...");
    Speak("I have a big list and am sure that you are one from that...");
    Speak("Sir... should i pack up...I think you want to talk to your friends...");
}
//Show friends list
function friendList()
{
     window.friendList = window.open(
        "http://localhost:5500/mic/friendList.html",
        "",
        "width=700px,height=500px"
    )
}
//Close Friend List
function closeList()
{
    friendList.close();
}

//System Information
function systemInfo()
{
        if(navigator.onLine)
        {
            Speak("The system is online with the speed of "+navigator.connection.downlink+" MB per second");
        }
        else{
            Speak("The system is not online...");
        }
        Speak("Keyboard language is "+navigator.language);
        var type = navigator.connection.effectiveType;
        type = type.slice(0,1);
        Speak("The type of connection this system is using is "+type+" G");
        var platform = navigator.platform;
        platform = platform.slice(3/5);
        Speak("The system is windows "+platform*2+" bits");
}
//Internet Speed
function internetSpeed()
{
    if(navigator.onLine)
    {
        Speak("The system is online with the speed of "+navigator.connection.downlink+" MB per second");
    }
    else{
        Speak("The system is not online...");
    }
}

function readList(){
    var friendList = [];
    var friendList1 = "";
    friendList1 = localStorage.getItem("array");
    friendList = friendList1.split(",");
    console.log(friendList);
    
    for(let friend of friendList)
    {
        console.log(friend);
        Speak(friend);
    }
}

function jarvisSaysHello()
{
    let d = new Date();
    var hours = d.getHours();
    Speak("i am jarvis");
    if(hours <= 12)
    {
        Speak("Good morning...");
    }
    else if(hours >12 && hours<= 16)
    {
        Speak("Good afternoon...");
    }
    else if(hours >16 && hours<= 20)
    {
        Speak("Good evening...");
    }
    else
    {

    }
    Speak("say what can i do for you sir...");
}
async function getNews(){
    var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=952912f2a18a4170a25ff2e9d360883f"
    var req = new Request(url)
    var a = []

    await fetch(req).then((response) => response.json())
        .then((data) => {
            console.log(data);
            let arrNews = data.articles
            arrNews.length = 10
                // []
            arrNews.forEach((e,index) => {
                a.push(index+1)
                a.push(".........")
                a.push(e.title)
                a.push(".........")

            });
            Speak(a)
        })
}
// const chatLog = document.getElementById('chat-log');
// const speakButton = document.getElementById('speak-button');
//
// const synth = window.speechSynthesis;
// const recognition = new window.webkitSpeechRecognition();
// recognition.continuous = false;
// recognition.interimResults = false;
//
// recognition.onresult = (event) => {
//     const result = event.results[0][0].transcript;
//     processUserInput(result);
// };
//
// speakButton.addEventListener('click', () => {
//     recognition.start();
// });
//
// function addMessageToChat(sender, message) {
//     const messageElement = document.createElement('div');
//     messageElement.className = `message ${sender}-message`;
//     messageElement.textContent = message;
//     chatLog.appendChild(messageElement);
//     chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
// }
//
// function speakMessage(message) {
//     const utterance = new SpeechSynthesisUtterance(message);
//     synth.speak(utterance);
// }
//
// function processUserInput(input) {
//     // Replace this with your actual voice assistant logic
//     const response = 'This is your voice assistant responding to: ' + input;
//     addMessageToChat('user', input);
//     setTimeout(() => {
//         addMessageToChat('assistant', response);
//         speakMessage(response);
//     }, 500); // Simulate a delay before the assistant responds
// }