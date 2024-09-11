const lectures = [
    {
        title: "Intro to CS571",
        desc: "Introduces CS571 & JSON.",
        dt: "Thursday, Sept 5th",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec01-intro.pdf"
        },
        hw: {
            name: "HW0 - JSON",
            url: "https://github.com/CS571-F24/hw0"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_oqbnf8zc&config[provider]={"widgetId":"1_u1sgp59r"}`
    },
    {
        title: "Web Dev Basics 1",
        desc: "HTML, CSS, and JS Basics",
        dt: "Tuesday, Sept 10th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec02-webdevbasics1.pdf"
        },
        hw: {
            name: "HW1 - BadgerMart",
            url: "https://github.com/CS571-F24/hw1"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-F24/ice-webdevbasics1"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_13908pnr&config[provider]={"widgetId":"1_ejranfln"}`
    },
    {
        title: "Design Thinking",
        desc: "The Design Thinking Process",
        dt: "Thursday, Sept 12th",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "Web Dev Basics 2",
        desc: "DOM Manipulation and API Requests",
        dt: "Tuesday, September 17th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec04-webdevbasics2.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-F24/ice-webdevbasics2"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_twxdbtds&config[provider]={"widgetId":"1_rcs4mym3"}`

    },
    {
        title: "Web Dev Basics 3",
        desc: "Various Topics including Declarative Programming, Syntactic Sugar, and CSS Libraries",
        dt: "Thursday, September 19th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec05-webdevbasics3.pdf"
        },
        hw: {
            name: "HW2 - BadgerBook",
            url: "https://github.com/CS571-F24/hw2"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-F24/ice-webdevbasics3"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_vjdauv8s&config[provider]={"widgetId":"1_gnko8gxt"}`
    },
    {
        title: "Web Dev 1",
        desc: "React Basics",
        dt: "Tuesday, September 24th",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Visual Design",
        desc: "Aesthetics & Pyschology of Design",
        dt: "Tuesday, September 24th",
        lectureType: "design",
        available: false,
    },
    {
        title: "More...",
        desc: "To be continued...",
        dt: "TBD",
        available: false,
    },
];

export default lectures;