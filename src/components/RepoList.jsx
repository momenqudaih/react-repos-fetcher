import React, { useEffect, useState } from 'react';
import RepoCard from './RepoCard';

const RepoList = ({ repos_url }) => {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        fetch(repos_url)
            .then((data) => data.json())
            .then((data) => {
                setRepos(data);
            });
    }, [repos_url]);

    if (!repos) return <div>Loading...</div>;

    return (
        <div className="repos">
            <h3>Repositories</h3>
            <div className="repos-list">
                {repos.map((repo) => {
                    return <RepoCard repo={repo} key={repo.id} />;
                })}
            </div>
        </div>
    );
};

export default RepoList;
