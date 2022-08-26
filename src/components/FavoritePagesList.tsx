import { Grid, Row, Spacer, Text } from "@nextui-org/react";
import { Add, Close } from "../assets";
import { FavoritePage } from "../utils";
import FaviconImage from "./FaviconImage";
import IconButton from "./IconButton";

const FavoritePagesList = ({
  favoritePages,
  deleteFavorite,
  openModal,
}: {
  favoritePages: FavoritePage[];
  deleteFavorite: (key: string) => void;
  openModal: VoidFunction;
}) => {
  return favoritePages.length > 0 ? (
    <Grid.Container css={{ pl: 90 }}>
      {favoritePages.map((page) => (
        <Grid.Container
          key={page.key}
          direction="column"
          justify="center"
          as="a"
          wrap="nowrap"
          onClick={() => (window.location.href = page.address)}
          css={{
            position: "relative",
            w: 112,
            h: 112,
            borderRadius: 8,
            "&:hover": {
              backgroundColor: "#80808054",
              button: {
                display: "block",
              },
            },
          }}
        >
          <FaviconImage url={page.address} />
          <Spacer y={0.5} />
          <Text
            b
            size={14}
            css={{
              mw: 90,
              ov: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {page.name}
          </Text>
          <IconButton
            css={{
              position: "absolute",
              top: 8,
              right: 8,
              display: "none",
            }}
            onClick={(e) => {
              e.stopPropagation();
              deleteFavorite(page.key);
            }}
          >
            <Close />
          </IconButton>
        </Grid.Container>
      ))}
    </Grid.Container>
  ) : (
    <Grid.Container justify="center" css={{ pl: 90 }}>
      <Row
        title="Add your favorite pages"
        justify="center"
        align="center"
        css={{
          w: 112,
          h: 112,
          borderRadius: 8,
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "#80808054",
          },
        }}
        onClick={openModal}
      >
        <Add width={36} />
      </Row>
    </Grid.Container>
  );
};

export default FavoritePagesList;
