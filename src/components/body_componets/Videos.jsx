import React from 'react';
import Youtube from 'react-youtube';

export const Videos = () => {
    return(
        <div className='Videos'>
            <h4>CrazyRacoon担当編集の方からのご依頼実績アリです</h4>
            <div className='Line'>
                <Youtube videoId='MSSOO_9P4EI'/>
                <Youtube videoId='dm1d1T60wyw'/>
                <Youtube videoId='kBjrwhkobRs'/>
            </div>
            <div className='Line'>
                <Youtube videoId='Sm1r87YuSHE'/>
                <Youtube videoId='vkhomCn-FQY'/>
                <Youtube videoId='2Tcb5yn8Nes'/>
            </div>
        </div>
    )
}