
// style={{ backgroundImage: 'url(https://www.rajibweb.com/html/fitme/images/bg/footer.jpg)' }}
const Footer = () => {
    return (
        <footer  className="footer sm:w-3/4 md:w-full lg:w-3/4  mx-auto p-10  text-base-content">
                        <aside>
                            <img className="w-44" src="https://helthify-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2022/06/logo-1.png" alt="" />
                            <p className="text-xl">Healthify Industries Ltd.<br />Providing reliable tech since 1992</p>
                        </aside>
                        <nav className="text-xl">
                            <header className="footer-title">Services</header>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav className="text-xl">
                            <header className="footer-title">Company</header>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav className="text-xl">
                            <header className="footer-title">Legal</header>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </footer>
    );
};

export default Footer;