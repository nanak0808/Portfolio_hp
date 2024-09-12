import React from 'react';

export const Aboutme = () => {
    return(
        <div className='Aboutme'>
            <img src='./pecco_sign.png' alt='Logo'/>
            <h4>pecco</h4>
            <div className='SelfIntroduce'>
                <a>【birth】</a><br/>
                <a>2002/02/16</a><br/>

                <a>【skills】</a><br/>
                <ul>
                    <li>Premire Pro(3年)</li>
                    <li>ちょっとJavaScript, React</li>
                </ul>

                <a>【qualification】</a><br/>
                <ul>
                    <li>TOEIC 830点</li>
                    <li>文部科学省後援 色彩検定2級</li>
                </ul>
            </div>
        </div>
    )
}