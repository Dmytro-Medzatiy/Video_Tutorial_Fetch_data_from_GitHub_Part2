import React, { Component, PropTypes } from 'react';

class GitHubRepoListRow extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        const {item} = this.props;
        return (<tr {...this.props}>
                    <td>
                        <span>{ item.name }</span>
                    </td>
                    <td>
                        <span>{ item.stargazers }</span>
                    </td>
                    <td>
                        <span>{ item.open }</span>
                    </td>
                </tr>
            );
    }
}
GitHubRepoListRow.defaultProps = {
    item: {
        name: 'name',
        stargazers: 'stargazers_count',
        open: 'open_issues_count'
    }
};
GitHubRepoListRow.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        stargazers: PropTypes.string,
        open: PropTypes.string
    })
};

export default GitHubRepoListRow;
