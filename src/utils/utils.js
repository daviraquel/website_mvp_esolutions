import batteryImg from "../assets/img/icons/battery.png";
import carImg from "../assets/img/icons/car.png";
import codingImg from "../assets/img/icons/coding.png";
import computerImg from "../assets/img/icons/computer.png";
import electronicsImg from "../assets/img/icons/electronics.png";
import motorImg from "../assets/img/icons/motor.png";

import andreImg from "../assets/img/team/andre.jpg";
import thiagoImg from "../assets/img/team/thiago.jpg";
import gustavoImg from "../assets/img/team/gustavo.jpg";

import axialImg from "../assets/img/products/axial.png";
import inverterImg from "../assets/img/products/inverter.png";
import vcuImg from "../assets/img/products/vcu.png";

import acate1 from "../assets/img/acate/acate1.png";
import acate2 from "../assets/img/acate/acate2.png";

export const dropdownLinks = [
  {
    text: "home",
    link: "/",
    more: false,
  },
  {
    text: "sobre",
    link: "#about",
    more: false,
  },
  {
    text: "tecnologia",
    link: "/techs",
    more: false, //mudar para true para habilitar projetos
  },
  {
    text: "contato",
    link: "/contact",
    more: false,
  },
];

export const techLinks = [
  {
    text: "Máquina de Fluxo Axial",
    link: "/motor",
  },
  {
    text: "Inversor de Frequência",
    link: "/inverter",
  },
  {
    text: "VCU",
    link: "/vcu",
  },
];

export const aboutText =
  "Desenvolvemos projetos e produtos para veículos elétricos e híbridos, atendendo desde a linha leve até a pesada. Nosso foco é o desenvolvimento do sistema de tração e acionamento, entregando soluções otimizadas e inteligentes aos nossos parceiros.​";

export const servicesTitle = "Como podemos ajudar no seu projeto";

export const servicesCards = [
  { img: { batteryImg }, text: "Sistemas de armazenamento de energia" },
  { img: { carImg }, text: "Integração de sistemas automotivos" },
  { img: { codingImg }, text: "Algoritmos de controle" },
  { img: { computerImg }, text: "Simulação computacional" },
  { img: { electronicsImg }, text: "Unidade de controle veícular" },
  { img: { motorImg }, text: "Motores elétricos" },
];

export const teamText =
  "Com mais de 7 anos de experiência no desenvolvimento de veículos elétricos, somos especializados em eletrônica de potência e máquinas elétricas.";

export const teamInfo = [
  {
    img: { andreImg },
    url: "https://www.linkedin.com/in/andrevenzon/",
    name: "André Venzon",
    position: "CTO & Co-founder",
  },
  {
    img: { thiagoImg },
    url: "https://www.linkedin.com/in/thiagotmotta/",
    name: "Thiago Motta",
    position: "CEO & Co-founder",
  },
  {
    img: { gustavoImg },
    url: "https://www.linkedin.com/in/-gustavo-pereira-/",
    name: "Gustavo Pereira",
    position: "CPO & Co-founder",
  },
];

export const techsText =
  "Dimensionamos, projetamos e produzimos sistemas de tração de alta tecnologia. Oferecemos soluções personalizados de acordo com a sua necessidade.";

export const techsInfo = [
  {
    name: "Máquinas de Fluxo Axial",
    description:
      "Design eletromagnético mais eficiente, resultando no menor uso de material por kW de potência. Configuração de ímãs permanentes de rotor duplo, maior relação torque-peso. Facilidade de manufatura e redução de custos.",
    img: { axialImg },
    url: "/motor",
  },
  {
    name: "Inversores de Frequência",
    description:
      "Redução ativa das perdas de comutação, com modulação otimizada. Carcaça com trocador de calor integrado e arrefecimento com fluido refrigerante (WEG), o que garante dimensões compactas. ASIL-D capable, de acordo com normativa ISO 26262.",
    img: { inverterImg },
    url: "/inverter",
  },
  {
    name: "Unidade de Controle Veicular",
    description:
      "Compacta, robusta e eficiente, proteção contra água e poeira (IP69K), Protocolo de comunicação padrão automotivo (CAN), isolação galvânica de mais de 1500 V, Processador ARM ASIL-D capable, de acordo com normativa ISO 26262.",
    img: { vcuImg },
    url: "/vcu",
  },
];

