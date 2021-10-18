import styled from "styled-components";

type ContainerProps = {
  done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (
  `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin: 5px;
    align-items: center;

    input{
      width: 25px;
      height: 25px;
      margin-right: 10px;

    }

    label{
      color: #ccc;
      text-decoration: ${done ? "line-through" : "inicial"};
    }
  `
))
