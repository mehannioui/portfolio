import adobexdicon from '../../assets/icons/adobexdicon.svg';
import canvaicon from '../../assets/icons/canvaicon.svg';
import figmaicon from '../../assets/icons/figmaicon.svg';
import htmlicon from '../../assets/icons/htmlicon.svg';
import cssicon from '../../assets/icons/cssicon.svg';
import javascripticon from '../../assets/icons/javascripticon.svg';
import typescripticon from '../../assets/icons/typescripticon.svg';
import reacticon from '../../assets/icons/reacticon.svg';
import nextjsicon from '../../assets/icons/nextjsicon.svg';
import nodejsicon from '../../assets/icons/nodejsicon.svg';
import tailwindcssicon from '../../assets/icons/tailwindicon.svg';
import mongodbicon from '../../assets/icons/mongoicon.svg';
import vuejsicon from '../../assets/icons/vueicon.svg';
import expressicon from '../../assets/icons/expressicon.svg';
import sassscssicon from '../../assets/icons/sassicon.svg';
import trelloicon from '../../assets/icons/trelloicon.svg';
import apiicon from '../../assets/icons/apiicon.svg';
import axiosicon from '../../assets/icons/axiosicon.svg';
import spotifyicon from '../../assets/icons/spotifyicon.svg';
import netlifyicon from '../../assets/icons/netlifyicon.svg';
import rendericon from '../../assets/icons/rendericon.svg';
import jwticon from '../../assets/icons/jwticon.svg';
import wordpressicon from '../../assets/icons/wordpressicon.svg';
import shopifyicon from '../../assets/icons/shopifyicon.svg';
import webflowicon from '../../assets/icons/webflowicon.svg';
import tastyMockup from '../../assets/img/tasty_mockup.webp';
import instorMockup from '../../assets/img/instor_mockup.webp';
import silentmoonMockup from '../../assets/img/silentmoon_mockup.webp';
import profilepicture from '../img/me2.webp';
import caricon from '../../assets/icons/car-icon.svg';
import travelicon from '../../assets/icons/travel-icon.svg';
import hardwareicon from '../../assets/icons/hardware-icon.svg';
import nextjsiconwhite from '../../assets/icons/nextjsiconwhite.svg';
import expressiconwhite from '../../assets/icons/expressiconwhite.svg';
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from 'react-icons/go';
import { FiGithub, FiLink, FiLinkedin, FiMail } from 'react-icons/fi';
import Imprint from '../../components/Imprint';
import Privacy from '../../components/Privacy';

