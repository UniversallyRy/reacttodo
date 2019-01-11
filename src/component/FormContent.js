import React, { Component } from 'react';
import { Button, TextField} from '@material-ui/core/';

class FormContent extends Component {

    render (props) {
        // InputForm
        // Todo
        return (
            <form onSubmit={this.props.onSubmit} className='formContent'>
                
                <div>
                <TextField
                    margin='normal'
                    variant='outlined'
                    value={this.props.value}
                    onChange={this.props.handleChange} 
                    id='outlined-Error' 
                    placeholder='...Enter a Todo' 
                    aria-label="Enter Todo Here" 
                    required
                />
                <Button
                    type='submit'
                    margin='normal'
                    id='submitButton' 
                    color='primary' 
                >
                    Add Todo
                </Button>
                </div>
            </form>
        )
    }
}

export default FormContent;