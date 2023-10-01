import Transition from "../../components/use-transition";

function Trasitions() {
  return (
    <div>
      <h2>Trasitions</h2>
      <h4>
        useTransition hook lets you update the state without blocking the UI
      </h4>
      <p>
        With this hook, we can specify any state update as non-urgent. These
        non-uregentstate updates will occur simultaneously with other urgent
        state updates, but the component rendering will not wait for the
        non-urgent state updates.
      </p>
      <Transition />
    </div>
  );
}

export default Trasitions;
