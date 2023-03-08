import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#6f19f0",
          secondary: "#f47a55",
        },
      },
    },
  },
});
