export default function Packages({ packages }) {
  const display = packages.map((p) => <li>{p}</li>);

  return (
    <div>
      <div className="packages">
        <div className="packagesHeader">
          <h1>Our Packages</h1>
          <ul>{display}</ul>
        </div>
      </div>
    </div>
  );
}

// ln 2 For each package we are going to return a list item.
