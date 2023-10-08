import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const notify = () => toast("Registration Successful!");
    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password)

         createUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
            notify()
    }


    return (
        <div style={{ backgroundImage: 'url(https://fitness-club.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/10/yoga-10-overlaid.jpg)' }} className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl text-center text-black  font-bold">Register <span className="text-[#E527B2]">now!</span></h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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

                        </div>
                        <p>Already you have an account please? <a className="tex-xl font-bold text-blue-600" href="/login">Log In</a></p>
                        <div className="form-control mt-6">
                            <button  className="btn btn-secondary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;