export const headerIntroData = {
  title: {
    en: "Hi, I'm Mohamed",
    fr: 'Salut, je suis Mohamed',
  },
  subtitle: 'Fullstack Developer & Machine Learning Engineer',
  description: {
    en: "I'm Mohamed, a fullstack developer and machine learning engineer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for both web development and machine learning. Let's shape digital solutions together and shape the future!",
    fr: "Je suis Mohamed, un développeur fullstack et ingénieur en apprentissage automatique avec l'objectif de faire avancer ma carrière et de participer à des projets inspirants. Ici, je présente mon travail et ma passion pour le développement web et l'apprentissage automatique. Construisons ensemble des solutions numériques et façonnons l'avenir!",
  },
  buttons: [
    {
      name: 'Contact',
      label: {
        en: 'Contact me',
        fr: 'Contactez Moi',
      },
      icon: FiMail,
      color: 'main-btn',
    },
    {
      name: 'Projects',
      label: {
        en: 'My Projects',
        fr: 'Mes Projets',
      },
      icon: FiGithub,
      color: 'secondary-btn',
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: 'Tasty App',

    description:
      'A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.',
    description_FR:
      'A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.',
    technologies: [
      { name: 'Html', icon: htmlicon },
      { name: 'CSS', icon: cssicon },
      { name: 'JavaScript', icon: javascripticon },
      { name: 'REST Api', icon: apiicon },
      { name: 'React', icon: reacticon },
      { name: 'Figma', icon: figmaicon },
      { name: 'Canva', icon: canvaicon },
      { name: 'Netlify', icon: netlifyicon },
      { name: 'Trello', icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: 'https://delightful-cheesecake-9b19f0.netlify.app/',
    githuburl: 'https://github.com/mehannioui/Frontend_Abschlussprojekt_Tasty',
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: 'main-btn',
      second: 'secondary-btn',
      icon: 'white',
      projectcolor: '#70B9BE',
    },
  },
  {
    title: 'Silentmoon',
    description:
      'A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.',
    description_FR:
      'A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.',
    technologies: [
      { name: 'Html', icon: htmlicon },
      { name: 'CSS', icon: cssicon },
      { name: 'JavaScript', icon: javascripticon },
      { name: 'Spotify Api', icon: spotifyicon },
      { name: 'React', icon: reacticon },
      { name: 'JWT & Bcrypt', icon: jwticon },
      { name: 'Axios', icon: axiosicon },
      { name: 'MongoDB', icon: mongodbicon },
      { name: 'Express', icon: expressiconwhite },
      { name: 'Node.js', icon: nodejsicon },
      { name: 'Figma', icon: figmaicon },
      { name: 'Render', icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: 'https://silentmoon-grpw.onrender.com/',
    githuburl:
      'https://github.com/mehannioui/Fullstack_Abschlussprojekt_SilentMoon',
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: 'main-btn',
      second: 'secondary-btn',
      icon: 'white',
      projectcolor: '#FFD5BD',
    },
  },
  {
    title: 'Furniture Organizer',

    description:
      'A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.',
    description_FR:
      'A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.',
    technologies: [
      { name: 'Html', icon: htmlicon },
      { name: 'CSS', icon: cssicon },
      { name: 'JavaScript', icon: javascripticon },
      { name: 'React', icon: reacticon },
      { name: 'JWT & Bcrypt', icon: jwticon },
      { name: 'Axios', icon: axiosicon },
      { name: 'MongoDB', icon: mongodbicon },
      { name: 'Express', icon: expressiconwhite },
      { name: 'Node.js', icon: nodejsicon },
      { name: 'Figma', icon: figmaicon },
      { name: 'Render', icon: rendericon },
      { name: 'Trello', icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: 'https://mern-haushaltsbuch.onrender.com/',
    githuburl: 'https://github.com/mehannioui/Furniture_MERN',
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: 'main-btn',
      second: 'secondary-btn',
      icon: 'white',
      projectcolor: '#E3964A',
    },
  },
] as const;

export const liveTickerData = {
  content: {
    en: 'More Projects on Github',
    fr: 'Plus de projets sur Github',
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: 'WebDevelopment',
    skills: [
      {
        title: 'HTML',
        hash: '#html',
        icon: htmlicon,
        color: '#F1662A',
      },
      {
        title: 'CSS',
        hash: '#CSS',
        icon: cssicon,
        color: '#1572B6',
      },
      {
        title: 'JavaScript',
        hash: '#JavaScript',
        icon: javascripticon,
        color: '#F7DF1E',
      },
      {
        title: 'TypeScript',
        hash: '#TypeScript',
        icon: typescripticon,
        color: '#007ACC',
      },
      {
        title: 'React',
        hash: '#React',
        icon: reacticon,
        color: '#61DAFB',
      },
      {
        title: 'Next.js',
        hash: '#Next.js',
        icon: [nextjsicon, nextjsiconwhite],
        color: ['#000000', '#FFFFFF'],
      },
      {
        title: 'Node.js',
        hash: '#Node.js',
        icon: nodejsicon,
        color: '#339933',
      },
      {
        title: 'Tailwind',
        hash: '#Tailwind',
        icon: tailwindcssicon,
        color: '#38B2AC',
      },
      {
        title: 'MongoDB',
        hash: '#MongoDB',
        icon: mongodbicon,
        color: '#449C45',
      },
      {
        title: 'Vue.js',
        hash: '#Vue.js',
        icon: vuejsicon,
        color: '#4FC08D',
      },
      {
        title: 'Express',
        hash: '#Express',
        icon: [expressicon, expressiconwhite],
        color: ['#000000', '#FFFFFF'],
      },
      {
        title: 'SASS/SCSS',
        hash: '#SASS/SCSS',
        icon: sassscssicon,
        color: '#CC6699',
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: 'Design',
    skills: [
      { title: 'Figma', hash: '#Figma', icon: figmaicon, color: '#F24E1E' },
      {
        title: 'Adobe XD',
        hash: '#Adobe XD',
        icon: adobexdicon,
        color: '#FF61F6',
      },
      { title: 'Canva', hash: '#Canva', icon: canvaicon, color: '#00C4CC' },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: 'CMS',
    skills: [
      {
        title: 'WordPress',
        hash: '#WordPress',
        icon: wordpressicon,
        color: '#21759B',
      },
      {
        title: 'Shopify',
        hash: '#Shopify',
        icon: shopifyicon,
        color: '#7AB55C',
      },
      {
        title: 'Webflow',
        hash: '#Webflow',
        icon: webflowicon,
        color: '#4353FF',
      },
    ],
  },
] as const;

export const navLinks = [
  { en: 'Home', fr: 'Home', hash: '#home', icon: GoHome },
  { en: 'Skills', fr: 'Skills', hash: '#skills', icon: GoStack },
  { en: 'Projects', fr: 'Projets', hash: '#projects', icon: GoProject },
  { en: 'About me', fr: 'A propos de moi', hash: '#about-me', icon: GoPerson },
  { en: 'Contact', fr: 'Contact', hash: '#contact', icon: GoMail },
] as const;

export const FooterLinks = [
  { en: 'Imprint', fr: 'Empreinte', hash: '#imprint', data: <Imprint /> },
  { en: 'Privacy', fr: 'Confidentialité', hash: '#privacy', data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: 'mailto:mehannioui@gmail.com',
  text: 'mehannioui@gmail.com',
} as const;

export const sideBarLeftSocials = [
  {
    link: 'https://www.linkedin.com/in/mehannioui/',
    icon: FiLinkedin,
    altimgname: 'linkedin',
  },
  {
    link: 'https://github.com/mehannioui',
    icon: FiGithub,
    altimgname: 'github',
  },
  {
    link: 'mailto:mehannioui@gmail.com',
    icon: FiMail,
    altimgname: 'mail',
  },
] as const;

export const quotesData = [
  {
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    fr: '"Il n\'est pas du tout important de bien faire les choses la première fois. Il est essentiel de bien faire les choses la dernière fois."',
    author: 'Andrew Hunt',
  },
  {
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
    fr: `"Le web est comme une toile, et le code est la peinture. Créez votre chef-d'œuvre."`,
  },
] as const;

export const aboutMeData = {
  title: 'About me',
  title_FR: 'A propos de moi',
  description: 'A few code snippets about me',
  description_FR: 'Quelques extraits de code à propos de moi',
  paragraphs_EN: [
    {
      title: 'Navigating the Tech Landscape',
      description:
        "When I'm not immersed in the digital world, I'm often found exploring the latest advancements in technology and AI. The constant evolution of the tech landscape keeps me on my toes, fueling my passion for continuous learning and innovation",
      icon: hardwareicon,
    },
    {
      title: 'Delving into the Psychology of Learning',
      description:
        'Beyond coding and technology, I have a deep interest in understanding the psychology of learning. I am fascinated by how we acquire new knowledge and skills, and how this process can be optimized. This passion not only enhances my own learning but also informs my approach when creating user-centric applications.',
      icon: caricon,
    },
    {
      title: 'The Joy of Discovery as a Life Motto',
      description:
        'My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.',
      icon: travelicon,
    },
  ],
  paragraphs_FR: [
    {
      title: 'Naviguer dans le paysage technologique',
      description:
        "Quand je ne suis pas plongé dans le monde numérique, je suis souvent en train d'explorer les dernières avancées en technologie et en IA. L'évolution constante du paysage technologique me tient en haleine, alimentant ma passion pour l'apprentissage continu et l'innovation.",
      icon: hardwareicon,
    },
    {
      title: "Plongée dans la psychologie de l'apprentissage",
      description:
        "Au-delà du codage et de la technologie, je m'intéresse profondément à la compréhension de la psychologie de l'apprentissage. Je suis fasciné par la manière dont nous acquérons de nouvelles connaissances et compétences, et comment ce processus peut être optimisé. Cette passion non seulement améliore mon propre apprentissage, mais informe également mon approche lors de la création d'applications centrées sur l'utilisateur.",
      icon: caricon,
    },
    {
      title: 'La Joie de la Découverte comme Devise de Vie',
      description:
        "Mon parcours en tant que développeur web n'est qu'une partie de mon chemin de vie. Je vis selon la devise que l'aventure ne commence que lorsque vous quittez le familier. Découvrir de nouveaux lieux et cultures est ma forme d'inspiration créative.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    en: 'Contact',
    fr: 'Contact',
  },
  description: {
    en: 'Write me a message and I will get back to you.',
    fr: 'Écrivez-moi un message et je vous répondrai.',
  },
  inputfields: [
    {
      name: 'name',
      placeholder: {
        en: 'Your Name',
        fr: 'Votre Nom',
      },
      type: 'text',
      validation: {
        en: 'Please fill in your name',
        fr: 'Veuillez remplir votre nom',
      },
      pattern: '{2}',
    },
    {
      name: 'email',
      placeholder: {
        en: 'Your E-Mail',
        fr: 'Votre E-Mail',
      },
      type: 'email',
      validation: {
        en: 'Please fill in your email',
        fr: 'Veuillez remplir votre email',
      },
      pattern: '[@]{4}',
    },
    {
      name: 'subject',
      placeholder: {
        en: 'Your Subject',
        fr: 'Votre Sujet',
      },
      type: 'text',
      validation: {
        en: 'Please fill in your subject',
        fr: 'Veuillez remplir votre sujet',
      },
      pattern: '{10}',
    },
  ],
  textarea: {
    placeholder: {
      en: 'Your Message',
      fr: 'Votre Message',
    },
    name: 'message',
    rows: 10,
    validation: {
      en: 'Please fill in your message',
      fr: 'Veuillez remplir votre message',
    },
    pattern: '{10}',
  },
  button: {
    value: {
      en: 'Send',
      fr: 'Envoyer',
    },
  },
  icon: FiMail,
  iconcolor: '#FFFFFF',
  colors: {
    main: 'main-btn',
    second: 'secondary-btn',
    icon: 'white',
  },
  privacyOptIn: {
    checkbox: {
      en: 'I agree that Mohamed may use my personal data (name and e-mail address) to contact me.',
      fr: "J'accepte que Mohamed puisse utiliser mes données personnelles (nom et adresse e-mail) pour me contacter.",
    },
    description: {
      en: 'By submitting this request, you acknowledge that you have read the Private Policy',
      fr: 'En soumettant cette demande, vous reconnaissez avoir lu la Politique de Confidentialité',
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    en: '🦄 The live demo will open shortly. Starting servers...',
    fr: "🦄 La démo en direct s'ouvrira sous peu. Démarrage des serveurs...",
  },
  successEmailSent: {
    en: '🦄 Thank you for your email. I will get back to you as soon as possible',
    fr: '🦄 Merci pour votre email. Je vous répondrai dès que possible',
  },
  failedEmailSent: {
    en: '🦄 Unfortunately the sending of your email did not work. Please try again later',
    fr: "🦄 Malheureusement, l'envoi de votre email n'a pas fonctionné. Veuillez réessayer plus tard",
  },
  failedValidationName: {
    en: 'Please fill in your name',
    fr: 'Veuillez remplir votre nom',
  },
} as const;

export const buttonLabels = {
  language: {
    en: 'EN',
    fr: 'FR',
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  'outer-right-to-inner-left': {
    marginRight: '4rem',
  },
  'outer-left-to-inner-right': {
    marginLeft: '4rem',
    transform: 'scaleX(-1)',
  },
  'inner-right-to-middle': {
    width: '100%',
    transform: 'scaleY(1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'inner-left-to-middle': {
    width: '100%',
    transform: 'scaleX(-1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  'middle-to-inner-right': {
    width: '100%',
    transform: 'scale(1,-1)',
  },
  'middle-to-inner-left': {
    width: '100%',
    transform: 'scale(-1,-1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    width: '100%',
    transform: 'scaleX(-1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ['25rem', '15rem'],
  },
  middle: {
    heights: ['35rem', '25rem'],
  },
  large: {
    heights: ['45rem', '35rem'],
  },
  extraLarge: {
    heights: ['55rem', '45rem'],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  'outer-right-to-inner-left': {
    marginTop: '-6rem',
    width: '100%',
  },
  'outer-left-to-inner-right': {
    marginTop: '-6rem',
    width: '100%',
  },
  'inner-right-to-middle': {
    marginTop: '-20rem',
    width: '50%',
    zIndex: '-10',
  },
  'inner-left-to-middle': {
    marginTop: '-10rem',
    width: '50%',
    zIndex: '-10',
  },
  'middle-to-inner-right': {
    width: '75%',
  },
  'middle-to-inner-left': {
    marginTop: '-2.5rem',
    width: '50%',
  },
  middle: {
    marginTop: '-2.5rem',
    width: '0%',
    display: 'none',
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  'outer-right-to-inner-left': {
    widths: ['74.45%', '74.45%'],
  },
  'outer-left-to-inner-right': {
    widths: ['75%', '75%'],
  },
  'inner-right-to-middle': {
    widths: ['50.1%', '49%'],
  },
  'inner-left-to-middle': {
    widths: ['50.1%', '49%'],
  },
  'middle-to-inner-right': {
    widths: ['33.4%', '50.03%'],
  },
  'middle-to-inner-left': {
    widths: ['50.1%', '49%'],
  },
  middle: {
    widths: ['0%', '0%'],
  },
};
