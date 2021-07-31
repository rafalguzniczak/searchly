import getRepositoryResult from "../getRepositoryResult";

describe("getRepositoryResult", () => {
  const GITHUB_RESPONSE: GitHubResponse = {
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
  };

  it("should map github response to repository result", () => {
    const result: RepositoryResult = getRepositoryResult(
        GITHUB_RESPONSE.items[0]
    );

    expect(result).toEqual({
      name: "Tetris",
      owner: "Jonas Neubauer",
      stars: 100,
      createdAt: "2021-07-31T16:43:01Z",
    });
  });
});
