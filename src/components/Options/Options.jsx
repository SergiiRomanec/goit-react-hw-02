import style from "./Options.module.css";

function Options({ options, setter, total, reset }) {
  return (
    <div className={style.container}>
      <button onClick={() => setter(options[0])} className={style.button}>
        {options[0]}
      </button>
      <button onClick={() => setter(options[1])} className={style.button}>
        {options[1]}
      </button>
      <button onClick={() => setter(options[2])} className={style.button}>
        {options[2]}
      </button>
      {total > 0 && (
        <button onClick={reset} className={style.button}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;