import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-slice';
import { InputGroup, InputLeftElement, Input, Flex } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';




export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value))
    };

    return (
        <Flex align="center" justify="center">
            <InputGroup w='300px' display="flex" justify="center">
                <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon color='gray.300' />}
                />
                <Input type='text' placeholder='filter' value={filter} onChange={handleChange} />
            </InputGroup>
        </Flex>
    )

}