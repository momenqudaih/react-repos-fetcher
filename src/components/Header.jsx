import RepoList from './RepoList';

const Header = (props) => {
    // console.log(props.userData);

    const {
        avatar_url,
        html_url,
        name,
        login,
        followers,
        repos_url,
        following,
    } = props.userData;

    return (
        <div className="user-header">
            <a
                target="_blank"
                rel="noreferrer"
                href={html_url}
                className="user-avatar"
            >
                <img src={avatar_url} alt="user avatar" />
            </a>
            <div className="user-info">
                <h3>{name}</h3>
                <div className="username-followers">
                    <span className="username"> @{login} </span>
                    <span className="followers-count">
                        {followers} followers
                    </span>
                    <span className="following-count">
                        {following} following
                    </span>
                </div>
            </div>
            {repos_url ? <RepoList repos_url={repos_url} /> : null}
        </div>
    );
};

export default Header;
