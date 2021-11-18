import { styled } from "@mui/material/styles";
import * as React from "react";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "400px",
  margin: "0 auto 5px",
  cursor: "pointer",
});

const Content = styled("div")({
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  padding: "5px 10px 5px 5px",
  "&:hover": {
    background: "rgb(245, 245, 245)",
  },
  "& input": {
    marginRight: 5,
  },
});
const RemoveButton = styled("button")({
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  padding: "5px 10px 5px 10px",
  cursor: "pointer",
  "&:hover": {
    background: "rgb(172, 172, 172)",
  },
});

const Label = styled("span", {
  shouldForwardProp: (prop) => prop !== "checked",
})(({ checked }: any) => ({
  textDecoration: checked ? "line-through" : "none",
}));

const Checkbox = ({ onClick, checked, onDelete, label, onKeyUp }: any) => (
  <Container>
    <Content
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={onClick}
      />
      <Label checked={checked}>{label}</Label>
    </Content>
    <RemoveButton type="button" onClick={onDelete}>
      x
    </RemoveButton>
  </Container>
);

export default Checkbox;
