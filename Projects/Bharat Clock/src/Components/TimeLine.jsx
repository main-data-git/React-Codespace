let CurrentTime = () => {
  let time = new Date();

  return (
    <center className="lead">
      This is the current Time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}{" "}
    </center>
  );
};

export default CurrentTime;
