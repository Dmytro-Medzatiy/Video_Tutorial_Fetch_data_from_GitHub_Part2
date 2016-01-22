
import React, { Component, PropTypes } from 'react';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import GitHubRepoList from '../containers/GitHubRepo/GitHubRepoList.jsx';
import GitHubRepoForm from '../containers/GitHubRepo/GitHubRepoForm.jsx';


class MainPage extends Component {

    render() {
        return (
            <div>
                <Grid fluid={ true }
                      style={ {    marginTop: '50px'} }
                      params={ this.props.params }>
                    <Row params={ this.props.params }>
                        <Col xs={ 3 }
                             md={ 3 }
                             sm={ 3 }
                             lg={ 3 }
                             className="hidden-xs"
                             params={ this.props.params }></Col>
                        <Col xs={ 12 }
                             md={ 12 }
                             sm={ 12 }
                             lg={ 6 }
                             params={ this.props.params }>
                            <Panel header="GitHub Repos"
                                   bsStyle="primary"
                                   params={ this.props.params }>
                                <GitHubRepoForm params={ this.props.params }></GitHubRepoForm>
                                <GitHubRepoList striped={ true }
                                                bordered={ false }
                                                condensed={ false }
                                                hover={ true }
                                                params={ this.props.params }></GitHubRepoList>
                            </Panel>
                        </Col>
                        <Col xs={ 3 }
                             md={ 3 }
                             sm={ 3 }
                             lg={ 3 }
                             className="hidden-xs"
                             params={ this.props.params }></Col>
                    </Row>
                </Grid>
            </div>
            );
    }
}

export default MainPage;

