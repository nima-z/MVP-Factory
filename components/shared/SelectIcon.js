import React from "react";
// import styled from "styled-components";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const StyledButton = styled("button")(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 14px;
  max-height: 32px;
  min-width: 135px;
  background: #1BC5BD;
  border: none;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &::after {
    content: '▾';
    font-size: 1.2rem;
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 13px;
  box-sizing: border-box;
  padding: 5px;
  margin: 2px 0;
  min-width: 135px;
  background: #1BC5BD;
  border: none;
  border-radius: 5px;
  color: white;
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: red;
    color: black;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: white;
    color: black;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: white;
    color: black;
  }

  &.${optionUnstyledClasses.disabled} {
    color: red;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: white;
    color: black;
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

export default function SelectIcon({ title }) {
  return (
    <CustomSelect defaultValue={0}>
      <StyledOption value={0}>{title}</StyledOption>
      <StyledOption value={10}>Ten</StyledOption>
      <StyledOption value={20}>Twenty</StyledOption>
      <StyledOption value={30}>Thirty</StyledOption>
    </CustomSelect>
  );
}
