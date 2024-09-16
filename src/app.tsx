import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { JSX, Suspense } from "solid-js";
import "~/style/app.css";

export default function App() {
  return (
    <Router
      root={(props: { children?: JSX.Element }) => (
        <MetaProvider>
          <Title>SolidStart - Tailwind 4</Title>
          <a href="/frame">Frame</a>
          <a href="/colors">Colors</a>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
