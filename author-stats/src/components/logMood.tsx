
export default function logMood() {
    return(
        <div>
            <div className="flex gap-[2em] justify-center object-center p-5">
                <img 
                    onMouseOver={(e) => e.currentTarget.src = "/1-hover.svg"}
                    onMouseOut={(e) => e.currentTarget.src = "/1.svg"}
                    src="/1.svg" 
                    alt="poor" 
                    className="w-[3em] hover:w-[3.4em] object-contain" />
                <img 
                    onMouseOver={(e) => e.currentTarget.src = "/2-hover.svg"}
                    onMouseOut={(e) => e.currentTarget.src = "/2.svg"}
                    src="/2.svg" 
                    alt="fair" 
                    className="w-[3em] hover:w-[3.4em] object-contain" />
                <img 
                    onMouseOver={(e) => e.currentTarget.src = "/3-hover.svg"}
                    onMouseOut={(e) => e.currentTarget.src = "/3.svg"}
                    src="/3.svg" 
                    alt="neutral" 
                    className="w-[3em] hover:w-[3.4em] object-contain" />
                <img 
                    onMouseOver={(e) => e.currentTarget.src = "/4-hover.svg"}
                    onMouseOut={(e) => e.currentTarget.src = "/4.svg"}
                    src="/4.svg" 
                    alt="good" 
                    className="w-[3em] hover:w-[3.4em] object-contain" />
                <img 
                    onMouseOver={(e) => e.currentTarget.src = "/5-hover.svg"}
                    onMouseOut={(e) => e.currentTarget.src = "/5.svg"}
                    src="/5.svg" 
                    alt="great" 
                    className="w-[3em] hover:w-[3.4em] object-contain" />
            </div>
        </div>
    )
}