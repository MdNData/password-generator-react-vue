import { dataEnding } from "../../../data/footer/Ending/dataEnding";

export const Ending = () => {
  return (
    <p>
      {dataEnding.madeIn}
      <br />
      <br />
      © {dataEnding.year} {dataEnding.producer}
    </p>
  );
};
