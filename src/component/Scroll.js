import React from "react";

const Scroll = (baby) => {
  return (
    <div style={{overflowY:'scroll',border: '1px solid black', height: '800px' }}>
        {baby.children}
    </div>
  )
}

export default Scroll;