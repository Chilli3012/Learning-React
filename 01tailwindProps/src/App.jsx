import Card from "./components/card"

function App() {
  const newobj={
    age: 21,
    gender: "Male"
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-3xl">hello world</h1>
      <Card myname="Anurag" othervariable={newobj} />
    </>
  )
}

export default App
