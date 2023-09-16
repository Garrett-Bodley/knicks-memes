import { useEffect, useState } from "react";

const useP5DupeRemover = () => {
  const [parent, setParent] = useState<Element>()
  useEffect(() => {
    if(!parent) return
    const allButFirst = Array.from(parent.children).slice(1)
    allButFirst.forEach(child => parent.removeChild(child))
  }, [parent])

  return setParent
}

export default useP5DupeRemover

// Thank you Allie-Howe! https://github.com/Gherciu/react-p5/issues/91#issuecomment-1575266833