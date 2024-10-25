import { Container, Sprite, Stage, Text } from "@pixi/react";

import usePrepareStage from "@/hooks/usePrepareStage";

const Overworld = () => {
  const { processing } = usePrepareStage();

  if (processing) {
    return <h1>Processing... please wait</h1>;
  }

  return (
    <Stage
      options={{
        hello: true,
        background: 0x000000,
        antialias: true,
        powerPreference: "default",
      }}
    >
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
      />

      <Container x={400} y={330}>
        <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} />
      </Container>
    </Stage>
  );
};

export default Overworld;
