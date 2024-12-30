import React, { useState } from 'react';
import '../styles/ContentSlider.css';

function ContentBlock({ children }) {
    return (
        <div className="contentBlock">
            {children}
        </div>
    );
}

export default function ContentSlider({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="sliderContainer">
            <div className="contentSlider">
                <div className='slider'>
                    {React.Children.map(children, (child, index) => (
                        <div 
                            className={`sliderCheck ${index === activeIndex ? 'active' : ''}`} // Добавление класса 'active'
                            key={index} 
                            onClick={() => setActiveIndex(index)}
                        >
                        </div>
                    ))}
                </div>
                <div className="contentWrapper">
                    <div className="content">
                        {React.Children.map(children, (child, index) => {
                            if (index === activeIndex) {
                                return (
                                    <div 
                                        className={`sliderContentItem ${index}`} 
                                        key={index} 
                                        active={index === activeIndex}
                                    >
                                        {child}
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className='contentInfo'>
                        <div className='infoBlock'>
                            <div className='infoTitle'>
                                {/* Заголовок */}
                            </div>
                            <div className='infoText'>
                                {/* Текст описания */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
