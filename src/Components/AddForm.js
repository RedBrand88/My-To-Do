import React from 'react';

class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    addText = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addForm(this.state.text);
        this.setState({state: ""})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input 
                    type="text" 
                    name="text" 
                    style={{flex: "10", padding: "5px"}}
                    placeholder="Add Todo..."
                    value={this.state.text}
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