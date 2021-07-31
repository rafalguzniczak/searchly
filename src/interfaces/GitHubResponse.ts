interface GitHubResponse {
  incomplete_results: boolean;
  items: GitHubResponseItem[];
  total_count: number;
}

interface GitHubResponseItem {
  name: string;
  owner: { login: string; html_url: string };
  stargazers_count: number;
  created_at: string;
}
