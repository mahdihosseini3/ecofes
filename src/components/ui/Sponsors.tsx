import {ReactNode, useEffect, useRef, useState} from "react";

function Sponsors({size: x = 130}: {
    size?: number
}) {
    const imagesUrl = Array.from({length: 5}).map((_,i) => `/images/sponsors/${i+1}.png`)
    const images = imagesUrl.map((url,i) => (
        <img
            style={{
                width: `${x}px`,
                height: `${x}px`,
                objectFit: "contain"
            }}
            src={url}
            key={i}
        />
    ));

    return (
       <div>
           <div>
               <h3>حامیان جشنواره</h3>
               <p className={'text-center'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
           </div>
           <div className={'flex flex-col gap-5'}>
               <Slider items={images} />
               <Slider reverse items={images} />
               <Slider items={images} />
           </div>
       </div>
    )
}

function Slider(props: {
    items: ReactNode[],
    reverse?: boolean,
    config?: Partial<{
        frame: number,
        interval: number,
        init: number
    }>
}) {
    const {init = 500, frame = 100, interval = 1000} = props.config  || {};
    const [final, setFinal] = useState([
        ...props.items,
        ...props.items,
        ...props.items
    ])
    const [X2, setX2] = useState(0)
    const [X, setX] = useState(0);
    const thread = useRef<number | undefined>(undefined);



    useEffect(() => {
        thread.current ||= setTimeout(()=>{
            thread.current = undefined;
            setX(prev => props.reverse ? prev-frame:prev+frame);
        },interval);

        if (props.reverse ? X < X2:X > X2) {
            setFinal(prev => [
                ...prev,
                ...props.items
            ]);
            setX2(p=>props.reverse ? p-init:p+init);
        }
    }, [X]);

    return (
        <div className={'w-full  overflow-hidden'}>
            <div className={`flex ${!props.reverse ? "items-start":"items-end flex-row-reverse"} w-full gap-5 transition-all duration-[1.1s] ease-linear`} style={{
                transform: `translateX(${X}px)`
            }}>
                {final}
            </div>
        </div>
    )
}

export default Sponsors;