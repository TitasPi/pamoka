import UseEffectElement from "./UseEffectElement";
import UseStateElement from "./UseStateElement";

function App() {
  return (
    <div>
      <div className="border border-black p-2 m-2">
        <UseStateElement />
      </div>
      <div className="border border-black p-2 m-2">
        <UseEffectElement />
      </div>
    </div>
  );
}

export default App;
