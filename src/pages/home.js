import React from "react";
import CommonStyles from "../common/styles/commonStyles";

const homeStyle = {
    home :{
        ...CommonStyles.containerBox,
        ...CommonStyles.colorPrimary
    }
}

const Home = ()=>{
    return(
        <div >
            Home
            <div style={CommonStyles.caja}>divider</div>
            <div></div>
        </div>
    )
}

export default Home