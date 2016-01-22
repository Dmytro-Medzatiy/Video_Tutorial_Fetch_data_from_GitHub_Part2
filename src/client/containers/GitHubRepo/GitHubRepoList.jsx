import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import GitHubRepoListHeader from '../../components/GitHubRepo/GitHubRepoListHeader.jsx';
import GitHubRepoListRow from '../../components/GitHubRepo/GitHubRepoListRow.jsx';

class GitHubRepoList extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        const {list} = this.props;
        let listItems;
        if (list && list.length > 0) {
            listItems = list.map((item, index) => {
                return (<tbody key={ index }>
                            <GitHubRepoListRow item={item} />
                        </tbody>
                    );
            })
        } else {
            listItems = (<tbody>
                             <tr><td colSpan='3'>Empty</td></tr>
                         </tbody>
            );
        }
        return (<Table
                       {...this.props}
                       striped={ true }
                       bordered={ false }
                       condensed={ false }
                       hover={ true }>
                    <GitHubRepoListHeader />
                    { listItems }
                </Table>
            );
    }
}
function mapStateToProps(state) {
    const {githubData : {list}} = state;
    return {
        list
    };
}

export default connect(mapStateToProps)(GitHubRepoList);
