import {
  Avatar,
  Card,
  Grid,
  Link,
  NextUIProvider,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useMemo } from "react";
import { Github, Moon, Sun } from "./assets";
import SearchInput from "./components/SearchInput";
import BackgroundSwitcher from "./components/BackgroundSwitcher";
import { BgItem, formatItemToBackground, isMobile } from "./utils";
import { useBg } from "./hooks/useBg";
import { useTheme } from "./hooks/useTheme";
import "./App.less";
import FavoritePagesEditor from "./components/FavoritePagesEditor";
import { useFavorite } from "./hooks/useFavorite";
import FavoritePagesList from "./components/FavoritePagesList";
import IconButton from "./components/IconButton";

function App() {
  const [{ themeStr, theme }, { toggleColorScheme }] = useTheme();
  const [{ favoritePages }, { addFavorite, deleteFavorite }] = useFavorite();
  const [{ bg }, { updateBgId, updateBgList }] = useBg();

  const bgItem = useMemo(() => bg.list.find((item) => item.id === bg.id), [bg]);

  return isMobile() ? (
    <Grid.Container
      direction="column"
      justify="center"
      alignItems="center"
      css={{ h: "80vh", p: 24 }}
    >
      <Text size={32}>😭😭😭</Text>
      <Spacer y={1} />
      <Text b>暂不支持移动端查看，请前往客户端浏览</Text>
    </Grid.Container>
  ) : (
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
              <IconButton>
                <Link
                  href="https://github.com/learnsomesome/curry_homepage"
                  target="_blank"
                  title="Github"
                >
                  <Github />
                </Link>
              </IconButton>
              <IconButton>
                <Link title="Toggle Color Scheme" onClick={toggleColorScheme}>
                  {themeStr === "dark" ? <Sun /> : <Moon />}
                </Link>
              </IconButton>
            </Card>
          </Grid>
        </Grid.Container>
        <Spacer y={12} />
        <Grid.Container
          direction="column"
          alignItems="center"
          css={{ flex: 1, w: 680, m: "0 auto" }}
        >
          <SearchInput />
          <Spacer y={1} />
          <FavoritePagesList
            favoritePages={favoritePages}
            deleteFavorite={deleteFavorite}
          />
        </Grid.Container>
      </Grid.Container>
      <FavoritePagesEditor
        favoritePages={favoritePages}
        addFavorite={addFavorite}
        deleteFavorite={deleteFavorite}
      />
      <BackgroundSwitcher
        bg={bg}
        updateBgId={updateBgId}
        updateBgList={updateBgList}
      />
    </NextUIProvider>
  );
}

export default App;
