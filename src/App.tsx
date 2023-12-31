
import BubbleTiles from './bubble_tiles/BubbleTiles'
import './App.css'
import { useState, useEffect } from 'react'
import React from 'react'

/*
    sections?: number;
    gridToWindowRatio?: number;
    zIndex?: number;
    color?: string;
    borderRadius?: string;
    bubbleSize?: number;
*/


function App() {
    const [sections, setSections] = useState(10);
    const [gridToWindowRatio, setGridToWindowRatio] = useState(1 / 3);
    const [color, setColor] = useState('#ffffff');
    const [borderRadius, setBorderRadius] = useState('50%');
    const [bubbleSize, setBubbleSize] = useState(100);

    useEffect(() => {
        document.title = 'React Bubble Tiles';
    }, []);


    const optionStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '120%',
        marginBottom: '1rem',
    } as React.CSSProperties

    return (
        <>
            <BubbleTiles sections={sections} gridToWindowRatio={gridToWindowRatio} color={color} borderRadius={borderRadius} bubbleSize={bubbleSize} />
            <div style={
                {
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    alignItems: 'start',
                    zIndex: 10,
                }
            }>
                <div style={optionStyle}>
                    <span>sections: </span>
                    <input type="number" value={sections} onChange={(e) => setSections(parseInt(e.target.value))} />
                </div>
                <div style={optionStyle}>
                    <span>gridToWindowRatio: </span>
                    <input type="number" value={gridToWindowRatio} onChange={(e) => setGridToWindowRatio(parseFloat(e.target.value))} />
                </div>
                <div style={optionStyle}>
                    <span>color: </span>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <div style={optionStyle}>
                    <span>borderRadius: </span>
                    <input type="text" value={borderRadius} onChange={(e) => setBorderRadius(e.target.value)} />
                </div>
                <div style={optionStyle}>
                    <span>bubbleSize: </span>
                    <input type="number" value={bubbleSize} onChange={(e) => setBubbleSize(parseInt(e.target.value))} />
                </div>
            </div>
        </>
    )
}

export default App
