const SimpleInputComponent = () => {
  return (
    <div className="container">
      <h1>Hello</h1>
      <label className="form-label" htmlFor="name">
        Inserisci il tuo nome
      </label>
      <input
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        autoComplete="off"
        className="form-control"
        id="name"
        type="text"
      />
      <p>Ciao {firstName}</p>
    </div>
  );
};

export default SimpleInputComponent;
