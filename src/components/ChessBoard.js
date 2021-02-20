//const white = #000000;
// const ReactDOM = require('react-dom');
// const React = require('react');
import React, { Component } from 'react'
import WhiteKing from '../sprites/WhiteKing'
import image from '../images/0.svg'
//import ReactDOM from 'react-dom';

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

class ChessBoard extends Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas(){
        const ctx = this.refs.canvas.getContext('2d');
        let xPos = 0;
        let yPos = 0;
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                if (boardColours[i][j] === 'w'){
                    ctx.fillStyle = '#d8d5b1';
                    ctx.fillRect(xPos,yPos,100,100);
                    
                    console.log(i,j,"white", xPos,yPos);
                }
                else {
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(xPos,yPos,100,100);
                    console.log(i,j,"black",xPos,yPos);
                }
                yPos+=100;
            }
            yPos = 0;
            xPos+=100;
        }
        
        console.log('White kings',WhiteKing());
    
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        }
        img.src = image;
        console.log('image .. ',img);
    
        ctx.fillStyle = ctx.createPattern(img, 'no-repeat');
        ctx.fillRect(0,0, 100, 100)
    
    }
    render() {
        return (
            <div>
                <canvas ref="canvas" width={800} height={800}/>
            </div>
        )
    }
}

export default ChessBoard;
// ReactDOM.render(<CanvasComponent/>,
// document.getElementById('container'));
