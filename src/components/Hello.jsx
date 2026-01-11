import React from "react";

function Hello() {
  const arr = [
    {
      name: "Vikas",
      age: 18,
    },
    {
      name: "Suresh",
      age: 21,
    },
    {
      name: "Rahul",
      age: 21,
    },
  ];
  return (
    <>
      <h1>hello</h1>
      {arr.map((data) => (
        <div>
          <p>{data.name}</p>
          <p>{data.age}</p>
        </div>
      ))}
    </>
  );
}

export default Hello;
