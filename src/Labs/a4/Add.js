function Add({ a, b }) {
    return (
      <div>
        <h2>Add</h2>
        <p>
          {a} + {b} = {a + b}
        </p>
      </div>
    );
  }
  export default Add;

  // Components accept parameters as attributes whose names match the 
  // keys in the object destruct parameter of the component function declaration
  // <Add a={1} b={2} />
  // {Add({a: 1, b:2})}