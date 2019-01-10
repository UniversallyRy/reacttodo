import React, { Component } from 'react';
import {Form, InputGroup, Label, Input, Button} from 'reactstrap';

class FormContent extends Component {

    render () {
        // InputForm
        // Todo
        return (
            <Form onSubmit={this.props.onSubmit} className='formContent'>
                <Label for='todoInput'>To Start, add a Todo</Label>
                <InputGroup>
                <Input
                    value={this.props.value}
                    onChange={this.props.handleChange} 
                    id='todoInput' 
                    placeholder='...Enter a Todo' 
                    aria-label="Enter Todo Here" 
                    aria-describedby="submitButton" 
                    required
                />
                <Button
                    
                    id='submitButton' 
                    color='outline-secondary' 
                >
                    Add Todo
                </Button>
                </InputGroup>
            </Form>
        )
    }
}

export default FormContent;