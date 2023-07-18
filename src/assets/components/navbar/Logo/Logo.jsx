import { dataLogo } from "../../../data/navbar/Logo/dataLogo";

export const Logo = () => {
  return (
    <div className="nav-logo">
      <a href="/index.html">
        <img src={dataLogo.logo} alt={dataLogo.logoDescription} />
        <h2>{dataLogo.name}</h2>
      </a>
    </div>
  );
};
