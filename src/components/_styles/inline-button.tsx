import styled from "styled-components";

const Container = styled.button`
  font-size: inherit;
  color: var(--primary);
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  padding-bottom: 2px;

  border: none;
  border-bottom: 1px solid currentColor;
  transition: all 0.2s;

  &:hover {
    color: var(--grey-dark-1);
  }

  &:focus {
    animation: pulsate 1s infinite;
  }
`;

export default function InlineButton(props: any) {
  return <Container>{props.children}</Container>;
}
