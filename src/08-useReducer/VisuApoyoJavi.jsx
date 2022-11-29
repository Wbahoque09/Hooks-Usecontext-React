import { questions } from "./ApoyoJavi";
const VisuApoyoJavi = () => {

  return (
    <div>
    {questions.map((elemt,index)=><div key={index}>
        <h3>{elemt?.q}</h3>
        {elemt?.a}
    </div>)}
    </div>
  )
}

export default VisuApoyoJavi;
