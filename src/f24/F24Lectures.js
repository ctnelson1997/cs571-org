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
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec03-design-thinking.pdf"
        },
        ice: {
            name: "ICA A",
            url: "https://docs.google.com/document/d/1eI3kbvWBab2CJezTj6lXNXDz67uZGA_mDRJRh2AHzIU/edit?usp=sharing"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_ehzuzvv8&config[provider]={"widgetId":"1_wzqfitu4"}`
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
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec06-webdev1.pdf"
        },
        hw: {
            name: "HW3 - BadgerMart (React!)",
            url: "https://github.com/CS571-F24/hw3"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-F24/ice-webdev1"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_sugwayc6&config[provider]={"widgetId":"1_tbojphtf"}`

    },
    {
        title: "Visual Design",
        desc: "Aesthetics & Pyschology of Design",
        dt: "Tuesday, September 24th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec07-visual-design.pdf"
        },
        ice: {
            name: "ICA B",
            url: "https://docs.google.com/document/d/148e1DG7jBB0BB5aXQd8WbPa-BHd3gPkJ2R1a6F7Tg-E/edit?usp=sharing"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_ibcg6y2h&config[provider]={"widgetId":"1_phxj86se"}`

    },
    {
        title: "Web Dev 2",
        desc: "React Lifecycle, Lists, and Inputs",
        dt: "Tuesday, October 1st",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec08-webdev2.pdf"
        },
        hw: {
            name: "HW4 - BadgerBook (React!)",
            url: "https://github.com/CS571-F24/hw4"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-F24/ice-webdev2"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_k3cvqtsd&config[provider]={"widgetId":"1_9hh5wzks"}`

    },
    {
        title: "Web Design",
        desc: "WIMP Design & Page Structure",
        dt: "Thursday, October 3rd",
        lectureType: "design",
        available: false,
    },
    {
        title: "Web Dev 3",
        desc: "React Context, Routing, and Storage",
        dt: "Tuesday, October 8th",
        lectureType: "implementation",
        available: false,
    },
    {
        title: "Interaction Design",
        desc: "Interaction Paradigms and Patterns",
        dt: "Thursday, October 10th",
        lectureType: "design",
        available: false,
    },
    {
        title: "Web Dev 4",
        desc: "Complex APIs, Secret Management, and Uncontrolled Components",
        dt: "Tuesday, October 15th",
        lectureType: "implementation",
        available: false,
    },
    {
        title: "Expert Evaluation",
        desc: "Cognitive Walkthrough and Heuristic Evaluation",
        dt: "Thursday, October 17th",
        lectureType: "design",
        available: false,
    },
    {
        title: "Web Dev 5",
        desc: "Memoization and Deployment",
        dt: "Tuesday, October 22nd",
        lectureType: "implementation",
        available: false,
    },
    {
        title: "Mobile Dev 1",
        desc: "React Native Basics",
        dt: "Tuesday, October 29th",
        lectureType: "implementation",
        available: false,
    },
    {
        title: "Prototyping",
        desc: "Prototyping Theory and Practice",
        dt: "Thursday, October 31st",
        lectureType: "design",
        available: false,
    },
    {
        title: "Mobile Dev 2",
        desc: "Animations and Navigation",
        dt: "Tuesday, November 5th",
        lectureType: "implementation",
        available: false,
    },
    {
        title: "Mobile Design",
        desc: "Interactions, Gestures, and Patterns",
        dt: "Thursday, November 7th",
        lectureType: "design",
        available: false,
    },
    {
        title: "Mobile Dev 3",
        desc: "Gestures, Sensors, and Deployment",
        dt: "Tuesday, November 12th",
        lectureType: "implementation",
        available: false,
    },
    {
        title: "Accessibility",
        desc: "Accessible Design and Assistive Technologies",
        dt: "Thursday, November 14th",
        lectureType: "design",
        available: false,
    },
    {
        title: "VUI Dev 1",
        desc: "WitAI Basics",
        dt: "Tuesday, November 19th",
        lectureType: "implementation",
        available: false,
    },
    {
        title: "VUI Design",
        desc: "Command and Control vs. Conversational Agents",
        dt: "Thursday, November 21st",
        lectureType: "design",
        available: false,
    },
    {
        title: "VUI Dev 2",
        desc: "Handling Complex Conversations",
        dt: "Tuesday, November 26th",
        lectureType: "implementation",
        available: false,
    },
    {
        title: "Designing Agents",
        desc: "Agent Design and Behavior",
        dt: "Tuesday, December 3rd",
        lectureType: "design",
        available: false,
    },
    {
        title: "User Evaluation",
        desc: "Usability Testing",
        dt: "Thursday, December 5th",
        lectureType: "design",
        available: false,
    },
    {
        title: "FullStack Development",
        desc: "FullStack Development using ExpressJS and Docker",
        dt: "Tuesday, December 10th",
        lectureType: "implementation",
        available: false,
    }
];

export default lectures;