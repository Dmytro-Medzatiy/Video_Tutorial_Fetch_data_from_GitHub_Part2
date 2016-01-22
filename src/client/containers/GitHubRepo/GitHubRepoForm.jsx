import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button, Input } from 'react-bootstrap';
import { fetchGitHubData } from '../../actions/index.js';

class GitHubRepoForm extends Component {

    constructor(props, content) {
        super(props, content);
        this.handlerFetch = this.handlerFetch.bind(this);
    }
    handlerFetch(e) {
        e.preventDefault();
        e.stopPropagation();
        const {dispatch} = this.props;
        const {inputText} = this.refs;
        dispatch(fetchGitHubData(inputText.getValue()));
    }

    render() {
        const {status, statusText} = this.props;
        let fetchButton = null;

        if (status === 'loading') {
            fetchButton = (<Button
                                   bsStyle="primary"
                                   onClick={ this.handlerFetch } disabled={true} >
                               <span>Loading</span>
                           </Button>
            );
        } else if (status === 'done') {
            fetchButton = (<Button
                                   bsStyle="primary"
                                   onClick={ this.handlerFetch }>
                               <span>Fetch data</span>
                           </Button>
            );
        }
        else if (status === 'error') {
            fetchButton = (<Button
                    bsStyle="primary"
                    onClick={ this.handlerFetch }>
                    <span>Error</span>
                </Button>
            );
        }
        return (<form {...this.props}>
                    <Grid fluid={ true }>
                        <Row>
                            <Col
                                 xs={ 8 }
                                 md={ 8 }
                                 sm={ 8 }
                                 lg={ 8 }>
                                <Input
                                       ref="inputText"
                                       type="text"
                                       hasFeedback={ true }
                                       placeholder="Owner name" />
                            </Col>
                            <Col
                                 xs={ 4 }
                                 md={ 4 }
                                 sm={ 4 }
                                 lg={ 4 }>
                                { fetchButton }
                            </Col>
                        </Row>
                    </Grid>
                </form>
            );
    }
}
function mapStateToProps(state) {
    const {githubData: {fetching: {status, statusText}}} = state;
    return {
        status,
        statusText
    };
}

export default connect(mapStateToProps)(GitHubRepoForm);
