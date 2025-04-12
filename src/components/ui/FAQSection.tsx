import {useState} from 'react';
import {ChevronIcon, MessageIcon} from "./icons.tsx";

const FAQs = [
        {
            "title": "زمان و مکان برگزاری جشنواره",
            "description": "جشنواره ملی بومگردی ایران در تاریخ [تاریخ دقیق] در استان کرمان برگزار خواهد شد. مکان دقیق برگزاری در [نام محل] می باشد."
        },
        {
            "title": "اهداف برگزاری جشنواره",
            "description": "این جشنواره با هدف معرفی جاذبه های بومگردی ایران، توسعه گردشگری پایدار و حمایت از جامعه محلی در استان کرمان سازماندهی شده است."
        },
        {
            "title": "برنامه های جشنواره",
            "description": "برنامه های جشنواره شامل تورهای طبیعت گردی، نمایش صنایع دستی محلی، کارگاه های آموزشی، نمایشگاه عکس و فیلم و برنامه های فرهنگی می باشد."
        },
        {
            "title": "شرایط ثبت نام و شرکت",
            "description": "علاقه مندان می توانند از طریق وبسایت رسمی جشنواره به آدرس [آدرس سایت] ثبت نام نمایند. برخی برنامه ها رایگان و برخی نیازمند تهیه بلیت هستند."
        },
        {
            "title": "امکانات اقامتی",
            "description": "برای شرکت کنندگان امکانات اقامتی در اقامتگاه های بومگردی استان کرمان پیش بینی شده است. لیست کامل اقامتگاه ها در سایت جشنواره موجود است."
        },
        {
            "title": "نکات مهم برای سفر",
            "description": "شرکت کنندگان باید شرایط آب و هوایی کرمان را بررسی نمایند. رعایت اصول گردشگری مسئولانه و احترام به فرهنگ محلی الزامی است."
        }
    ];

const FAQSection = () => {
    return (
        <div className={'py-16 '}>
            <div className={'container mx-auto'}>
                <div className="flex flex-col md:flex-row justify-between items-start p-4 w-full ">
                    <div className={'w-full md:w-1/3 '}>
                        <div className="text-right mt-6 md:mt-0 flex flex-col items-center md:mb-0 mb-7 md:items-start">
                            <div
                                className="bg-primary text-white p-4 rounded-full inline-flex items-center justify-center mb-4">
                                <MessageIcon className="w-8 h-8"/>
                            </div>
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">سوالات متداول</h2>
                            <p className="text-gray-600 text-center md:text-right">
                                لورم ایپسوم متن ساختگی با تولید
                                <br/>
                                سادگی نامفهوم از صنعت چاپ.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 flex flex-col space-y-3">
                        {FAQs.map((item, index) => (
                            <FAQItem key={index} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable FAQ Item component
const FAQItem = (props: {title: string,description: string}) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className=" bg-white rounded-lg overflow-hidden shadow-sm hover:shadow transition-shadow duration-200">
            <div onClick={()=>setOpen(prev=>!prev)} className={'w-full flex items-center'}>
                <div className="py-4 px-6 w-full text-right">
                    <p className="text-gray-800 font-medium">{props.title}</p>
                </div>
                <div className="border-l border-gray-100 py-4 px-3 flex items-center justify-center">
                    <ChevronIcon className={`text-primary w-5 h-5 ${open && "-rotate-90"}`}/>
                </div>
            </div>
            {open && (
                <div className={'px-6 pb-6 text-justify'}>
                    {props.description}
                </div>
            )}
        </div>
    );
};

export default FAQSection;