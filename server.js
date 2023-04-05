const express=require('express')
const app=express()

app.listen(3000)

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res)=>{
    const projects = [
        {
            title: 'Newsroom app', 
            github: 'https://github.com/dahiya-code/Navya-sVersion', 
            image:"/navyas-version.jpeg", 
            about:"Clone of Hacker News website. Has two pages namely New stories and Search page. On new stories page all pages are ordered from newest to oldest with pagination. The Search page has three filters(stories, popularity, time) with pagination.",
            learning:['API services', 'React JS', 'UI/UX']
        },
        {
            title: 'CSES Solution Extractor', 
            github: 'https://github.com/dahiya-code/CSES-Solution-Extractor', 
            image:"/cses.jpeg", 
            about:"Implemented a web scraping script using BeautifulSoup Python library to extract accepted solutions out of the popular website CSES Problem Set which contains a collection of competitive programming practice problems. The default parser lxml is used to feed HTML data and call handler methods when start tags, end tags, text, comments, and other markup elements are encountered. Accepted solution language can be customised based on language.",
            learning:['Socket.IO', 'React JS', 'WebRTC', 'NodeJS', 'API services']
        },
        {
            title: 'Workout Buddy', 
            github: 'https://github.com/dahiya-code/fitness-app', 
            image:"/workout-buddy.jpeg", 
            about:"Software that lets you add and delete your daily workout loads and reps for tracking your daily progress",
            learning:['MongoDB', 'React JS', 'Express', 'NodeJS', 'API services']
        },
        {
            title: 'Weather app', 
            github: 'https://github.com/dahiya-code/weather-app', 
            image:"/weather.jpeg", 
            about:"A cool app which changes background as the temperature of your city changes.",
            learning:['API services', 'React JS', 'UI/UX']
        },
        {
            title: 'VideoWare', 
            github: 'https://github.com/dahiya-code/video-ware', 
            image:"/videoware.jpeg", 
            about:"Clone of Skype. Functionality to connect a minimum of two participants with each other to have a video conversation. Another miscellaneous feature is checking weather of any city of the world",
            learning:['Socket.IO', 'React JS', 'WebRTC', 'NodeJS', 'API services']
        },
      ];
    res.render('index', {title:'Home', projects})
})