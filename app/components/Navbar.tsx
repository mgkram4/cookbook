import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-200">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Benfatis Book
      </Link>
    </div>
  );
};

export default Navbar;
