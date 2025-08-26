const VehicleDescription = ({ description }: { description: string }) => {
  return (
    <div
      className="w-full lg:w-[50%] font-light"
      role="region"
      aria-labelledby="description-title"
    >
      {description && (
        <>
          <h2 id="description-title" className="text-lg mb-1">
            DESCRIPTION:
          </h2>
          <p aria-describedby="description-title">{description}</p>
        </>
      )}
    </div>
  );
};

export default VehicleDescription;
