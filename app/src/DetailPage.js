import React from 'react'
import Delete from './DeleteGame';
import { getAllCategories, getOneGame, updateGame } from './fetch-funcs';
import { getCategoryIdByName } from './utils';

export default class DetailPage extends React.Component {
    state = {
        name: '',
        avgplayers: 0,
        fun: true,
        category_id: 1,
        categories: []
    }

    componentDidMount = async () => {
        console.log(this.props.match.params.id);
        const game = await getOneGame(this.props.match.params.id);
        const categories = await getAllCategories();
        this.setState({
            name: game[0].name,
            avgplayers: game[0].avgplayers,
            fun: game[0].fun,
            category_id: getCategoryIdByName(categories, game[0].category),
            categories: categories
        })
        console.log(game);
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleCategoryChange = e => {
        this.setState({ category_id: e.target.value });
    }

    handlePlayerChange = e => {
        this.setState({ avgplayers: e.target.value });
    }

    handleFunChange = e => {
        this.setState({ fun: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await updateGame(this.props.match.params.id, {
            name: this.state.name,
            avgplayers: this.state.avgplayers,
            fun: this.state.fun,
            category_id: this.state.category_id
        });

        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
                <h2>Update Game</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Average Players
                        <input
                        value={this.state.avgplayers} type='number' onChange={this.handlePlayerChange} />
                    </label>
                    <label>
                        Fun? 
                        <select onChange={this.handleFunChange}>
                                <option value='true'>True</option>
                                <option value='false'>False</option>
                        </select>
                    </label>
                    <label>
                        Category
                        <select onChange={this.handleCategoryChange}>
                            {this.state.categories.map(category => 
                                <option
                                    selected={category.id === this.state.category_id} 
                                    value={category.id}
                                    key={category.id}>
                                    {category.name}
                                </option>)}
                        </select>
                    </label>
                    <button>Update!</button>
                </form>
                <Delete id={this.props.match.params.id}/>
            </div>
        )
    }
}