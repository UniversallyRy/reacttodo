import React from 'react'
import { FilledInput, FormGroup } from '@material-ui/core/';

export const FormInput = (props) => (
    (
        <div>
            <FormGroup>
                <label htmlFor='task'></label>
                <FilledInput
                    style={{ margin: '0 auto', backgroundColor: 'grey' }}
                    value={props.task}
                    onChange={props.handleChange}
                    id='task'
                    placeholder='...Enter a Todo'
                    required
                />
            </FormGroup>
        </div>
    )
)

export default FormInput;

