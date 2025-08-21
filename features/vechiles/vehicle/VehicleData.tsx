const VehicleData = () => {
  return (
    <div className="w-full lg:w-[50%]">
      <h2 className="text-3xl font-medium">Porche Cayenne</h2>
      <p className="text-lg text-white/80">
        3.0 Turbo PDK - pano - CC - 360° camera - Boses
      </p>
      <div className="text-primary font-bold text-5xl mb-1">€ 59.995</div>
      <div className=" text-sm [&>p]:mb-[4px] [&>p]:font-light [&>p>span]:font-medium">
        <p>
          <span>ID:</span> #0045
        </p>
        <p>
          <span>Mileage:</span> 44.090km
        </p>
        <p>
          <span>Gear:</span> 8-speed Tiptronic S
        </p>
        <p>
          <span>Power:</span> 195 kW (265 HP)
        </p>
        <p>
          <span>Fuel:</span> Diesel
        </p>
        <p>
          <span>Production date:</span> 2019
        </p>
        <p>
          <span>First registration:</span> 10/2020
        </p>
        <p>
          <span>Engine size:</span> 2,995 cc
        </p>
        <p>
          <span>Body type:</span> Off-road / Pick-up
        </p>
        <p>
          <span>Drivetrain:</span> 4WD
        </p>
        <p>
          <span>Seats:</span> 5
        </p>
        <p>
          <span>Doors:</span> 4
        </p>
      </div>
    </div>
  );
};

export default VehicleData;
