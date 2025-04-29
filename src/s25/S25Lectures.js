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
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec04-designthinking.pdf"
        },
        ice: {
            name: "ICA A",
            url: "https://docs.google.com/document/d/1Is6o1CzyuTfsyVAw8qyZEE2kvD-F7e-De4vAuNtqm5Y/edit"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_5av8aifs&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Web Dev Basics 3",
        desc: "Various Topics including Declarative Programming, Syntactic Sugar, and CSS Libraries",
        dt: "Tuesday, Feb 4th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec05-webdevbasics3.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-webdevbasics3"
        },
        hw: {
            name: "HW2 - BadgerMart",
            url: "https://github.com/CS571-S25/hw2"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_92jgs564&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Visual Design",
        desc: "Aesthetics & Pyschology of Design",
        dt: "Thursday, Feb 6th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec06-visual-design.pdf"
        },
        ice: {
            name: "ICA B",
            url: "https://docs.google.com/document/d/1NSb0h4FotvF82ZkQlontMoxrSvGGj0m362Ihbdyp3LY/edit"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_noabxnkk&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Web Dev 1",
        desc: "React Basics",
        dt: "Tuesday, Feb 11th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec07-webdev1.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-webdev1"
        },
        hw: {
            name: "HW3 - BadgerMart (React!)",
            url: "https://github.com/CS571-S25/hw3"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_0guk2pai&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Web Design",
        desc: "WIMP Design & Page Structure",
        dt: "Thursday, Feb 13th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec08-web-design.pdf"
        },
        ice: {
            name: "ICA C",
            url: "https://docs.google.com/document/d/1D9sJ7-KNTcWPuAgKe09pmv-qoRb5nFWh-9Vrb51fMKQ/edit?tab=t.0#heading=h.k3oq3re8nrea"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_f1doy1b0&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Web Dev 2",
        desc: "React Lifecycle, Lists, and Inputs",
        dt: "Tuesday, Feb 18th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec09-webdev2.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-webdev2"
        },
        hw: {
            name: "HW4 - BadgerBook (React!)",
            url: "https://github.com/CS571-S25/hw4"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_7620bxu3&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Interaction Design",
        desc: "Interaction Paradigms and Patterns",
        dt: "Thursday, Feb 20th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec10-interaction-design.pdf"
        },
        ice: {
            name: "ICA D",
            url: "https://docs.google.com/document/d/1KCWZLpS_ZvRGKTjX_69R8bIc7CD8A5eXdj-wHbNStTM/edit?tab=t.0#heading=h.k3oq3re8nrea"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_157u48m5&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Web Dev 3",
        desc: "React Context, Routing, and Storage",
        dt: "Tuesday, Feb 25th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec11-webdev3.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-webdev3"
        },
        hw: {
            name: "HW5 - BadgerBuds",
            url: "https://github.com/CS571-S25/hw5"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_vze3a2wm&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Expert Evaluation",
        desc: "Cognitive Walkthrough and Heuristic Evaluation",
        dt: "Thursday, Feb 27th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec12-expert-evaluation.pdf"
        },
        ice: {
            name: "ICA E",
            url: "https://docs.google.com/document/d/1ZY5AOtVsTIV6qbTsgvaNGW_lo25zggGYUl-WSWeuV54/edit?usp=sharing"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_mmrycou2&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Web Dev 4",
        desc: "Complex APIs, Secret Management, and Uncontrolled Components",
        dt: "Tuesday, Mar 4th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec13-webdev4.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-webdev4"
        },
        hw: {
            name: "HW6 - BadgerChat",
            url: "https://github.com/CS571-S25/hw6"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_slx0or6x&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Accessibility",
        desc: "Accessible Design and Assistive Technologies",
        dt: "Thursday, Mar 6th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec14-accessibility.pdf"
        },
        ice: {
            name: "ICA F",
            url: "https://docs.google.com/document/d/18rn5PmqWgEvLQrfHgJd4dHYX2QVwE9f14GEBTE8PwGg/edit?tab=t.0#heading=h.k3oq3re8nrea"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_fjqrrjio&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Web Dev 5",
        desc: "Memoization and Deployment",
        dt: "Tuesday, Mar 11th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec15-webdev5.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-webdev5"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_f58y113n&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Mobile Dev 1",
        desc: "React Native Basics",
        dt: "Tuesday, Mar 18th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec16-mobiledev1.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-mobiledev1"
        },
        hw: {
            name: "HW7 - BadgerMart (Mobile!)",
            url: "https://github.com/CS571-S25/hw7"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_sq9dqqym&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Prototyping",
        desc: "Prototyping Theory and Practice",
        dt: "Thursday, Mar 20th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec17-prototyping.pdf"
        },
        ice: {
            name: "ICA G",
            url: "https://docs.google.com/document/d/1uilWgeXtGi-V1LCB5CsydRCBXDno46RuhD1swh6nD84/edit?usp=sharing"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_igv9obd0&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Mobile Dev 2",
        desc: "Animations and Navigation",
        dt: "Tuesday, Apr 1st",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec18-mobiledev2.pdf"
        },
        hw: {
            name: "HW8 - BadgerNews",
            url: "https://github.com/CS571-S25/hw8"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_9q5rk4oq&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Mobile Design",
        desc: "Interactions, Gestures, and Patterns",
        dt: "Thursday, Apr 3rd",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec19-mobile-design.pdf"
        },
        ice: {
            name: "ICA H",
            url: "https://docs.google.com/document/d/1W91-NYBSWOd0Ty3Nwe_yy7hnRZj--MUW4aM7hL0dUuo/edit?tab=t.0#heading=h.k3oq3re8nrea"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_s6jayucv&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Mobile Dev 3",
        desc: "Gestures, Sensors, and Deployment",
        dt: "Tuesday, Apr 8th",
        lectureType: "implementation",
        alert: "<p>Due to illness, this lecture is a re-upload of Fall 2024. Simply replace 'F24' with 'S25'.</p>",
        alertVariant: "warning",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec20-mobiledev3.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-mobiledev3"
        },
        hw: {
            name: "HW9 - BadgerChat (Mobile!)",
            url: "https://github.com/CS571-S25/hw9"
        },
        vid: `https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_w5w2fyk8&config[provider]={"widgetId":"1_y362z3i8"}`
    },
    {
        title: "VUI Design",
        desc: "Command and Control vs. Conversational Agents",
        lectureType: "design",
        dt: "Thursday, Apr 10th",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec21-vui-design.pdf"
        },
        ice: {
            name: "ICA I",
            url: "https://docs.google.com/document/d/112F0uZi2fvfu4cPCFctIjDaz-J2STnoS-7dgdwfVuaQ/edit?tab=t.0#heading=h.k3oq3re8nrea"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_qhtg5875&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "VUI Dev 1",
        desc: "WitAI Basics",
        dt: "Tuesday, Apr 15th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec22-voicedev1.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-voicedev1"
        },
        hw: {
            name: "HW10 - BadgerChat (WitAI!)",
            url: "https://github.com/CS571-S25/hw10"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_ojicdgva&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Designing Agents",
        desc: "Agent Design and Behavior",
        dt: "Thursday, Apr 17th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec23-designing-agents.pdf"
        },
        ice: {
            name: "ICA J",
            url: "https://docs.google.com/document/d/1QzU3vZxgKXReoOyfFDjBin-Udz-zB4z-Yoi3i9qr2Eg/edit?tab=t.0#heading=h.k3oq3re8nrea"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_ba0xl2pc&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "VUI Dev 2",
        desc: "Handling Complex Conversations",
        dt: "Tuesday, Apr 22nd",
        lectureType: "implementation",
        available: true,
        cs571org: false,
        alert: "<p>Unfortunately, HW11 and its generative AI API are <strong>unavailable</strong> to cs571.org users due to their cost. Consider using the <a target='_blank' href='https://openai.com/api/'>OpenAI API</a> instead!</p>",
        alertVariant: "warning",
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec24-voicedev2.pdf"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_c5jmk1o0&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "Usability Evaluation",
        desc: "Usability Testing",
        dt: "Thursday, Apr 24th",
        lectureType: "design",
        available: true,
        cs571org: false,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec25-usability-testing.pdf"
        },
        ice: {
            name: "ICA K",
            url: "https://docs.google.com/document/d/1XKDEe3fwWIjgrzz_AA0hQl55T2a-AWhOtcoreSaV9tc/edit?tab=t.0#heading=h.k3oq3re8nrea"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_9bab4sdi&iframeembed=true&playerId=kaltura_player`
    },
    {
        title: "FullStack Development",
        desc: "FullStack Development using ExpressJS and Docker",
        dt: "Tuesday, April 29th",
        lectureType: "implementation",
        available: true,
        cs571org: true,
        notes: {
            url: "https://raw.githubusercontent.com/CS571-S25/lectures/main/lec26-fullstack.pdf"
        },
        ice: {
            name: "In-Class Exercise",
            url: "https://github.com/CS571-S25/ice-fullstack"
        },
        vid: `https://cdnapisec.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?entry_id=1_8104qq9t&iframeembed=true&playerId=kaltura_player`
    }
];

export default lectures;