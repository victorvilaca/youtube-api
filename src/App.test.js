import { render } from "@testing-library/react";
import App from "./App";

test("render app page", () => {
  const result = render(<App />);
  const linkElement = result.container.querySelector("#app");
  expect(linkElement).toBeInTheDocument();
});
