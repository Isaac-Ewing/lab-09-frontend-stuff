import React from 'react';
import { deleteGame } from './fetch-funcs';
import { withRouter } from 'react-router'

export default withRouter(class Delete extends React.Component {
    handleSubmit = async (e) => {
        e.preventDefault()
        await deleteGame(this.props.id);
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button>Delete Game</button>
                </form>
            </div>
        );
    }
})