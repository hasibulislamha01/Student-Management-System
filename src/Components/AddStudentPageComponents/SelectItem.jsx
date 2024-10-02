import Select from 'react-select';
import PropTypes from 'prop-types';

const SelectItem = ({ options, placeholder }) => {
    return (
        <Select
            placeholder={placeholder || 'Select an option'}
            options={options}
        />
    );
};

SelectItem.propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string
}
export default SelectItem;