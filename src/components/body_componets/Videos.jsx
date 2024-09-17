import React from 'react';
import Youtube from 'react-youtube';
import './Videos.css';

export const Videos = () => {
    return (
        <div className='videos'>
            <h4>CrazyRacoon担当編集の方からご依頼頂いています！</h4>
            <a>▼ Portfolio</a>
            <p></p>
            {/* <div className='list'>
                <a href='' className='wrap-element'>
                    <article>
                        <Youtube videoId='MSSOO_9P4EI' />
                    </article>
                </a>
                <a href='' className='wrap-element'>
                    <article>
                        <Youtube videoId='dm1d1T60wyw' />
                    </article>
                </a>
                <a href='' className='wrap-element'>
                    <article>
                        <Youtube videoId='kBjrwhkobRs' />
                    </article>
                </a>
                <a href='' className='wrap-element'>
                    <article>
                        <Youtube videoId='vkhomCn-FQY' />
                    </article>
                </a>
                <a href='' className='wrap-element'>
                    <article>
                        <Youtube videoId='Sm1r87YuSHE' />
                    </article>
                </a>
                <a href='' className='wrap-element'>
                    <article>
                        <Youtube videoId='2Tcb5yn8Nes' />
                    </article>
                </a>
            </div> */}
            <div className='portfolio'>
                <Youtube videoId='MSSOO_9P4EI' /><br/>
                <Youtube videoId='dm1d1T60wyw' /><br/>
                <Youtube videoId='kBjrwhkobRs' /><br/>
                <Youtube videoId='vkhomCn-FQY' /><br/>
                <Youtube videoId='Sm1r87YuSHE' /><br/>
                <Youtube videoId='2Tcb5yn8Nes' /><br/>
            </div>
        </div >
    )
}