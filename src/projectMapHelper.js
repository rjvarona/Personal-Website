var psMap = new Map();
var linkMap = new Map();
var ytMap = new Map();

const getpsMap = () => {
  psMap.set(
    "memeboard",
    "How many memes do you look at a day? hundreds, thousands, maybe your like me millions? Memes have influenced modern culture, showcase the news, and bring joy to billions of people around the world. I want to share that joy with the next to me by creating the world's first meme-multi connect soundboard. This meme soundboard allows users to connect to one server, and share the pre-loaded meme sounds with other people who have this application. \nI implemented this meme soundboard with .NET, C#, and WPF. I created my own http servers and created the custom wpf boards. These boards are able to connect to my http server and we are able to see which meme sound a user plays, and able to tell other sound boards to play the same sound."
  );

  psMap.set(
    "rjavacado",
    "How many Memes do I have stored on my laptop? What types of memes lie in my own computer? Most modern Memes can be classified into three categories, music, video, and images. As a enthusiast I wanted to find a way to display my memes stored on my computer, also I wanted a way to track the memes stored and the locations they are in, that is why I designed my own personal file tracker, and then share this joy with the world. \n I implemented this file tracking system with .NET, MSSQL, C#, jQuery, Dapper ORM, and jQuery Isotope. I designed the database, wrote the controllers, and designed the front end of the application."
  );

  psMap.set(
    "hireadams",
    "It is very hard to get a job these days. It seems that to be eligible for an entry-level software developer position, you need at least 5 years of senior developer experience, and the fact recruiters go through hundreds of resumes every day makes the process so much more complicated. Well look no further. My friend Adams is one of the best full-stack developer. We have worked together on so many applications, and I want to help him in any way, so I built him this website to get more recognition. \n I implemented this website with Node.js, Vue.js, Vuetify, and Google Firestore. This application is designed to be attractive and please if you need another developer please feel free to contact him."
  );
  psMap.set(
    "inventory",
    "Managing labs can be stressful and tedious. Equipments get lost, student's don't know what's going on, and someone professors dont have time to edit the lab sheet. To solve this problem I created an Labarotory Project, in which the professor is allowed to create labs, and manage where equipments are being placed. \n I implemented this web app with .NET, C#, Firestore, and Vue.js. "
  );

  psMap.set(
    "yeetpost",
    "With the downfall of Yik-Yak, there has been a need for a major anonymous forum posting app. Unlike Yik-Yak, YeetPost is developed on both mobile and website. Yik-Yak's fail to address cyberbullying caused the application to be taken down from the mobile market by the end of 2017. YeetPost tries to address this issue with the introduction of cyber bullying. YeetPost also gives the user to post Yeets in random locations in the u.s. The user is able to like, flag, comment, and browse the yeets by trending or new. \n I implemented this web app with .NET, C#, Google Firestore, Vue.js, and Vuetify."
  );
  return psMap;
};

const getgitMap = () => {
  linkMap.set(
    "memeboard",
    "https://github.com/rjvarona/Multi-Connect-Soundboard"
  );
  linkMap.set(
    "rjavacado",
    "https://github.com/rjvarona/Personal-File-Directory"
  );

  linkMap.set("hireadams", "http://www.hireadams.com/");

  linkMap.set("inventory", "https://github.com/2-letters/Inventory-Tracker");

  linkMap.set("yeetpost", "https://github.com/rjvarona/Yik-Yak-web-clone");
  return linkMap;
};
const getvidMap = () => {
  ytMap.set("memeboard", "https://www.youtube.com/embed/4_4Qy8zlrQk");
  ytMap.set("rjavacado", "https://www.youtube.com/embed/aHvqi0t7nbI");
  ytMap.set("hireadams", "https://www.youtube.com/embed/V1rAyjtns9Y");
  ytMap.set("inventory", "https://www.youtube.com/embed/LFlfeeMVN0I");
  ytMap.set("yeetpost", "https://www.youtube.com/embed/nFpg7L59kz4");
  return ytMap;
};

exports.getpsMap = getpsMap;
exports.getgitMap = getgitMap;
exports.getvidMap = getvidMap;
