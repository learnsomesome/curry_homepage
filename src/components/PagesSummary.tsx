import {
  Button,
  Card,
  Tooltip,
  Text,
  Row,
  Input,
  Collapse,
  Grid,
  Link,
  Spacer,
  Badge,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Close, Search, Website } from "../assets";
import { defaultPageList } from "../utils";
import FaviconImage from "./FaviconImage";
import IconButton from "./IconButton";

const pages = defaultPageList.flatMap((item) => item.pages);

const PagesSummary = () => {
  const [visible, setVisible] = useState(false);
  const [expandedList, setExpandedList] = useState<boolean[]>(
    new Array(defaultPageList.length).fill(false)
  );
  const [keyword, setKeyword] = useState("");

  const onClose = () => {
    setVisible(false);
  };

  const onSearch = (value: string) => {
    setKeyword(value);

    if (value) {
      const matchedIndexList = pages
        .filter((page) => page.name.match(new RegExp(value, "i")))
        .map((item) => item.rootKey);

      if (matchedIndexList.length > 0) {
        setExpandedList((pre) =>
          pre.map((item, index) => matchedIndexList.includes(index + 1))
        );

        const pagesDom = document.querySelectorAll(".pagesCollapseGroup > div")[
          matchedIndexList[0] - 1
        ];
        pagesDom?.scrollIntoView();
      }
    }
  };

  useEffect(() => {
    const app = document.querySelector(".app");

    if (visible) {
      document.body.setAttribute("style", "overflow: hidden");
      app?.addEventListener("click", onClose);
    } else {
      document.body.removeAttribute("style");
      app?.removeEventListener("click", onClose);
    }
  }, [visible]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 132,
          right: 32,
        }}
      >
        <Tooltip content="Pages Summary" color="secondary" placement="leftEnd">
          <Button
            aria-label="pages-summary-button"
            auto
            color="secondary"
            icon={<Website stroke="currentColor" />}
            onPress={() => setVisible(true)}
          />
        </Tooltip>
      </div>
      <Card
        css={{
          w: 400,
          h: "100vh",
          position: "absolute",
          right: visible ? 0 : -400,
          top: 0,
          bottom: 0,
          transition: "$default",
          zIndex: 9999,
          borderRadius: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card.Header css={{ p: 16, flexDirection: "column" }}>
          <Row align="center" justify="space-between">
            <Text b h4>
              Pages Summary
            </Text>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Row>
          <Spacer y={1} />
          <Input
            width="100%"
            aria-label="pages-search"
            bordered
            clearable
            placeholder="Search for page"
            contentLeft={<Search />}
            onKeyUp={(e: any) => {
              if (e.code === "Enter") onSearch(e.target.value.trim() as string);
            }}
          />
        </Card.Header>
        <Card.Body className="cardBody" css={{ p: 16, pt: 0 }}>
          <Collapse.Group
            className="pagesCollapseGroup"
            accordion={false}
            css={{ p: 0 }}
            onChange={(index, value) => {
              setExpandedList((pre) =>
                pre.map((item, i) =>
                  index === i + 1 ? (value as boolean) : item
                )
              );
            }}
          >
            {defaultPageList.map((item, index) => (
              <Collapse
                key={item.key}
                expanded={!!expandedList[index]}
                title={<Text h5>{item.title}</Text>}
              >
                <Grid.Container gap={1}>
                  {item.pages.map((page: any) => {
                    const reg = new RegExp(keyword, "i");
                    const matched = page.name.match(reg);

                    return (
                      <Grid key={page.name} sm={4}>
                        <Link
                          href={page.address}
                          css={{ d: "flex", alignItems: "center" }}
                        >
                          {keyword && matched && (
                            <Badge
                              color="success"
                              variant="dot"
                              css={{ mr: 4 }}
                            />
                          )}
                          <FaviconImage
                            render={!!expandedList[index]}
                            url={page.address}
                          />
                          <Text
                            h6
                            css={{ ml: 6 }}
                            dangerouslySetInnerHTML={{
                              __html:
                                keyword && matched
                                  ? page.name.replace(
                                      reg,
                                      `<span style="color: var(--nextui-colors-success);">${matched[0]}</span>`
                                    )
                                  : page.name,
                            }}
                          />
                        </Link>
                      </Grid>
                    );
                  })}
                </Grid.Container>
              </Collapse>
            ))}
          </Collapse.Group>
        </Card.Body>
      </Card>
    </>
  );
};

export default PagesSummary;
