import styled from "@emotion/styled";

export const SubscribeContainer = styled("button")`
  width: 260px;
  height: 4rem;
  background: var(--yellow-500);
  border-radius: 2rem;
  border: 0;

  color: var(--gray-900);
  font-size: 1.25rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.8);
  }
`;
