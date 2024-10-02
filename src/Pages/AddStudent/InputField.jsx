import PropTypes from 'prop-types';

const InputField = ({ label, type, fieldName, register, errors, validation, placeholder }) => {

    // console.log(errors[fieldName]);

    return (
        <div className="form-control space-y-1">
            <label htmlFor="">
                {label}
            </label>
            <input
                {...register(`${fieldName}`, validation)}
                type={type}
                placeholder={placeholder || "Type here"}
                className="input input-bordered focus:outline-none"
            />
            {errors[fieldName] && <p className="text-red-400 font-medium">{errors[fieldName].message || `${label} is required.`}</p>}
        </div>
    );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    validation: PropTypes.object,
    placeholder: PropTypes.string
}
export default InputField;