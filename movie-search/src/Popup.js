import React from 'react'
import ReactCircleModal from 'react-circle-modal'

const PopUp = () => {
  return (
    <ReactCircleModal
    backgroundColor="#00308F"
    opacity="0.5"

      toogleComponent={onClick => (
        <button className="myBtn" onClick={onClick}>
          Click here to open popup
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div style={{color: "#fff", padding: '1em' }}>
          <p style={{ fontSize:"2em"}}>
            Happy coding to all fellow people!
          </p>
          <button className="myBtnInPopup" backgroundColor="#282c34" onClick={onClick}>
            Close popup
          </button>
        </div>
      )}
    </ReactCircleModal>
  )
}

export default PopUp