export const BasicTypes = () => {
  const name: string = "Sebastian";
  const age: number = 27;
  const isActive: boolean = true;

  const powers: string[] = ["React", "Angular"];

  return (
    <>
      <h3>Tipos Básicos</h3>
      {name} {age} {isActive ? "true" : "false"}
      <br />
      {powers.join(", ")}
    </>
  );
};
