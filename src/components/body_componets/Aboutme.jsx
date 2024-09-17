import React from 'react';
import './Aboutme.css'

export const Aboutme = () => {
    return (
        <div className='aboutme'>
            
            <div className='big-block'>
                <img src='./pecco_sign.png' alt='Logo' width='150' />
                <div className='block'>
                    <a>Kyoto Institute of Technology</a><br />
                    <a>Infomation engineerging / M1</a><br />
                </div>
                <div className='block'>
                    <h3>Qualifications</h3>
                    <a>TOEIC 830点</a><br />
                    <a>文部科学省後援 色彩検定2級</a><br />
                </div>
                <div className='block'>
                    <h3>Skills</h3>
                    <a>Premire Pro(3年)</a><br />
                    <a>ちょっとJavaScript, React</a><br />
                </div>
            </div>
        </div>
    )
}