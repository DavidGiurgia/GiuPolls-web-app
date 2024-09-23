// theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#FFFAF0",
      100: "#FEF3C7",
      200: "#FDE68A",
      300: "#FCD34D",
      400: "#FBBF24",
      500: "#F59E0B", // galben predefinit pentru Chakra UI buttons
      600: "#D97706",
      700: "#B45309",
      800: "#92400E",
      900: "#78350F",
    },
    text: {
      primary: "#1A202C", // negru pentru texte principale
      secondary: "#718096", // gri pentru texte secundare
      placeholder: "#A0AEC0", // gri deschis pentru placeholder-uri
    },
    background: {
      light: "#FFFFFF", // fundal alb
      dark: "#1A202C", // fundal întunecat
    },
  },
  components: {
    Button: {
      baseStyle: {
        colorScheme: "primary", // setăm galbenul ca schema implicită de culoare
      },
    },
    // poți adăuga mai multe componente aici
  },
});

export default theme;
