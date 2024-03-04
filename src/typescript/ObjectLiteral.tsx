interface Person {
  fullName: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    fullName: "Sebastian Rodriguez",
    age: 27,
    address: {
      country: "Chile",
      houseNo: 646,
    },
  };

  return (
    <>
      <h3>Objectos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
