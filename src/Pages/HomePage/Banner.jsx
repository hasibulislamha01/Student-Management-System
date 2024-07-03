import './home.css'

const Banner = () => {
    return (
        <div className='p-32 bg-[#e1e2db] h-screen'>
            <div className="container mx-auto flex justify-between items-center ">
                <div className="space-y-4 text-[#333333]">
                    <h3 className="text-3xl font-semibold">I am Hasibul</h3>
                    <h3 className="text-3xl">A passionate
                    </h3>
                    <h1 className="text-5xl font-bold uppercase">Web Developer</h1>
                </div>

                <div>
                    <img className="profileImage w-[350px] h-[350px] rounded-full" src="https://i.ibb.co/F060y4D/FB-IMG-1703931495032-2-1-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;