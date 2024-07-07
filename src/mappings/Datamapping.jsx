
function Datamapping(props) {
  return (
    <>
      <div className="grid sm:grid-cols-2 m-3">
        {props.Data.map((Data1, index) => {
          return (
            <div  key={index} className="m-6">
              <button className=" bg-orange-200 px-4 py-1 rounded-2xl mb-2">{Data1.bar}</button>
              <p className="text-3xl font-bold mb-2">{Data1.heading}</p>
              <p className="mb-2">{Data1.content}</p>
              <button className="bg-red-500 rounded p-2 text-white">{Data1.button}</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Datamapping


