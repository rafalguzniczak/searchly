const getRepositoryResult = (item: GitHubResponseItem): RepositoryResult => {
    return ({
        name: item.name,
        owner: item.owner.login,
        stars: item.stargazers_count,
        createdAt: item.created_at
    });
};

export default getRepositoryResult;