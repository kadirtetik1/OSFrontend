import { unstable_useBlocker as useBlocker } from 'react-router-dom'

function Prompt(props) {
    const block = props.when
    
    useBlocker(() => {
        if (block) {
            return ! window.confirm(props.message)
        }
        return false
    })

  return (
    <div key={block}/>
  )
}

export default Prompt