import React from 'react';

class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }

    addText = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addForm(this.state.title);
        this.setState({title: ""})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input 
                    type="text" 
                    name="title" 
                    style={{flex: "10", padding: "5px"}}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.addText}
                />
                <input 
                    type="submit" 
                    value="Add" 
                    style={{flex: "1"}}
                    className="btn"
                />
            </form>
        );
    }
}

export default AddForm;