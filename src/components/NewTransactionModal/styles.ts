import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--titles);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  input {
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    border-radius: 0.25rem;

    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button.btn {
    background-color: var(--green);
    padding: 0 1.5rem;
    color: #fff;
    height: 4rem;
    width: 100%;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: 0.3s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }

`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps { 
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc96',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    border-radius: 0.25rem;
    height: 4rem;
    border: 1px solid #d7d7d7;
    
    background: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;

    &:hover {
      border-color: ${darken(0.2, '#d7d7d7')};
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      font-size: 1rem;
      margin-left: 1rem;
      color: var(--text);
    }
`