import React from 'react';

const Form = (props) => {
    const { values, update, submit, disabled, errors } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }
    const onSubmit = evt =>{
        evt.preventDefault();
        submit()
    }


    
    return (
        <form id='pizza-form' className='form container' onSubmit={onSubmit}>
            <div className='form-banner'>
                <h2>Build Your Own Pizza</h2>
                <div className='form-img'></div>
            </div>
            <div className='form-group inputs'>
                <h3>Build Your Own Pizza</h3>
                <div className='errors'>
                    <p>{errors.name}</p>
                </div>
                <label>Name
                    <input 
                        type="text"
                        name='name'
                        value={values.name}
                        onChange={onChange}
                        placeholder="Name..."
                        maxLength="40"
                        id="name-input" />
                </label>
                <label>Size
                    <select value={values.size} name="size" id="size-dropdown" onChange={onChange}>
                        <option value="">-- Select a Size --</option>
                        <option value="small">Small (6 slices)</option>
                        <option value="medium">Medium (8 slices)</option>
                        <option value="large">Large (10 slices)</option>
                    </select>
                </label>
                <div className='toppings container'>
                    <h4>Toppings</h4>
                    <label>Pineapple
                        <input
                        name="pineapple"
                        type="checkbox"
                        onChange={onChange}
                        checked={values.pineapple}
                        />
                    </label>
                    <label>Jalapeno
                        <input
                        name="jalapeno"
                        type="checkbox"
                        onChange={onChange}
                        checked={values.jalapeno}
                        />
                    </label>
                    <label>Pepperoni
                        <input
                        name="pepperoni"
                        type="checkbox"
                        onChange={onChange}
                        checked={values.pepperoni}
                        />
                    </label>
                    <label>Bacon
                        <input
                        name="bacon"
                        type="checkbox"
                        onChange={onChange}
                        checked={values.bacon}
                        />
                    </label>
                </div>
                <br />
                <label>Special Instructions
                    <input 
                    type="text"
                    name="special"
                    value={values.special}
                    onChange={onChange}
                    />
                </label>
                <br />
                <button disabled={disabled} id='order-button'>Add to Order</button>
            </div>
        </form>
    )
}
export default Form;