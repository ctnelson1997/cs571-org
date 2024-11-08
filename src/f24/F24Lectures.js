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
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec09-web-design.pdf"
        },
        ice: {
            name: "ICA C",
            url: "https://docs.google.com/document/d/1U2f-Lmn6OAEAEF3MQoe3MmndbQ78tQxAVp5GkpwTEwI/edit"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_jln4gvyh&config[provider]={"widgetId":"1_ldkqiig9"}`
    },
    {
        title: "Web Dev 3",
        desc: "React Context, Routing, and Storage",
        dt: "Tuesday, October 8th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec10-webdev3.pdf"
        },
        hw: {
            name: "HW5 - Badger Buddies",
            url: "https://github.com/CS571-F24/hw5"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-F24/ice-webdev3"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_1yn1gq7b&config[provider]={"widgetId":"1_fe0xexec"}`
    },
    {
        title: "Interaction Design",
        desc: "Interaction Paradigms and Patterns",
        dt: "Thursday, October 10th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec11-interaction-design.pdf"
        },
        ice: {
            name: "ICA D",
            url: "https://docs.google.com/document/d/19G39cO9O2zSw9D-dZJva9qesLr7t8RJ69AFIdqQzq10/edit?usp=sharing"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_ie0z8jjj&config[provider]={"widgetId":"1_n6nix292"}`
    },
    {
        title: "Web Dev 4",
        desc: "Complex APIs, Secret Management, and Uncontrolled Components",
        dt: "Tuesday, October 15th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec12-webdev4.pdf"
        },
        hw: {
            name: "HW6 - Badger Chat",
            url: "https://github.com/CS571-F24/hw6"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-F24/ice-webdev4"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_ai9863zx&config[provider]={"widgetId":"1_pgwdvmuy"}`
    },
    {
        title: "Expert Evaluation",
        desc: "Cognitive Walkthrough and Heuristic Evaluation",
        dt: "Thursday, October 17th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec13-expert-evaluation.pdf"
        },
        ice: {
            name: "ICA E",
            url: "https://docs.google.com/document/d/1Yoa9six7PgQW1qFNv5N8MMd04K1t4glboi4WljQZf08/edit?usp=sharing"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_ie0z8jjj&config[provider]={"widgetId":"1_n6nix292"}`
    },
    {
        title: "Web Dev 5",
        desc: "Memoization and Deployment",
        dt: "Tuesday, October 22nd",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec14-webdev5.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-F24/ice-webdev5"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_p09vem7h&config[provider]={"widgetId":"1_9v05vks7"}`
    },
    {
        title: "Mobile Dev 1",
        desc: "React Native Basics",
        dt: "Tuesday, October 29th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec15-mobiledev1.pdf"
        },
        hw: {
            name: "HW7 - Badger Mart",
            url: "https://github.com/CS571-F24/hw7"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-F24/ice-mobiledev1"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_9w5bc480&config[provider]={"widgetId":"1_xd2gvd8x"}`
    },
    {
        title: "Mobile Design",
        desc: "Interactions, Gestures, and Patterns",
        dt: "Thursday, October 31st",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec16-mobile-design.pdf"
        },
        ice: {
            name: "ICA F",
            url: "https://docs.google.com/document/d/1Co92qdce7blTvZ8bwaS1O6kJkrsTBZj_caP2bZ90AvE/edit?usp=sharing"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_lyedspi9&config[provider]={"widgetId":"1_pzy936fe"}`
    },
    {
        title: "Mobile Dev 2",
        desc: "Animations and Navigation",
        dt: "Tuesday, November 5th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec17-mobiledev2.pdf"
        },
        hw: {
            name: "HW8 - Badger News",
            url: "https://github.com/CS571-F24/hw8"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_xev1wxjj&config[provider]={"widgetId":"1_wymkbadd"}`
    },
    {
        title: "Prototyping",
        desc: "Prototyping Theory and Practice",
        dt: "Thursday, November 7th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec18-prototyping.pdf"
        },
        ice: {
            name: "ICA G",
            url: "https://docs.google.com/document/d/1yDdeQwlxHjTITdblEX4psUVjkMCAKXWpvoqLbYIlF7I/edit?usp=sharing"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_h5jlyyne&config[provider]={"widgetId":"1_g040j44f"}`
    },
    {
        title: "Mobile Dev 3",
        desc: "Gestures, Sensors, and Deployment",
        dt: "Tuesday, November 12th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-F24/lectures/main/lec19-mobiledev3.pdf"
        },
        hw: {
            name: "HW9 - Badger Chat",
            url: "https://github.com/CS571-F24/hw9"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-F24/ice-mobiledev3"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_w5w2fyk8&config[provider]={"widgetId":"1_y362z3i8"}`
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