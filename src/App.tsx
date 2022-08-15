import { Avatar, Card, Grid, NextUIProvider, Spacer } from "@nextui-org/react";
import { useMemo } from "react";
import { Github, Moon, Sun } from "./assets";
import SearchInput from "./components/SearchInput";
import BackgroundSwitcher from "./components/BackgroundSwitcher";
import { BgItem, formatItemToBackground } from "./utils";
import { useBg } from "./hooks/useBg";
import { useTheme } from "./hooks/useTheme";
import "./App.less";

function App() {
  const [{ themeStr, theme }, { toggleColorScheme }] = useTheme();
  const [{ bg }, { updateBgId, updateBgList }] = useBg();

  const bgItem = useMemo(() => bg.list.find((item) => item.id === bg.id), [bg]);

  return (
    <NextUIProvider theme={theme}>
      <Grid.Container
        className="app"
        direction="column"
        wrap="nowrap"
        css={{
          h: "100vh",
          p: 32,
          ov: "auto",
          bg: bg.id ? formatItemToBackground(bgItem as BgItem) : "",
        }}
      >
        <Grid.Container alignItems="center" justify="space-between">
          <Grid>
            <Avatar src="../logo.jpg" size="xl" />
          </Grid>
          <Grid className="operation">
            <Card css={{ fd: "row", p: 12 }}>
              <a
                href="https://github.com/learnsomesome/curry_homepage"
                target="blank"
                title="Github"
              >
                <Github />
              </a>
              <a title="Toggle Color Scheme" onClick={toggleColorScheme}>
                {themeStr === "dark" ? <Sun /> : <Moon />}
              </a>
            </Card>
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
      <BackgroundSwitcher
        bg={bg}
        updateBgId={updateBgId}
        updateBgList={updateBgList}
      />
    </NextUIProvider>
  );
}

export default App;
