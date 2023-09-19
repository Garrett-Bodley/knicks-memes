import Sketch from 'react-p5'
import p5Types from 'p5'
import useP5DupeRemover from '../hooks/useP5DupeRemover'
import { useState, useRef } from 'react'
import React from 'react'
import dukeOfYork from '../images/duke of york.jpeg'

let x = 50
const y = 50
// type RGB = `rgb(${number}, ${number}, ${number})`
// type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
// type HEX = `#${string}`
// type HSL = `hsl(${number}, ${number}%, ${number}%)`
// type HSLA = `hsla(${number}, ${number}, ${number}, ${number})`

// type Color = RGB | RGBA | HEX | HSL | HSLA

export default function MemeMaker() {

  const [captionOne, setCaptionOne] = useState<string>("")
  const [textColor, setTextColor] = useState<string>("")
  const bgImg = useRef<any>()


  const setParent = useP5DupeRemover()
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    setParent(canvasParentRef)
    const bg = p5.loadImage(dukeOfYork)
    bgImg.current = bg
    console.log(`Background width: ${bg.width}`)
    p5.createCanvas(bg.width, bg.height).parent(canvasParentRef)
  }

  const draw = (p5: p5Types) => {
    p5.background(bgImg.current)
    p5.ellipse(x, y, 70, 70)
    x++
    p5.textSize(32)
    p5.text(`${captionOne}`, 50, 50)
    p5.fill(textColor)
  }

  const handleCaptionOneChange = (e: React.ChangeEvent) => {
    e.preventDefault()
    setCaptionOne((e.target as HTMLInputElement).value)
  }

  const handleTextColorChange = (e: React.ChangeEvent) => {
    e.preventDefault()
    setTextColor((e.target as HTMLInputElement).value)
  }

  return (
    <>
      <label>Color: 
        <input type="color" onChange={handleTextColorChange}></input>
      </label>
      <label>Caption One: 
        <input value={captionOne} onChange={handleCaptionOneChange} type="text"/>
      </label>
      <div className="sketch-container">
        <Sketch setup={setup} draw={draw}/>
        <img src={dukeOfYork} alt="" />
      </div>
    </>
  )
}
