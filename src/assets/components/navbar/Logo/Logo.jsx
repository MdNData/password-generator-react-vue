import { dataLogo } from "../../../data/navbar/Logo/dataLogo";

export const Logo = () => {
  return (
    <div className="nav-logo">
      <a href="/password-generator-react-vue/">
        <img src={dataLogo.logo} alt={dataLogo.logoDescription} />
        <h2>{dataLogo.name}</h2>
      </a>
    </div>
  );
};
