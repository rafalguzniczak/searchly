import React from "react";
import { mount } from "enzyme";
import Search from "../Search";

describe("Search component", () => {
  it("should handle input change", () => {
    const wrapper = mount(<Search />);

    //@ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            incomplete_results: false,
            items: [
              {
                name: "Tetris",
                owner: { login: "Jonas Neubauer", html_url: "#" },
                stargazers_count: 100,
                created_at: "2021-07-31T16:43:01Z",
              },
            ],
            total_count: 2,
          }),
      })
    );

    wrapper.find("input").invoke("onChange")({
      target: { value: "Test" },
    } as React.ChangeEvent<HTMLInputElement>);

    expect(wrapper.find("input").prop("value")).toEqual("Test");
  });
});
