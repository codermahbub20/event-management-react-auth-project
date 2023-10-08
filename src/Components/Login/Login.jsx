import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";



const Login = () => {

    const {logIN} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)

        logIN(email, password)
        .then(res =>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    return (
        <div style={{backgroundImage: 'url(https://fitness-club.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/10/yoga-12-overlaid.jpg)'}} className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl text-center text-black  font-bold">Login <span className="text-[#E527B2]">now!</span></h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p>First time visit this website please? <a className="tex-xl font-bold text-blue-600" href="/register">Register</a></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;