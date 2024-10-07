import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark", // Set the initial color mode to dark
  useSystemColorMode: false, // You can set this to true if you want to respect the user's system preference
};

// Create your theme
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#636363",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "gray.50", // Background color based on color mode
        color: props.colorMode === "dark" ? "white" : "gray.800", // Text color based on color mode
        transition: "all 500ms ease", // Smooth transition
      },
    }),
  },
});

export default theme;
