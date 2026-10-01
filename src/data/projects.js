/**
 * PROJECTS DATA
 * The real projects developed by Sakshi.
 * Configurable live URLs, GitHub URLs, and full case study details.
 */

export const projectsData = [
  {
    id: "mudra-event",
    title: "Mudra Event",
    slug: "mudra-event",
    category: "Business Website",
    shortDescription: "A business website created for an event decoration business to showcase decoration services, categories and contact information.",
    overview: "Mudra Event is a dedicated business website built to provide a digital catalog for a wedding and celebration decor company. It allows potential clients to browse decor packages, examine gallery photos of past events, and easily reach out for quotes.",
    businessProblem: "The business previously operated primarily through scattered social media direct messages and offline inquiries. Potential clients could not easily browse organized decoration themes, check service packages, or find comprehensive contact details in one place.",
    solution: "Designed and developed a structured multi-section business website with Django and MySQL. It features organized decoration service categories, an interactive photo gallery showcasing previous events, and responsive inquiry options.",
    outcome: "Built and deployed a clean, responsive online presence that centralizes the event company's service offerings, provides clear contact points, and presents their portfolio professionally.",
    features: [
      "Service categories for weddings, receptions & parties",
      "Categorized photo gallery for past decoration projects",
      "Fully responsive design for phones and desktops",
      "Direct contact options & WhatsApp inquiry link",
      "Clear business information and location details",
      "Production-ready deployment"
    ],
    technologies: ["Django", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    // Configurable links: If left empty, buttons are gracefully handled
    liveUrl: "", 
    githubUrl: "",
    previewType: "event", // Used by UI mockup renderer
    accentColor: "from-amber-500/10 to-orange-500/10",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200"
  },
  {
    id: "hotel-tejas",
    title: "Hotel Tejas",
    slug: "hotel-tejas",
    category: "Food Ordering & Chatbot System",
    shortDescription: "A food ordering system with chatbot-based interaction, order tracking, recommendations and administrative functionality.",
    overview: "Hotel Tejas is a modern web-based food ordering platform integrated with an automated conversational chatbot. The system streamlines customer ordering, provides automated dish recommendations, and equips staff with order tracking.",
    businessProblem: "During busy rush hours, the restaurant faced bottlenecks handling phone orders and customer inquiries regarding menu availability, order status, and specials.",
    solution: "Built a high-performance backend with FastAPI and MySQL, combined with Dialogflow for intelligent natural language chatbot conversations. Customers can browse food items, order via chat or menu, track their order status, and receive recommendations.",
    outcome: "Developed an interactive ordering portal with administrative dashboard capabilities, automated chatbot interactions, and reliable MySQL database order storage.",
    features: [
      "Conversational chatbot powered by Dialogflow",
      "Interactive food catalog and ordering workflow",
      "Real-time order tracking and status updates",
      "Smart food and menu recommendations",
      "Administrative order management dashboard",
      "Relational MySQL database integration"
    ],
    technologies: ["FastAPI", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Dialogflow"],
    liveUrl: "",
    githubUrl: "",
    previewType: "restaurant",
    accentColor: "from-emerald-500/10 to-teal-500/10",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
  },
  {
    id: "smart-mock-interview",
    title: "Smart Mock Interview",
    slug: "smart-mock-interview",
    category: "AI-Powered Web Application",
    shortDescription: "An AI-powered mock interview system that generates interview questions and provides feedback and scoring.",
    overview: "Smart Mock Interview is an intelligent web application designed to help job aspirants practice technical and behavioral interviews. Powered by local Ollama LLM integration, it creates customized interview simulations and produces structured scoring feedback.",
    businessProblem: "Job seekers often lack realistic interview practice with objective, instant feedback. Organizing manual mock interviews is time-consuming and expensive for learners.",
    solution: "Engineered a robust full-stack application using Spring Boot and MySQL, integrating Ollama for on-demand question generation and automated response evaluation with scoring rubrics.",
    outcome: "Created a comprehensive interview simulation tool featuring role-based questions, dynamic evaluation, and performance dashboards for tracking progress over time.",
    features: [
      "AI-generated domain-specific interview questions",
      "Structured interactive interview sessions",
      "Objective feedback and scoring evaluation",
      "Personalized candidate review dashboard",
      "Reliable Spring Boot architecture with MySQL"
    ],
    technologies: ["Spring Boot", "MySQL", "Ollama"],
    liveUrl: "",
    githubUrl: "",
    previewType: "ai-interview",
    accentColor: "from-blue-500/10 to-indigo-500/10",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200"
  }
];

export default projectsData;
