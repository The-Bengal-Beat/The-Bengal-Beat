import { createTheme, ThemeProvider } from "@mui/material";
import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
