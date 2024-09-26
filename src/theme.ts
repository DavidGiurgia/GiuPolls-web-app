import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: "light",  
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#ffffff", "#191919")(props),
    },
  }),
};

const colors = {
  brand: {
    light: "#ECC94B",
    dark: "#FAF089",
  },
  background: {
    light: "#ffffff",
    dark: "#191919",
  },
  componentBg: {
    light: "#F7F7F6",
    dark: "#222222",
  },
  activeElement: {
    light: "#E9E9E9",
    dark: "#2D3748",
  },
  text: {
    primary: {
      light: "#191919",
      dark: "#FAF089",
    },
    secondary: {
      light: "#5E5E5E",
      dark: "#A0AEC0",
    },
  },
  support: {
    red: {
      light: "#E53E3E",
      dark: "#F56565",
    },
    blue: {
      light: "#3182CE",
      dark: "#63B3ED",
    },
    yellow: {
      light: "#D69E2E",
      dark: "#ECC94B",
    },
    green: {
      light: "#38A169",
      dark: "#48BB78",
    },
  },
  // Culorile pentru cele 3 categorii
  categories: {
    polls: {
      light: "#38A169", // verde pentru Polls
      dark: "#48BB78",  // echivalent în dark mode
    },
    quizzes: {
      light: "#3182CE", // albastru pentru Quizzes
      dark: "#63B3ED",  // echivalent în dark mode
    },
    quotes: {
      light: "#ECC94B", // galben/portocaliu pentru Quotes
      dark: "#FAF089",  // echivalent în dark mode
    },
  },
};

const fonts = {
  body: "Inter, system-ui, sans-serif",
  heading: "Inter, system-ui, sans-serif",
  mono: "Menlo, monospace",
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "30px",
  "4xl": "36px",
  "5xl": "48px",
  "6xl": "64px",
};

const space = {
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "40px",
};

const theme = extendTheme({
  styles,
  config,
  colors,
  fonts,
  fontSizes,
  space,
});

export default theme;
