import { Vehicle } from "@/types/";
import { getMonthYearFromDate, getYearFromDate } from "@/utils/formatDate";
import { formatPrice } from "@/utils/formatPrice";

const VehicleData = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <div
      className="w-full lg:w-[50%]"
      role="region"
      aria-labelledby="vehicle-title"
    >
      <h2 id="vehicle-title" className="text-3xl font-medium">
        {vehicle.make} {vehicle.model}
      </h2>
      {vehicle.typeName && (
        <p className="text-lg text-white/80"> {vehicle.typeName}</p>
      )}
      {vehicle.prices[0] && vehicle.prices[0].value && (
        <div
          className="text-primary font-bold text-5xl mb-1"
          aria-label={`Price: ${formatPrice(vehicle.prices[0].value)}`}
        >
          {formatPrice(vehicle.prices[0].value)}
        </div>
      )}
      <div
        className=" text-sm [&>p]:mb-[4px] [&>p]:font-light [&>p>span]:font-medium"
        role="list"
        aria-label="Vehicle specifications"
      >
        <p role="listitem">
          <span>ID:</span> #{vehicle.customId}
        </p>
        {vehicle.mileage && (
          <p role="listitem">
            <span>Mileage:</span> {vehicle.mileage} km
          </p>
        )}
        {vehicle.technicalData?.gears && (
          <p role="listitem">
            <span>Gears:</span> {vehicle.technicalData.gears}
          </p>
        )}
        {vehicle.technicalData?.power && (
          <p role="listitem">
            <span>Power:</span> {vehicle.technicalData.power}
          </p>
        )}
        {vehicle.technicalData?.fuel && (
          <p role="listitem">
            <span>Fuel:</span> {vehicle.technicalData.fuel}
          </p>
        )}

        {vehicle.productionDate && (
          <p role="listitem">
            <span>Production date:</span>{" "}
            {getYearFromDate(vehicle.productionDate)}
          </p>
        )}
        {vehicle.firstRegistration && (
          <p role="listitem">
            <span>First registration:</span>{" "}
            {getMonthYearFromDate(vehicle.firstRegistration)}
          </p>
        )}

        {vehicle.technicalData?.engineVolume && (
          <p role="listitem">
            <span>Engine Size:</span> {vehicle.technicalData.engineVolume} cc
          </p>
        )}

        {vehicle.bodyType && (
          <p role="listitem">
            <span>Body type:</span>{" "}
            {vehicle.bodyType
              .replace(/_/g, "-")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </p>
        )}
        {vehicle.technicalData?.drivetrain && (
          <p role="listitem">
            <span>Drivetrain:</span> {vehicle.technicalData.drivetrain}
          </p>
        )}
        {vehicle.technicalData?.seats && (
          <p role="listitem">
            <span>Seats:</span> {vehicle.technicalData.seats}
          </p>
        )}
        {vehicle.technicalData?.doors && (
          <p role="listitem">
            <span>Doors:</span> {vehicle.technicalData.doors}
          </p>
        )}
      </div>
    </div>
  );
};

export default VehicleData;
