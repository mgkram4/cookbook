import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-tan-10 rounded-lg mt-2">
      <Link href="/" className="btn btn-ghost normal-case text-xl ">
        Benfatis Book
      </Link>
    </div>
  );
};

export default Navbar;
