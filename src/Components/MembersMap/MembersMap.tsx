import Map from "./Map";
const MembersMap = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center mt-2">Integrantes do NCB</h1>
      <h2 className="text-xl text-center">
        Nosso grupo é composto por alunos de diversos cursos, idades e estados
        do Brasil.
      </h2>
      <Map />
    </div>
  );
};

export default MembersMap;
