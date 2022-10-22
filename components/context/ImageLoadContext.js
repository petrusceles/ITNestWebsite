import { createContext } from "react";

const ImageLoadContext = createContext({
    imageCounter:0,
    setImageCounter: ()=>{}
})

export default ImageLoadContext;