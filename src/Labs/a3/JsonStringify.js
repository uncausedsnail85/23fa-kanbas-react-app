function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  return (
    <div>
      <h3>JsonStringify</h3>
      squares = {JSON.stringify(squares)}
    </div>
  );
}

export default JsonStringify;