export const footerAboutText =
  "Desenvolvimento de sistema de tração e acionamento para veículos elétricos e híbridos, entregando soluções otimizadas e inteligentes aos nossos parceiros";

export const footerAdress = {
  street: "Rua Cristóvão Nunes Píres, nº 110",
  room: "Ed. Hoepck Blue Center - sala 903",
  postalCode: "88010-120",
  city: "Florianópolis-SC",
  phone: "+55 48 3054-2065",
  email: "contato@mvpesolutions.com",
};

export const footerLinks = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Sobre",
    link: "/construction",
  },
  {
    text: "Tecnologia",
    link: "/construction",
  },
  {
    text: "Contato",
    link: "/contact",
  },
];

export const acateLinks = [
  {
    img: acate1,
    link: "https://www.acate.com.br/",
    text: "selo startup afiliada associação catarinense de tecnologia",
  },
  {
    img: acate2,
    link: "https://energia.acate.com.br/a-vertical/",
    text: "selo membro acate energia",
  },
];

export const titles = {
  contactPage: {
    text: "Entre em contato",
    spanText: "vamos acelerar juntos",
  },
  techsPage: {
    text: "Nossas Tecnologias",
    spanText: "Desenvolvimento próprio",
  },
  motor: {
    text: "Máquina de Fluxo Axial",
    spanText: "alta eficiência",
  },
  inverter: {
    text: "Inversor de Frequência",
    spanText: "alta eficiência",
  },
  vcu: {
    text: "Unidade de Controle Veicular",
    spanText: "alta eficiência",
  },
};

export const techContent = {
  motor: {
    img: axialImg,
    alt: "motor de fluxo axial",
    title: "Motor de Fluxo",
    spanText: "Axial",
    contentText:
      "Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.",
    link: "/motor",
  },
  inverter: {
    img: inverterImg,
    alt: "vista explodida inversor de frequência",
    title: "Inversor de",
    spanText: "Frequência",
    contentText:
      "Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.",
    link: "/inverter",
  },
  vcu: {
    img: vcuImg,
    alt: "imagem placa eletrônica da unidade de controle veicular",
    title: "Unidade de Controle",
    spanText: "Veicular",
    contentText:
      "Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.",
    link: "/vcu",
  },
};

export const productPages = [
  {
    url: "/motor",
    title: "Motor de Fluxo Axial",
    spanText: "alta eficiência",
    mainText:
      "Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.",
    mainImg: axialImg,
    mainAlt: "vista explodida motor de fluxo axial",
    imgList: [
      {
        img: axialImg,
        alt: "motor de fluxo axial",
        title: "Motor de Fluxo Axial",
      },
      {
        img: axialImg,
        alt: "motor de fluxo axial",
        title: "Motor de Fluxo Axial",
      },
      {
        img: axialImg,
        alt: "motor de fluxo axial",
        title: "Motor de Fluxo Axial",
      },
    ],
  },
  {
    url: "/inverter",
    title: "Inversor de Frequência",
    spanText: "alta eficiência",
    mainText:
      "Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.",
    mainImg: inverterImg,
    mainAlt: "inversor de frequência",
    imgList: [
      {
        img: inverterImg,
        alt: "inversor de frequência",
        title: "Inversor de frequência",
      },
      {
        img: inverterImg,
        alt: "inversor de frequência",
        title: "Inversor de frequência",
      },
      {
        img: inverterImg,
        alt: "inversor de frequência",
        title: "Inversor de frequência",
      },
    ],
  },
  {
    url: "/vcu",
    title: "Unidade de Controle Veicular",
    spanText: "alta eficiência",
    mainText:
      "Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.",
    mainImg: vcuImg,
    mainAlt: "imagem placa eletrônica da unidade de controle veicular",
    imgList: [
      {
        img: vcuImg,
        alt: "imagem placa eletrônica da unidade de controle veicular",
        title: "Unidade de Controle Veicular",
      },
      {
        img: vcuImg,
        alt: "imagem placa eletrônica da unidade de controle veicular",
        title: "Unidade de Controle Veicular",
      },
      {
        img: vcuImg,
        alt: "imagem placa eletrônica da unidade de controle veicular",
        title: "Unidade de Controle Veicular",
      },
    ],
  },
];
