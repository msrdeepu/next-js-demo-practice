import Link from "next/link";
const Header = () => {
  return (
    <div>
      <ul style={{ listStyle: "none" }} className="flex flex-row justify-end">
        <li className="m-2">Home</li>
        <li className="m-2">
          <Link href="/about">About</Link>
        </li>
        <li className="m-2">Contact</li>
      </ul>
    </div>
  );
};

export default Header;
