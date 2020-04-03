import React from 'react';

const AddForm = () => {
    return (
        <form style={{display: "flex"}}>
            <input 
                type="text" 
                name="text" 
                style={{flex: "10", padding: "5px"}}
                placeholder="Add Todo..."
            />
            <input 
                type="submit" 
                value="Add" 
                style={{flex: "1"}}
                className="btn"
            />
        </form>
    )
}

export default AddForm;