

const Login = () => {
    return (
        <div style={{backgroundImage: 'url(https://fitness-club.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/10/yoga-12-overlaid.jpg)'}} className="hero min-h-screen">
            
            <div className="card flex-shrink-0 w-full max-w-sm h-[65vh] shadow-2xl
             bg-base-100">
                <h1 className="text-4xl font-medium mt-4 text-center">Log In Now</h1>
                    <form className="card-body h-full">
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
                            <label className="label">
                                <a href="#" className="label-text-alt text-xl hover:text-blue-700 link link-hover">Forgot password?</a>
                            </label>
                            <p>First time visit here please? <a className="text-blue-700 text-xl" href="/register">Register</a></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Login;