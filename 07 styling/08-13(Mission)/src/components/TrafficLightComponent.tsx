import { useState } from "react";
import styled, { keyframes } from "styled-components";

const blink = (color1: string, color2: string, color3: string) => keyframes`
  0%{
    background-color: ${color1};
    box-shadow: 0 0 6em ${color2};
  }
  50%{
    background-color: ${color3};
    box-shadow: 0 0 0em transparent;
  }
`;

const TrafficLight = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  width: 120px;
  height: 320px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0px;
`;

const TrafficLightLight = styled.button<{
  $color1: string;
  $color2: string;
  $color3: string;
}>`
  width: 80px;
  height: 80px;
  background-color: grey;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  &:hover {
    animation: ${({ $color1, $color2, $color3 }) =>
        blink($color1, $color2, $color3)}
      1s step-end infinite;
  }
  &[aria-pressed="true"] {
    background-color: ${(props) => props.$color1};
    box-shadow: 0 0 6em ${(props) => props.$color2};
  }
`;

export default function TrafficLightComponent() {
  const [activeColor, setActiveColor] = useState("grey");
  const handleActiveLight = (color: string) => {
    setActiveColor(color);
  };

  return (
    <>
      <TrafficLight>
        <TrafficLightLight
          $color1="#ff0000"
          $color2="#ff3333"
          $color3="#b30000"
          onClick={() => handleActiveLight("red")}
          aria-pressed={activeColor === "red"}
        />
        <TrafficLightLight
          $color1="#ffff00"
          $color2="#ffff33"
          $color3="#b2b300"
          onClick={() => handleActiveLight("yellow")}
          aria-pressed={activeColor === "yellow"}
        />
        <TrafficLightLight
          $color1="#00ff00"
          $color2="#33ff33"
          $color3="#00b300"
          onClick={() => handleActiveLight("green")}
          aria-pressed={activeColor === "green"}
        />
      </TrafficLight>
    </>
  );
}
