import styled from "styled-components";

export const Container = styled.header`
  background: var(--purple);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--light-purple);
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }

`