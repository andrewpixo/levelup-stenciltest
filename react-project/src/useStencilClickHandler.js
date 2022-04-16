import {useRef, useEffect} from 'react';


export default function useStencilClickHandler(handler) {
    const ref = useRef();

    useEffect(() => {
        if(ref.current && handler) 
            ref.current.onclick = handler;
    })

    return ref;
}