const Shimmer=(()=>{
    return(
        <div id="sperate">
            <div id="shimmercards">
                {
                    Array(10).fill("").map((e,index)=>(
                        <div key={index} className="cardshimmer"></div>
                    ))
                }
            </div>
        </div>
    );
})
export default Shimmer;