function generateNumber(num) {
  const numbers = [];
  for (let i = num; i >= 0; i--) {
    numbers.push(i);
  }
  return numbers.reverse();
}
function primeChecker(num) {
  let isPrime = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    isPrime = true;
  }
  if (isPrime) {
    return "#E06469";
  } else {
    if (num % 2 == 0) {
      return "#A4D0A4";
    }
    return "#FFB84C";
  }
}

export default function Number(props) {
  const numbers = generateNumber(props.numbers);
  return (
    <div
      style={{
        color: "#fff",
        fontSize: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        margin: "10%",
        flexWrap: "wrap",
      }}
    >
      {numbers.map((number) => (
        <div
          style={{
            textAlign: "center",
            width: 30,
            padding: 30,
            background: primeChecker(number),
          }}
          key={number}
        >
          {number}
        </div>
      ))}
    </div>
  );
}
