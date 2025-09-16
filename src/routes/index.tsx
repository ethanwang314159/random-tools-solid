import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Random Tools</Title>
      <h1>Random Tools</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://candra.dev" target="_blank">
          candra.dev
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
