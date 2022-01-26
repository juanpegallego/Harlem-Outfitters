import React from 'react';



function Banner({ title, subtitle, bgcColor, fontColor, height, image, fontSize }) {

    const styles = {
        width: '100%',
        backgroundColor: bgcColor,
        position: 'relative',
        color: fontColor,
        height: height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'space-evenly',
        fontFamily: 'Calibri',
        overflow: 'hidden',
        fontSize: fontSize
    }

    const imgStyle = {
        position: 'absolute',
        zIndex: '-1',
        width: '100%',
        filter: 'brightness(70%) contrast(60%)'
    }

    const titleStyle = {
        paddingLeft: '50px'
    }

    return <article style={styles}>
        <img src={image} style={imgStyle} alt={image} />
        <h1 style={titleStyle}>{title}</h1>
        <h4 style={titleStyle}>{subtitle}</h4>
    </article>;
}

export default Banner;
