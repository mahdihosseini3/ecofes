import {EmailIcon, InstagramIcon, PhoneIcon, TelegramIcon} from "./icons.tsx";

const Footer = () => {
    return (
        <div className={'bg-white'}>
        <div className={'container mx-auto mt-3 '}>
            <div className="flex flex-col font-medium md:flex-row justify-between items-center p-4 w-full">
                {/* Right side - Persian text */}
                <div className="w-full md:w-1/2 mb:mb-0 mb-10 mt-6 md:mt-0 flex flex-col items-center md:items-start">
                    <div className="bg-primary text-white p-4 rounded-full inline-flex items-center justify-center mb-4">
                        <PhoneIcon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">ارتباط با دبیرخانه</h2>
                    <p className="text-gray-600 md:text-right text-center">
                        لورم ایپسوم متن ساختگی با تولید سادگی
                        <br />
                        نامفهوم از صنعت چاپ.
                    </p>
                </div>
                {/* Left side - Contact Info */}
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-2 md:flex flex-wrap md:flex-col md:space-y-7 md:gap-0 gap-2 items-">
                        {/* Phone */}
                        <div className="flex flex-grow flex-row-reverse items-center bg-orange-100/70 rounded-lg overflow-hidden">
                            <div className="p-4 flex items-center justify-center">
                                <PhoneIcon className="text-primary w-6 h-6" />
                            </div>
                            <div className="border-l border-gray-200 py-3 px-4 w-full">
                                <p className="text-left text-gray-800">09123456789</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-grow flex-row-reverse items-center bg-orange-100/70 rounded-lg overflow-hidden">
                            <div className="p-4 flex items-center justify-center">
                                <EmailIcon className="text-primary w-6 h-6" />
                            </div>
                            <div className="border-l border-gray-200 py-3 px-4 w-full">
                                <p className="text-left text-gray-800">info@example.com</p>
                            </div>
                        </div>

                        {/* Instagram */}
                        <div className="flex flex-grow flex-row-reverse items-center bg-orange-100/70 rounded-lg overflow-hidden">
                            <div className="p-4 flex items-center justify-center">
                                <InstagramIcon className="text-primary w-6 h-6" />
                            </div>
                            <div className="border-l border-gray-200 py-3 px-4 w-full">
                                <p className="text-left text-gray-800">@example</p>
                            </div>
                        </div>

                        {/* Telegram */}
                        <div className="flex flex-grow flex-row-reverse items-center bg-orange-100/70 rounded-lg overflow-hidden">
                            <div className="p-4 flex items-center justify-center">
                                <TelegramIcon className="text-primary w-6 h-6" />
                            </div>
                            <div className="border-l border-gray-200 py-3 px-4 w-full">
                                <p className="text-left text-gray-800">@example</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className={'w-full bg-primary p-3 py-6 rounded-t-4xl text-center text-white'}>
                طراحی و توسعه رایا پرداز ویرا گستر
                ۱۴۰۴ - تمام حقوق محفوظ است
            </div>
        </div>
        </div>
    );
};

export default Footer;