import {
  Avatar,
  createTheme,
  Grid,
  NextUIProvider,
  Spacer,
} from "@nextui-org/react";
import { useState } from "react";
import { Github, Moon, Sun } from "./assets";
import "./App.less";
import SearchInput from "./components/SearchInput";

const lightTheme = createTheme({ type: "light" });
const darkTheme = createTheme({ type: "dark" });

function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "dark"
  );
  const isDark = theme === "dark";

  const toggleColorScheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <Grid.Container
        className="app"
        direction="column"
        wrap="nowrap"
        css={{
          h: "100vh",
          p: 32,
          ov: "auto",
        }}
      >
        <Grid.Container alignItems="center" justify="space-between">
          <Grid>
            <Avatar src="../logo.jpg" size="xl" />
          </Grid>
          <Grid className="operation">
            <a
              href="https://github.com/learnsomesome/curry_homepage"
              target="blank"
              title="Github"
            >
              <Github />
            </a>
            <a title="Toggle Color Scheme" onClick={toggleColorScheme}>
              {isDark ? <Sun /> : <Moon />}
            </a>
          </Grid>
        </Grid.Container>
        <Spacer y={12} />
        <Grid.Container
          direction="column"
          alignItems="center"
          css={{ flex: 1 }}
        >
          <SearchInput />
        </Grid.Container>
      </Grid.Container>
    </NextUIProvider>
  );
}

export default App;
