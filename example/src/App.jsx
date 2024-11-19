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
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
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
