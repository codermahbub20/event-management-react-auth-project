

const Faq = () => {
    return (
        <div>
    
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://kit.juliha.com/yoggs/wp-content/uploads/sites/20/2021/07/yoga-M8TYSKE.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-4xl font-medium">Frequently <span className="text-[#E527B2]">Asked Question</span></h1>
                        <div className="collapse space-y-5 collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                            How Much Is Membership At Fitness First ?
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius nibh fermentum velit sollicitudin molestie.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                            What classes do ?
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius nibh fermentum velit sollicitudin molestie.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                            What types of yoga do you teach ?
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius nibh fermentum velit sollicitudin molestie.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;