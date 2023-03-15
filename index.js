export default function Debugger({ data }) {
  let debugArray = [];
  Object.keys(data).forEach((i, idx) =>
    debugArray.push({ data: data[i], name: i })
  );

  return debugArray.map((i, idx) => (
    <div key={idx} className="sign-border my-3">
      {i.name}
      <pre>{JSON.stringify(i.data, null, 2)}</pre>
    </div>
  ));
}
