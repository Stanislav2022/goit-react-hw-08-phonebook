// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-slice';



export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value))
    };

    return (
        <div>
            <p>Find contacts by name:</p>
            <input type="text" name="filter" value={filter} onChange={handleChange}></input>
        </div>
    )

}