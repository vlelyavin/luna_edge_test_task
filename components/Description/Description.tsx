export const Description = ({ property, value }: { property: string; value: string }) => {
  return (
    <p>
      <span className="font-bold">{property}</span>
      {value}
    </p>
  );
};
