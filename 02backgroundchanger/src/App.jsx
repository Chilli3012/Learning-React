import { useState } from "react"

function App() {
  const [color,setColor]=useState("olive")

  function setRed() {
    setColor("red");
  }
  function setGreen() {
    setColor("green");
  }
  function setBlue() {
    setColor("blue");
  }

   return (
    <>
      <div className=" container " style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: color
      }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full"
              style={{
                backgroundColor: "red "
              }}
              onClick={()=>setColor("red")}>
              Red
            </button>
            <button className="outline-none px-4 py-1 rounded-full"
              style={{
                backgroundColor: "green"
              }}
              onClick={()=>setColor("green")}>
              Green
            </button>
            <button className="outline-none px-4 py-1 rounded-full"
              style={{
                backgroundColor: "Blue"
              }}
              onClick={()=>setColor("blue")}>
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
