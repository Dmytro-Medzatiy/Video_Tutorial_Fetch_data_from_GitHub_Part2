import React, { Component, PropTypes } from 'react';

class GitHubRepoListHeader extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (<thead {...this.props}>
                    <tr>
                        <th>
                            <span>Repo name</span>
                        </th>
                        <th>
                            <span>Stars</span>
                        </th>
                        <th>
                            <span>Open Issues</span>
                        </th>
                    </tr>
                </thead>
            );
    }
}

export default GitHubRepoListHeader;
