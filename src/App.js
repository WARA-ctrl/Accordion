import "./App.css";
import SingleContent from "./Component/SingleContent";
import data from "./Datas/datas";
import { useState } from "react";

function App() {
  const [content, setContent] = useState(data);
  return (
    <main>
      <div className="container">
        <div className="text">
          <h1>Trick questions</h1>
        </div>
        <section>
          {content.map((data) => {
            return <SingleContent key={data.id} {...data} />;
          })}
        </section>

        <h5>from parade.com</h5>
        <h6>MARYN LILESMAY 13, 2022</h6>
      </div>
    </main>
  );
}

export default App;
