import styled from "styled-components";

const CustomButton = styled.button`
  background-color: #${(props) => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  width: 135px;
  height: 32px;
`;

export default function Button(props) {
  return <CustomButton color={props.color}>{props.children}</CustomButton>;
}
