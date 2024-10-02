import PropTypes from 'prop-types';

const TextAreaField = ({ label, fieldName, register, errors, validation }) => {
    return (
        <div className="form-control space-y-1">
            <label htmlFor="">
                {label}
            </label>
            <textarea
                {...register(`${fieldName}`, validation)}
                placeholder="Type here"
                className="textarea textarea-bordered focus:outline-none"
            />
            {errors[fieldName] && <p className="text-red-400 font-medium">{errors[fieldName].message || `${label} is required.`}</p>}
        </div>
    );
};

TextAreaField.propTypes = {
    label: PropTypes.string,
    fieldName: PropTypes.string,
    register: PropTypes.func,
    errors: PropTypes.object.isRequired,
    validation: PropTypes.object,
}

export default TextAreaField;