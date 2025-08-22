const VehicleDescription = ({ description }: { description: string }) => {
  return (
    <div className="w-full lg:w-[50%] font-light">
      {description && (
        <>
          <h2 className="text-lg mb-1">DESCRIPTION:</h2>
          {description}
        </>
      )}
    </div>
  );
};

export default VehicleDescription;
