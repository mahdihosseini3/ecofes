import {ReactNode, useEffect, useRef, useState} from "react";

function Sponsors() {
    const x = 130;
    const imagesUrl = Array.from({length: 5}).map((_,i) => `/images/sponsors/${i+1}.png`)

    return (
        <div>
            <Slider items={imagesUrl.map((url,i) => (
                <img
                    style={{
                        width: `${x}px`,
                        height: `${x}px`,
                        objectFit: "contain"
                    }}
                    src={url}
                    key={i}
                />
            ))} />
            <Slider reverse items={imagesUrl.map((url,i) => (
                <img
                    style={{
                        width: `${x}px`,
                        height: `${x}px`,
                        objectFit: "contain"
                    }}
                    src={url}
                    key={i}
                />
            ))} />
        </div>
    )
}

function Slider(props: {
    items: ReactNode[],
    reverse?: boolean
}) {
    const [final, setFinal] = useState([
        ...props.items,
        ...props.items,
        ...props.items
    ])
    const init = 500;
    const frame = 100;
    const [X2, setX2] = useState(0)
    const [X, setX] = useState(0);
    const thread = useRef<number | undefined>(undefined);



    useEffect(() => {
        thread.current ||= setTimeout(()=>{
            thread.current = undefined;
            setX(prev => props.reverse ? prev-frame:prev+frame);
        },250);

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
            {X} ({final.length})
            <div className={`flex ${!props.reverse ? "items-start":"items-end flex-row-reverse"} w-full gap-5 transition-all duration-[2s]`} style={{
                transform: `translateX(${X}px)`
            }}>
                {final}
            </div>
        </div>
    )
}

export default Sponsors;