

const Gallery = () => {
    return (
        <div>
            <h1 className="text-center mt-4 mb-3 text-3xl font-medium">AWESOME <span className="text-[#E527B2]">GALLERY</span></h1>
            <p className="max-w-2xl text-center mx-auto md:text-2xl text-gray-600 space-y-4 mb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="grid sm:grid-cols-1 w-3/4 mx-auto mb-5 mt-5 lg:grid-cols-3 md:grid-cols-2 gap-4">
                <div data-aos="flip-left">
                    <img className="h-auto max-w-full rounded-lg" src="https://www.rajibweb.com/html/fitme/images/gallery/1.jpg" alt="" />
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://www.rajibweb.com/html/fitme/images/gallery/2.jpg" alt="" />
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://www.rajibweb.com/html/fitme/images/gallery/3.jpg" alt="" />
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://www.rajibweb.com/html/fitme/images/gallery/4.jpg" alt="" />
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://www.rajibweb.com/html/fitme/images/gallery/5.jpg" alt="" />
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://www.rajibweb.com/html/fitme/images/gallery/6.jpg" alt="" />
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://www.rajibweb.com/html/fitme/images/gallery/8.jpg" alt="" />
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://www.rajibweb.com/html/fitme/images/gallery/7.jpg" alt="" />
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <img className="h-auto max-w-full rounded-lg" src="https://www.rajibweb.com/html/fitme/images/gallery/9.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Gallery;