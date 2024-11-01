import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
} from "../assets";

export const navigation = [{
        id: "0",
        title: "Features",
        url: "#features",
    },
    {
        id: "2",
        title: "Product",
        url: "#pricing",
    },
    {
        id: "3",
        title: "Futures",
        url: "#roadmap",
    },
    {
        id: "4",
        title: "Docs",
        url: "https://cake-letter-bc9.notion.site/eaa33623dae343779892eb4b81f95ecf?v=083535eb4d9b4063828a3758993eff89&pvs=4",
    },
    {
        id: "5",
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = ["/src/assets/logo1.png", "/src/assets/logo2.png", "/src/assets/logo3.png", "/src/assets/logo4.png", "/src/assets/logo5.png"];

export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
];

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];

export const roadmap = [{
        id: "0",
        title: "Prompt Template",
        text: "Initialize and set various common character prompts to help you build AI-bot faster. Covering the following fields: intelligent customer service, IP characters, and painting prompts of multiple genres.",
        status: "done",
        imageUrl: "/src/assets/roadmap/image-1.svg",
        colorful: true,
    },
    {
        id: "1",
        title: "Public Course",
        text: "We are planning collaborations with multiple universities and communities. Open offline and online public courses to teach users how to use Manas OS.",
        status: "progress",
        imageUrl: "../src/assets/roadmap/image-2.svg",
    },
    {
        id: "2",
        title: "Powerful Knowledge Base",
        text: "Intelligently generate questions that users may ask based on conversation records. Support more types of files as knowledge base, such as PPT and excel. Extract website content in real time as a knowledge base.",
        status: "process",
        imageUrl: "../src/assets/roadmap/image-2.svg",
    },
    {
        id: "3",
        title: "Optimize workflow design",
        text: "Solve the problem of user feedback that the workflow is difficult to use, and optimize the user experience through modularization and encapsulated plug-ins.",
        status: "progress",
        imageUrl: "../src/assets/roadmap/image-2.svg",
    },
];

export const collabContent = [{
        id: "0",
        title: "Seamless Integration",
    },
    {
        id: "1",
        title: "Smart Automation",
    },
    {
        id: "2",
        title: "Sound ecosystem",
    },
    {
        id: "3",
        title: "Quick deployment",
    },
];

export const collabApps = [{
        id: "0",
        title: "1",
        icon: "../src/assets/1.svg",
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "2",
        icon: "../src/assets/2.svg",
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: "../src/assets/3.svg",
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "../src/assets/4.svg",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: "../src/assets/5.svg",
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: "../src/assets/6.svg",
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: 6,
        icon: "../src/assets/7.svg",
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: "../src/assets/8.svg",
        width: 38,
        height: 32,
    },
];

export const pricing = [{
        id: "0",
        title: "Free",
        description: "AI-bot, test recommend",
        price: "0",
        features: [
            "Basis AI-bot",
            "100k token/month",
            "Ability to explore the app and its features without any cost",
            "Text/code generation",
            "Image Generation(soon)"
        ],
    },
    {
        id: "1",
        title: "Premium",
        description: "Advanced AI-bot for heavy user",
        price: "3",
        features: [
            "AI-bot with prompt engineering function",
            "1M token/month",
            "Text/code generation",
            "Image Generation(soon)",
            "RAG and knowledge base import",
            "API service",
            "Application debugging",
            "Workflow and SOP generation",
            "Share link without requiring login",
        ],
    },
    {
        id: "2",
        title: "Enterprise",
        description: "Custom AI-bot services",
        price: null,
        features: [
            "AI-bot with prompt engineering function",
            "1M token/month",
            "Text/code generation",
            "Image Generation(soon)",
            "RAG and knowledge base import",
            "API service",
            "Application debugging",
            "Workflow and SOP generation",
            "Share link without requiring login",
            "technical guidance",
            "Custom functions",
            "Unlimited tokens",
        ],
    },
];

export const benefits = [{
        id: "0",
        title: "Emotional Engine",
        text: "Allows your AI-bot to recognize the user's emotions and give human-like responses based on the set personality. ",
        backgroundUrl: "../src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "1",
        title: "Multi-LLM Integration",
        text: "Integrates common large language models (LLM) on the market, including ChatGPT, Llama, Claude, GLM...",
        backgroundUrl: "../src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "2",
        title: "RAG",
        text: "Provides a solution to mitigate some of these issues by augmenting LLMs with external knowledge such as databases. ",
        backgroundUrl: "../src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        id: "3",
        title: "Automated Data Preprocessing",
        text: "Automatically learn various types of documents, including text preprocessing, vectorization, and QA segmentation.",
        backgroundUrl: "../src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "4",
        title: "Workflow Design",
        text: "Converts the work SOP into the AI-Bot workflow, and no code is required for visual operations.",
        backgroundUrl: "../src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "5",
        title: "Standard API",
        text: "Uses Open-AI's API format allows you to seamlessly switch and integrate more powerful manas systems into your products.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
    },
];

export const socials = [{
        id: "0",
        title: "Discord",
        iconUrl: discordBlack,
        url: "https://discord.gg/4dTpkwjUbT",
    },
    {
        id: "1",
        title: "Twitter",
        iconUrl: twitter,
        url: "https://x.com/anuniverse_dao?s=21&t=aTYSUqZasGQjB-LEwj6RWA",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "https://t.me/anuniverseAU",
    },
];