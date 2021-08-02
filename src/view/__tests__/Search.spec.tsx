import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import Search from "../Search";

describe("Search component", () => {
  const waitForAsync = () => new Promise(setImmediate);

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
    expect(wrapper.find("#error").exists()).toBeFalsy();
  });

  it("should show error message when fetch failed", async () => {
    const wrapper = mount(<Search />);

    //@ts-ignore
    global.fetch = jest.fn(() => Promise.reject(new Error("Problem with API")));

    act(() => {
      wrapper.find("input").invoke("onChange")({
        target: { value: "Test" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    await waitForAsync();
    wrapper.update();

    expect(wrapper.find("#error").exists()).toBeTruthy();
  });
});
