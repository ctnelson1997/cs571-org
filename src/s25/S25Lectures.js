const lectures = [
    {
        title: "Intro to CS571",
        desc: "Introduces CS571 & JSON.",
        dt: "Tuesday, Jan 21st",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec01-intro.pdf"
        },
        hw: {
            name: "HW0 - JSON",
            url: "https://github.com/CS571-S25/hw0"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_bhsd95f6&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Web Dev Basics 1",
        desc: "HTML, CSS, and JS Basics",
        dt: "Thursday, Jan 23rd",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec02-webdevbasics1.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-webdevbasics1"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_5snlay7a&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Web Dev Basics 2",
        desc: "DOM Manipulation and API Requests",
        dt: "Tuesday, Jan 28th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec03-webdevbasics2.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-webdevbasics2"
        },
        hw: {
            name: "HW1 - BadgerMart",
            url: "https://github.com/CS571-S25/hw1"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_ymlvg5kh&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Design Thinking",
        desc: "The Design Thinking Process",
        dt: "Thursday, Jan 30th",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "Web Dev Basics 3",
        desc: "Various Topics including Declarative Programming, Syntactic Sugar, and CSS Libraries",
        dt: "Tuesday, Feb 4th",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Visual Design",
        desc: "Aesthetics & Pyschology of Design",
        dt: "Thursday, Feb 6th",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "Web Dev 1",
        desc: "React Basics",
        dt: "Tuesday, Feb 11th",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Web Design",
        desc: "WIMP Design & Page Structure",
        dt: "Thursday, Feb 13th",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "Web Dev 2",
        desc: "React Lifecycle, Lists, and Inputs",
        dt: "Tuesday, Feb 18th",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Interaction Design",
        desc: "Interaction Paradigms and Patterns",
        dt: "Thursday, Feb 20th",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "Web Dev 3",
        desc: "React Context, Routing, and Storage",
        dt: "Tuesday, Feb 25th",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Expert Evaluation",
        desc: "Cognitive Walkthrough and Heuristic Evaluation",
        dt: "Thursday, Feb 27th",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "Web Dev 4",
        desc: "Complex APIs, Secret Management, and Uncontrolled Components",
        dt: "Tuesday, Mar 4th",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Accessibility",
        desc: "Accessible Design and Assistive Technologies",
        dt: "Thursday, Mar 6th",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "Web Dev 5",
        desc: "Memoization and Deployment",
        dt: "Tuesday, Mar 11th",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Mobile Dev 1",
        desc: "React Native Basics",
        dt: "Tuesday, Mar 18th",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Prototyping",
        desc: "Prototyping Theory and Practice",
        dt: "Thursday, Mar 20th",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "Mobile Dev 2",
        desc: "Animations and Navigation",
        dt: "Tuesday, Apr 1st",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Mobile Design",
        desc: "Interactions, Gestures, and Patterns",
        dt: "Thursday, Apr 3rd",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "Mobile Dev 3",
        desc: "Gestures, Sensors, and Deployment",
        dt: "Tuesday, Apr 8th",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "VUI Design",
        desc: "Command and Control vs. Conversational Agents",
        lectureType: "design",
        dt: "Thursday, Apr 10th",
        available: false,
        cs571org: false,
    },
    {
        title: "VUI Dev 1",
        desc: "WitAI Basics",
        dt: "Tuesday, Apr 15th",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Designing Agents",
        desc: "Agent Design and Behavior",
        dt: "Thursday, Apr 17th",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "VUI Dev 2",
        desc: "Handling Complex Conversations",
        dt: "Tuesday, Apr 22nd",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    },
    {
        title: "Usability Evaluation",
        desc: "Usability Testing",
        dt: "Thursday, Apr 24th",
        lectureType: "design",
        available: false,
        cs571org: false,
    },
    {
        title: "FullStack Development",
        desc: "FullStack Development using ExpressJS and Docker",
        dt: "Tuesday, May 1st",
        lectureType: "implementation",
        available: false,
        cs571org: true,
    }
];

export default lectures;