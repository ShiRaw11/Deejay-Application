import { Link } from 'react-router-dom'

function NavLink ({to,linkTitle,linkStyle}) {
  return (
    <div className={"flex ml-[4px]"}>
      <Link
        to={to}
        className={`text-black text-[16px] text-purple hover:scale-110 ${
          linkStyle ? linkStyle : ""
        }`}
      >
        {linkTitle}
      </Link>
    </div>
  );
}

export default NavLink;