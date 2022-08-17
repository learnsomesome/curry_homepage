import { styled } from "@nextui-org/react";

const IconButton = styled("button", {
  dflex: "center",
  border: "none",
  outline: "none",
  cursor: "pointer",
  padding: "0",
  margin: "0",
  bg: "transparent",
  transition: "$default",
  opacity: "0.6",
  "&:hover": {
    opacity: "1",
  },
});

export default IconButton;
