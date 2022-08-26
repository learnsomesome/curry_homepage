import {
  Button,
  Col,
  Input,
  Modal,
  Row,
  Spacer,
  Table,
  Text,
  Tooltip,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Delete, Star } from "../assets";
import { FavoritePage, URL_REG_EXP } from "../utils";
import IconButton from "./IconButton";
import FaviconImage from "./FaviconImage";

let formInit = true;

const FavoritePagesEditor = ({
  visible,
  setVisible,
  favoritePages,
  addFavorite,
  deleteFavorite,
}: {
  visible: boolean;
  setVisible: (v: boolean) => void;
  favoritePages: FavoritePage[];
  addFavorite: (page: FavoritePage) => void;
  deleteFavorite: (key: string) => void;
}) => {
  const [formValue, setFormValue] = useState({
    name: "",
    address: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    address: "",
  });

  const addDisabled =
    formInit ||
    Object.values(errors).some(Boolean) ||
    favoritePages.length === 10;

  const resetForm = () => {
    setFormValue({
      name: "",
      address: "",
    });
    setErrors({
      name: "",
      address: "",
    });
    formInit = true;
  };

  const addToList = () => {
    const page = {
      ...formValue,
      key: formValue.name,
    };

    addFavorite(page);
    resetForm();
  };

  useEffect(() => {
    if (formInit) return;

    const _errors: any = {};

    Object.entries(formValue).forEach(([key, value]) => {
      if (!value.trim()) {
        _errors[key] = `${key} is required`;
      } else if (
        key === "name" &&
        favoritePages.some((page) => page.key === value)
      ) {
        _errors.name = "duplicate name";
      } else if (key === "address" && !URL_REG_EXP.test(value)) {
        _errors.address = "invalid url";
      } else {
        _errors[key] = "";
      }
    });

    setErrors((pre) => ({ ...pre, ..._errors }));
  }, [favoritePages, formValue, formInit]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 82,
          right: 32,
        }}
      >
        <Tooltip
          content="Favorite Pages Editor"
          color="warning"
          placement="leftEnd"
        >
          <Button
            aria-label="favorite-pages-edit-button"
            auto
            color="warning"
            icon={<Star />}
            onPress={() => setVisible(true)}
          />
        </Tooltip>
      </div>
      {visible && (
        <Modal
          closeButton
          aria-label="favorite-pages-edit-modal"
          width="60%"
          css={{ mh: "90vh", ov: "hidden" }}
          open={visible}
          onClose={() => {
            document.body.removeAttribute("style");
            setVisible(false);
            resetForm();
          }}
        >
          <Modal.Header justify="flex-start">
            <Text b h4>
              Favorite Pages Editor
            </Text>
          </Modal.Header>
          <Modal.Body css={{ py: 24 }}>
            <Row justify="flex-start" align="flex-end">
              <Input
                clearable
                underlined
                labelPlaceholder="Name"
                status={errors.name ? "error" : "default"}
                helperColor={errors.name ? "error" : "default"}
                helperText={errors.name}
                value={formValue.name}
                onChange={(e) =>
                  setFormValue((pre) => {
                    formInit = false;

                    return { ...pre, name: e.target.value };
                  })
                }
                onKeyUp={(e) => {
                  if (e.code === "Enter" && !addDisabled) addToList();
                }}
              />
              <Spacer x={2} />
              <Input
                clearable
                underlined
                labelPlaceholder="Address"
                status={errors.address ? "error" : "default"}
                helperColor={errors.address ? "error" : "default"}
                helperText={errors.address}
                value={formValue.address}
                onChange={(e) =>
                  setFormValue((pre) => {
                    formInit = false;

                    return { ...pre, address: e.target.value };
                  })
                }
                onKeyUp={(e) => {
                  if (e.code === "Enter" && !addDisabled) addToList();
                }}
              />
              <Spacer x={2} />
              <Button
                flat
                ghost
                size="sm"
                disabled={addDisabled}
                onPress={addToList}
              >
                Add to List
              </Button>
              <Spacer x={2} />
              <Text color="grey" i size={14} css={{ m: 0 }}>
                The maximum number to add is 10
              </Text>
            </Row>
            <Spacer y={1} />
            <Row>
              <Col>
                <Table
                  aria-label="favorite-pages-table"
                  bordered
                  headerLined
                  css={{
                    h: "auto",
                    w: "100%",
                  }}
                >
                  <Table.Header>
                    <Table.Column hideHeader>Icon</Table.Column>
                    <Table.Column>Name</Table.Column>
                    <Table.Column>Address</Table.Column>
                    <Table.Column hideHeader>Action</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {favoritePages.map((item) => (
                      <Table.Row key={item.key}>
                        <Table.Cell>
                          <FaviconImage url={item.address} />
                        </Table.Cell>
                        <Table.Cell css={{ mw: 100 }}>
                          <Text title={item.name}>{item.name}</Text>
                        </Table.Cell>
                        <Table.Cell css={{ mw: 200 }}>
                          <span title={item.address}>{item.address}</span>
                        </Table.Cell>
                        <Table.Cell key="action">
                          <IconButton>
                            <Delete
                              color="#FF0080"
                              onClick={() => deleteFavorite(item.key)}
                            />
                          </IconButton>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default FavoritePagesEditor;
