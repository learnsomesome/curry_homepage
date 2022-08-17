import {
  Button,
  Card,
  Checkbox,
  Grid,
  Modal,
  Row,
  Text,
  Tooltip,
} from "@nextui-org/react";
import { useState } from "react";
import { Edit, Image, Palette } from "../assets";
import { BgItem, formatItemToBackground } from "../utils";

const BackgroundSwitcher = ({
  bg,
  updateBgId,
  updateBgList,
}: {
  bg: {
    id: string;
    list: BgItem[];
  };
  updateBgId: (bgStr: string) => void;
  updateBgList: (id: string, value: Record<string, string | File>) => void;
}) => {
  const { id, list } = bg;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
        }}
      >
        <Tooltip
          content="Background Switch"
          color="primary"
          placement="leftEnd"
        >
          <Button
            aria-label="background-switch-button"
            auto
            color="primary"
            icon={<Edit />}
            onPress={() => setVisible(true)}
          />
        </Tooltip>
      </div>
      {visible && (
        <Modal
          closeButton
          aria-label="background-switch-modal"
          width="60%"
          css={{ mh: 520, ov: "hidden" }}
          open={visible}
          onClose={() => setVisible(false)}
        >
          <Modal.Header justify="flex-start">
            <Text b h4 css={{ pl: 12 }}>
              Background Switch
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Grid.Container gap={2} justify="flex-start">
              {list.map((item) => (
                <Grid
                  key={item.id}
                  xs={12}
                  sm={3}
                  css={{ position: "relative" }}
                >
                  <Checkbox
                    aria-label="background-switch-check"
                    isRounded
                    isSelected={id === item.id}
                    css={{ position: "absolute", top: 24, right: 24 }}
                    onChange={() => updateBgId(id === item.id ? "" : item.id)}
                  />
                  <Card>
                    <Card.Body
                      css={{
                        p: 0,
                        background: formatItemToBackground(item),
                        h: 120,
                        cursor: "pointer",
                      }}
                      onClick={() => updateBgId(id === item.id ? "" : item.id)}
                    />
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                      <Row justify="space-between" align="center">
                        <Text b>{item.label}</Text>
                        {item.id === "color-customize" && (
                          <label style={{ cursor: "pointer" }}>
                            <Palette style={{ verticalAlign: "middle" }} />
                            <input
                              aria-label="background-switch-color"
                              type="color"
                              value={item.color}
                              style={{ visibility: "hidden", width: 0 }}
                              onChange={(e) =>
                                updateBgList(item.id, { color: e.target.value })
                              }
                            />
                          </label>
                        )}
                        {item.id === "picture-customize" && (
                          <label style={{ cursor: "pointer" }}>
                            <Image style={{ verticalAlign: "middle" }} />
                            <input
                              id="background-switch-picture"
                              aria-label="background-switch-picture"
                              type="file"
                              accept="image/jpg,image/png"
                              onChange={(e) => {
                                const file = [
                                  ...(e.target.files as FileList),
                                ][0];

                                updateBgList(item.id, {
                                  source: file,
                                });
                              }}
                              style={{ display: "none" }}
                            />
                          </label>
                        )}
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              ))}
            </Grid.Container>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default BackgroundSwitcher;
