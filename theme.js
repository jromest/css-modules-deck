import { future } from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";
import prismCss from "react-syntax-highlighter/languages/prism/css";
import prismJson from "react-syntax-highlighter/languages/prism/json";

export default {
  ...future,
  prism: {
    style: okaidia,
    languages: {
      css: prismCss,
      json: prismJson
    }
  }
};
