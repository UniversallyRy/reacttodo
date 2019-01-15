import React from 'react';
import Button from '@material-ui/core/Button';
import { Add } from '@material-ui/icons/';

export const FormSubmit = () => (
    (
        <div>
            <Button
                type='submit'
                margin='normal'
                id='submitButton'
                color='inherit'
            >
                <Add style={{ marginRight: '4px' }} />
                {" "}
                Add Todo
                    </Button>
        </div>
    )
)

export default FormSubmit;