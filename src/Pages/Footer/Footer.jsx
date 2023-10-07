

const Footer = () => {
    return (
        <div className="hero min-h-[60vh]" style={{ backgroundImage: 'url(https://www.rajibweb.com/html/fitme/images/bg/footer.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <footer className="footer  w-full p-10 bg-base-200 text-base-content">
                        <aside>
                            <img className="w-44" src="https://helthify-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2022/06/logo-1.png" alt="" />
                            <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                        </aside>
                        <nav>
                            <header className="footer-title">Services</header>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Company</header>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Legal</header>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;