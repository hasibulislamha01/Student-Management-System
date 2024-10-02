import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const hadleFormSubmit = (data) => {
        console.log('submitted', data);
    }
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">

            <div>
                <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg" alt="login image" />
            </div>
            {/* form container */}
            <form onSubmit={handleSubmit(hadleFormSubmit)} className="form-control space-y-6 py-10 px-6 bg-slate-300 rounded-lg">
                <h1 className="text-center text-xl md:text-2xl font-semibold md:font-bold">Login here</h1>
                {/* Email field */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium">Enter Your Email</span>
                    </div>
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                    />
                    {errors.email && <p className="text-red-400 font-medium">Email is required.</p>}
                </label>

                {/* password field */}
                <label htmlFor="" className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-medium">Enter Password</span>
                    </div>
                    <input
                        {...register('password', { required: true })}
                        type="password"
                        placeholder="Type here"
                        className="input input-bordered"
                    />
                    {errors.password && <p className="text-red-400 font-medium">password is required.</p>}
                </label>

                <button type="submit" className="btn bg-primary text-white">Login</button>
            </form>
        </div>
    );
};

export default Login;