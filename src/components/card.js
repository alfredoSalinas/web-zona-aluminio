import React from "react";

const Card=(props) =>{
    const{
        type,
        children
    }=props
    const styles = {
        uno : {
            
            backgroundColor: '#fff',
            borderRadius: 5,
            color: '#2A3B47',
            boxShadow: '3px 3px 3px 1.5px #949ba0',
            border: 1,
            margin: '2%'
        },
        dos: {
            width: 600,
            backgroundColor: 'transparent',
            borderRadius: 5,
            color: '#2A3B47',
            margin: '2%',
        },
        tres : {
            width: '40%',
            height: 1000,
            backgroundColor: '#fff',
            color: '#fff',
            border: 1,
            marginLeft: 0,
            marginTop: '60px',
            position: 'absolute'
        }
    }

    const className = [styles.uno, styles.dos, styles.tres]

    return(
        <div style={className[type]}>
            {children}
        </div>
    )
}

export default Card