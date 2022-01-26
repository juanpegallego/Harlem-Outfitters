import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const container__style = {
    position: 'fixed',
    right: '20px',
    top: '20px',
    fontSize: 'large',
    zIndex: '999',
    backgroundColor: 'green',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
const link__style = {
    fontSize: 'large',
    color: 'white'
}



function WhatsappWidget() {
    return <div style={container__style}>
        <a href='https://wa.me/1166132211' style={link__style} target='_blank'>
            <WhatsAppIcon />
        </a>
    </div>


}

export default WhatsappWidget;
