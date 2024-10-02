import { useForm } from "react-hook-form";
import InputField from "./InputField";
import SelectItem from "../../Components/AddStudentPageComponents/SelectItem";
import TextAreaField from "../../Components/TextAreaField";

const classOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
];

const divisionOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
    { value: 'E', label: 'E' },

]

const AddStudent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleFormSubmit = (data) => {
        console.log('submitted', data);
    }
    return (
        <div className="py-20 min-h-screen flex flex-col justify-center container mx-auto">
            <h1 className="text-center text-xl md:text-2xl font-bold mb-12">Add Student</h1>

            <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="form-control gap-4"
            >

                {/* name field container */}
                <div className="flex items-center justify-center">
                    <InputField
                        fieldName="firstName"
                        label="First Name"
                        type="text"
                        register={register}
                        errors={errors}
                        validation={{ required: true }}
                    />

                    <InputField
                        fieldName="middleName"
                        label="Middle Name"
                        type="text"
                        register={register}
                        errors={errors}
                        validation={{ required: true }}
                    />

                    <InputField
                        fieldName="lastName"
                        label="Last Name"
                        type="text"
                        register={register}
                        errors={errors}
                        validation={{ required: true }}
                    />
                </div>

                {/* sleect container */}
                <div className="border border-red-400 flex items-center justify-center">
                    <SelectItem
                        options={classOptions}
                        placeholder={'Select Class'}
                    />

                    <SelectItem
                        options={divisionOptions}
                        placeholder={'Select a division'}
                    />
                    <InputField
                        fieldName="rollNumber"
                        placeholder="Roll Number"
                        type="number"
                        register={register}
                        errors={errors}
                        validation={{
                            required: true,
                            pattern: {
                                value: /^[0-9]{2}$/,  // Regular expression for 2 digits
                                message: "Roll number must be of 2 digits"
                            }
                        }}
                    />
                </div>



                <div className="flex items-center justify-center">
                    <TextAreaField
                        label='Address'
                        fieldName='address1'
                        register={register}
                        errors={errors}
                        validation={{
                            required: true,
                        }}
                    />

                    <TextAreaField
                        label='Address'
                        fieldName='address2'
                        register={register}
                        errors={errors}
                        validation={{
                            required: true,
                        }}
                    />
                </div>

                <div className="flex items-center justify-center">
                    <InputField
                        type={'text'}
                        label="Landmark"
                        fieldName='landmark'
                        register={register}
                        errors={errors}
                        validation={{
                            required: true
                        }}
                    />

                    <InputField
                        type={'text'}
                        label="City"
                        fieldName='city'
                        register={register}
                        errors={errors}
                        validation={{
                            required: true
                        }}
                    />

                    <InputField
                        type={'number'}
                        label="Pin Number"
                        fieldName='pin'
                        register={register}
                        errors={errors}
                        validation={{
                            required: true,
                            pattern: {
                                value: /^[0-9]{4,6}$/,  // Regular expression for 2 digits
                                message: "Pin must be between 4 to 6 digits"
                            }
                        }}
                    />
                </div>



                <button type="submit" className="btn">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;