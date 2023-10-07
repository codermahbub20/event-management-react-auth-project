

const Register = () => {
    return (
        <div style={{ backgroundImage: 'url(https://fitness-club.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/10/yoga-10-overlaid.jpg)' }} className="hero min-h-screen">

            <div className="card flex-shrink-0 w-full max-w-lg h-[90vh] shadow-2xl
             bg-base-100">
                <h1 className="text-4xl font-medium mt-4 text-center">Register Now</h1>
                <form className="card-body h-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Name</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Photo Url</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <p>Already You Have a account please <a className="text-blue-700 text-xl" href="/login">log in</a></p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;