import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const { logInUser } = useContext(AuthContext);

    const handleLoginFun = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        logInUser(email, password)
            .then(res => {
                console.log(res.user)
                form.reset();
            }).catch(err => {
                console.error(err.message)
            })

    }
    
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLoginFun} action="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text" >Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;