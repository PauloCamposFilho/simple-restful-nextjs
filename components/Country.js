const Country = (props) => {
  console.log(props);
  return (
    <h2>{props.name.common}</h2>
  );
};

export default Country;