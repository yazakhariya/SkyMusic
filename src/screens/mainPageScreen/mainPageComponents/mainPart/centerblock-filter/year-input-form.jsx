import React from 'react';
import s from './authors.module.css';

function YearForm() {

    return (
        <div>
            <div className={s.dropdown_2_item}>
                <input type="radio" id="Более новые" name="drone" value="Более новые"/>
                <label>Более новые</label>
            </div>
            <div className={s.dropdown_2_item}>
                <input type="radio" id="Более старые" name="drone" value="Более старые"/>
                <label>Более старые</label>
            </div>
        </div>
    )
}

export default YearForm;