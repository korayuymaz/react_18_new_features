import Transition from "../../components/use-transition";
import "./style.css";

function Trasitions() {
  return (
    <div className="container">
      <h2>Trasitions</h2>
      <h4>
        useTransition hook lets you update the state without blocking the UI
      </h4>
      <p>
        With this hook, we can specify any state update as non-urgent. These
        non-uregent state updates will occur simultaneously with other
        urgentstate updates, but the component rendering will not wait for the
        non-urgent state updates.
      </p>
      <Transition />
    </div>
  );
}

export default Trasitions;
