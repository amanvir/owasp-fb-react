import theme from "mdx-deck/themes";
import vs from "react-syntax-highlighter/styles/prism/vs";
import js from "react-syntax-highlighter/languages/prism/javascript";
import jsxt from "react-syntax-highlighter/languages/prism/jsx";

export default {
  ...theme,
  prism: {
    style: vs,
    languages: {
      javascript: js,
      jsx: jsxt
    }
  },
  css: {
    fontSize: "18pt",
    textAlign: "center"
  },
  ol: {
    fontSize: "20px"
  },
  p: {
    fontSize: "inherit"
  }
};
