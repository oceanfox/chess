import React, { useEffect, useRef } from 'react'

const initialPiecePositions = [
    ['bR','bN','bB','bQ','bK','bB','bN','bR'],
    ['bP','bP','bP','bP','bP','bP','bP','bP'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['wP','wP','wP','wP','wP','wP','wP','wP'],
    ['wR','wN','wB','wQ','wK','wB','wN','wR']
]

const boardColours = [
    ['w','b','w','b','w','b','w','b'],
    ['b','w','b','w','b','w','b','w'],
    ['w','b','w','b','w','b','w','b'],
    ['b','w','b','w','b','w','b','w'],
    ['w','b','w','b','w','b','w','b'],
    ['b','w','b','w','b','w','b','w'],
    ['w','b','w','b','w','b','w','b'],
    ['b','w','b','w','b','w','b','w'],
]

function ChessBoard () {
    
    const canvasRef = useRef()
    useEffect(() => {
         const ctx =  canvasRef.current.getContext('2d')
        let xPos = 0;
        let yPos = 0;
        for(let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (boardColours[i][j] === 'w') {
                    ctx.fillStyle = '#d8d5b1';
                    ctx.fillRect(xPos, yPos, 100, 100);
            
                    console.log(i, j, "white", xPos, yPos);
                } else {
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(xPos, yPos, 100, 100);
                    console.log(i, j, "black", xPos, yPos);
                }
                yPos += 100;
            }
            yPos = 0;
            xPos += 100;
        }
        return () => {
        }
    }, [])
    
    
    return (
        <div>
            <canvas ref={canvasRef} width={800} height={800}/>
        </div>
    )
}

export default ChessBoard;
