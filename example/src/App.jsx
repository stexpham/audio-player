import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);

const tracks = [
  {
    url: "https://bucket.stepham.com/cdn/stromaepapaoutai.mp3",
    title: "stromae - papaoutai",
    tags: ["World"],
  },
  {
    url: "https://bucket.stepham.com/cdn/phaidaucuoctinhnganngan.mp3",
    title: "Ngan Ngan - Phai Dau Cuoc Tinh",
    tags: ["Vietnam"],
  },
  {
    url: "https://bucket.stepham.com/cdn/faded-jacla-remix-naxsy-douyin.mp3",
    title: "faded - jacla remix naxsy douyin",
    tags: ["Instru"],
  },
  {
    url: "https://bucket.stepham.com/cdn/SashaAlexSloan-DancingWithYourGhost.mp3",
    title: "Sasha Alex Sloan - Dancing With Your Ghost",
    tags: ["World"],
  },
  {
    url: "https://bucket.stepham.com/cdn/Goodbyekiss-JackyCheung-SaxCover.mp3",
    title: "Jacky Cheung sax cover- Goodbye Kiss",
    tags: ["Instru"],
  },
  {
    url: "https://bucket.stepham.com/cdn/The%20Sound%20Of%20Silence%20by%20Wuauquikuna%20%20Panflute%20%20Toyos.mp3",
    title: "The Sound Of Silence by Wuauquikuna Panflute Toyos",
    tags: ["Instru"],
  },
  {
    url: "https://bucket.stepham.com/cdn/Meditate.mp3",
    title: "Meditate",
    tags: ["Instru"],
  },
  {
    url: "https://bucket.stepham.com/cdn/Sacred%20Pool%20Of%20Tears.mp3",
    title: "Sacred Pool Of Tears",
    tags: ["Instru"],
  },
  {
    url: "https://bucket.stepham.com/cdn/can-not-forgive-cha-soo-kyung.mp3",
    title: "Can not Forgive Cha Soo Kyung",
    tags: ["Asia"],
  },
  {
    url: "https://bucket.stepham.com/cdn/su-thanh-hoa.mp3",
    title: "Su thanh hoa",
    tags: ["Asia"],
  },
  {
    url: "https://bucket.stepham.com/cdn/Mary%20On%20A%20Cross%20Slowed%20Reverb%20Ghost.mp3",
    title: "Mary On A Cross Slowed Reverb Ghost",
    tags: ["World"],
  },
  {
    url: "http://stephanie.dreamhosters.com/music_backup/thailandsongneedtofindname.mp3",
    title: "Campuchia Song",
    tags: ["Asia"],
  },
  {
    url: "http://stephanie.dreamhosters.com/music_backup/stereohearts.mp3",
    title: "Stereo Hearts",
    tags: ["World"],
  },
  {
    url: "http://stephanie.dreamhosters.com/music_backup/729656166.mp3",
    title: "729656166",
    tags: ["Asia"],
  },
  {
    url: "https://ste.box.com/shared/static/ea4m4n8vbkyd0qepr98iqi4d3bo67fkn.mp3",
    title: "Hiepkhach hanh",
    tags: ["Asia"],
  },
  {
    url: "http://stephanie.dreamhosters.com/music_backup/Tahuimofaba.mp3",
    title: "Ta hui mo fa ba",
    tags: ["Asia"],
  },
  
  
];

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Player trackList={tracks} />
      <Footer />
    </Wrapper>
  );
};

export default App;
