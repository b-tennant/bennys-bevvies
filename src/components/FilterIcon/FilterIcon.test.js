import React from "react";
import { render } from "@testing-library/react";
import FilterIcon from "./FilterIcon";

describe("FilterIcon tests", () => {
  it("should render", () => {
    expect(render(<FilterIcon />)).toBeTruthy();
  });
});
