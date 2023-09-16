import Sketch from 'react-p5'
import p5Types from 'p5'
import useP5DupeRemover from '../hooks/useP5DupeRemover'

let x = 50
const y = 50

export default function MemeMaker() {

  const setParent = useP5DupeRemover()
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    setParent(canvasParentRef)
    p5.createCanvas(500,500).parent(canvasParentRef)
  }

  const draw = (p5: p5Types) => {
    p5.background(0)
    p5.ellipse(x, y, 70, 70)
    x++
  }
  return (
    <Sketch setup={setup} draw={draw}/>
  )
}
