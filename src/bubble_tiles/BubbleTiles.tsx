import { useState, useEffect } from 'react';

interface BubbleTilesProps {
    sections?: number;
    gridToWindowRatio?: number;
    zIndex?: number;
    color?: string;
    borderRadius?: string;
    bubbleSize?: number;
}


function BubbleTiles(props: BubbleTilesProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
    const [scrollPosition, setScrollPosition] = useState(0);


    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        const handleResize = () => {
            setWindowsWidth(window.innerWidth);
        }
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const sections = props.sections? props.sections : 10;
    const gridToWindowRatio = props.gridToWindowRatio? props.gridToWindowRatio : 1/3;
    const zIndex = props.zIndex? props.zIndex : -1;
    const bubbleColor = props.color? props.color : '#ffffff';
    const bubbleBorderRadius = props.borderRadius? props.borderRadius : '50%';
    const bubbleSize = props.bubbleSize? props.bubbleSize : 100;

    
    const gridWidth = windowsWidth * gridToWindowRatio;

    const frameStyle = {
        zIndex: zIndex,
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
    } as React.CSSProperties

    const gridStyle = {
        top: roundToNearest(mousePos.y + scrollPosition - gridWidth / 2, gridWidth / sections),
        left: roundToNearest(mousePos.x - gridWidth / 2, gridWidth / sections),
        position: 'relative',
        height: `${gridWidth}px`,
        gridTemplateRows: `repeat(${sections}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${sections}, minmax(0, 1fr))`,
        aspectRatio: '1/1',
        display: 'grid',
    } as React.CSSProperties


    return <div style={frameStyle}>
        <div style={gridStyle}>
            {
                Array.from(Array(sections ** 2).keys()).map((i) => {

                    const x = i % sections;
                    const y = Math.floor(i / sections);
                    const gridPosX = roundToNearest(mousePos.x - gridWidth / 2, gridWidth / sections);
                    const gridPosY = roundToNearest(mousePos.y + scrollPosition - gridWidth / 2, gridWidth / sections);
                    const posX = gridPosX + (x + 0.5) * gridWidth / sections;
                    const posY = gridPosY + (y + 0.5) * gridWidth / sections;
                    const distX = Math.abs(posX - mousePos.x);
                    const distY = Math.abs(posY - mousePos.y - scrollPosition);
                    const dist = Math.sqrt(distX * distX + distY * distY);

                    const borderStyle = {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }

                    const size= `${Math.max(0, (1 - (dist / gridWidth) * 2) * bubbleSize)}%`;

                    const bubbleStyle = {
                        height: size,
                        backgroundColor: bubbleColor,
                        borderRadius: bubbleBorderRadius,
                        aspectRatio: '1/1',
                    }
                    return <div style={borderStyle}>
                        {
                            <div key={i} style={bubbleStyle} />
                        }
                    </div>
                })
            }
        </div>
    </div>
}
function roundToNearest(value: number, interval: number) {
    return Math.round(value / interval) * interval;
}

export default BubbleTiles;