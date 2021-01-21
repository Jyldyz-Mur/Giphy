import React, {useState} from 'react'

export default function Forms(props) {
    const [val, setVal] = useState('')
    
    const getValueByInput = (event) => {
        event.preventDefault()
        props.search(val)
    }
    return (
        <div>
            <form onSubmit={getValueByInput}>
                <input type="text" value={val}
                onChange={event=>
                    setVal(event.target.value)
                 } />
                <button>search</button>
            </form>
        </div>
    )
}
