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

import motor from "../assets/img/techs/motor.png";
import inverter from "../assets/img/techs/inverter.png";
import vcu from "../assets/img/techs/vcu.png";

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
    more: true,
  },
  {
    text: "contato",
    link: "/contact",
    more: false,
  },
];

export const techLinks = [
  {
    text: "máquina de fluxo axial",
    link: "/motor",
  },
  {
    text: "inversor de frequência",
    link: "/inverter",
  },
  {
    text: "vcu",
    link: "/vcu",
  },
];

export const aboutText =
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of";

export const servicesTitle = "See what we can do for your projects";

export const servicesCards = [
  { img: { batteryImg }, text: "Motor fodão" },
  { img: { carImg }, text: "Graphics Design" },
  { img: { codingImg }, text: "SEO & Marketing" },
  { img: { computerImg }, text: "Customer Services" },
  { img: { electronicsImg }, text: " App Development" },
  { img: { motorImg }, text: "UI/UX Design" },
];

export const teamText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.";

export const teamInfo = [
  {
    img: { andreImg },
    url: "https://www.linkedin.com/in/andrevenzon/",
    name: "André Venzon",
    position: "CTO",
  },
  {
    img: { thiagoImg },
    url: "https://www.linkedin.com/in/thiagotmotta/",
    name: "Thiago Motta",
    position: "CEO",
  },
  {
    img: { gustavoImg },
    url: "https://www.linkedin.com/in/-gustavo-pereira-/",
    name: "Gustavo Pereira",
    position: "CPO",
  },
];

export const techsText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.";

export const techsInfo = [
  {
    name: "Máquinas de Fluxo Axial",
    description: "Alta densidade de potência",
    img: { axialImg },
    url: "/motor",
  },
  {
    name: "Inversores de Frequência",
    description: "não tenho mais criatividade",
    img: { inverterImg },
    url: "/inverter",
  },
  {
    name: "Unidade de Controle Veicular",
    description: "Robustez e confiabilidade",
    img: { vcuImg },
    url: "/vcu",
  },
];

export const footerAboutText =
  "Desenvolvimento de sistema de tração e acionamento para veículos elétricos e híbridos, entregando soluções otimizadas e intelegentes aos nossos parceiros";

export const footerAdress = {
  street: "Rua Cristóvão Nunes Píres,nº 110, sala 903",
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
    link: "/techs",
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
    img: motor,
    alt: "vista explodida motor de fluxo axial",
    title: "Motor de Fluxo",
    spanText: "Axial",
    contentText:
      "Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.",
    link: "/motor",
  },
  inverter: {
    img: inverter,
    alt: "vista explodida inversor de frequência",
    title: "Inversor de",
    spanText: "Frequência",
    contentText:
      "Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.",
    link: "/inverter",
  },
  vcu: {
    img: vcu,
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
    mainImg: motor,
    mainAlt: "vista explodida motor de fluxo axial",
    imgList: [
      {
        img: motor,
        alt: "vista explodida motor de fluxo axial",
        title: "Vista explodida",
      },
      {
        img: motor,
        alt: "vista explodida motor de fluxo axial",
        title: "Vista explodida",
      },
      {
        img: motor,
        alt: "vista explodida motor de fluxo axial",
        title: "Vista explodida",
      },
    ],
  },
  {
    url: "/inverter",
    title: "Inversor de Frequência",
    spanText: "alta eficiência",
    mainText:
      "Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.",
    mainImg: inverter,
    mainAlt: "vista explodida inversor",
    imgList: [
      {
        img: inverter,
        alt: "vista explodida inversor",
        title: "Vista explodida",
      },
      {
        img: inverter,
        alt: "vista explodida inversor",
        title: "Vista explodida",
      },
      {
        img: inverter,
        alt: "vista explodida inversor",
        title: "Vista explodida",
      },
    ],
  },
  {
    url: "/vcu",
    title: "Unidade de Controle Veicular",
    spanText: "alta eficiência",
    mainText:
      "Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.",
    mainImg: vcu,
    mainAlt: "imagem placa eletrônica da unidade de controle veicular",
    imgList: [
      {
        img: vcu,
        alt: "imagem placa eletrônica da unidade de controle veicular",
        title: "Vista explodida",
      },
      {
        img: vcu,
        alt: "imagem placa eletrônica da unidade de controle veicular",
        title: "Vista explodida",
      },
      {
        img: vcu,
        alt: "imagem placa eletrônica da unidade de controle veicular",
        title: "Vista explodida",
      },
    ],
  },
];
