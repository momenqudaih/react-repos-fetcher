const RepoCard = (props) => {
    const { repo } = props;

    return (
        <div className="repo-item" key={repo.id}>
            <header>
                <a target="_blank" rel="noreferrer" href={repo.html_url}>
                    {repo.name}
                </a>
                <div className="stars-forks">
                    <div className="repo-stars">
                        &#9733; {repo.stargazers_count}
                    </div>
                    <div className="repo-forks">
                        &#10548; {repo.forks_count}
                    </div>
                </div>
            </header>
            {repo.language && (
                <div className="repo-language">{repo.language}</div>
            )}
            {repo.description && (
                <p className="repo-desc">{repo.description}</p>
            )}
        </div>
    );
};

export default RepoCard;
