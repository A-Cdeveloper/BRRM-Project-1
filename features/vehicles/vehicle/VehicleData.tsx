import { Vehicle } from "@/types/";
import { getMonthYearFromDate, getYearFromDate } from "@/utils/formatDate";
import { formatPrice } from "@/utils/formatPrice";

const VehicleData = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <div className="w-full lg:w-[50%]">
      <h2 className="text-3xl font-medium">
        {vehicle.make} {vehicle.model}
      </h2>
      {vehicle.typeName && (
        <p className="text-lg text-white/80"> {vehicle.typeName}</p>
      )}
      {vehicle.prices[0] && vehicle.prices[0].value && (
        <div className="text-primary font-bold text-5xl mb-1">
          {formatPrice(vehicle.prices[0].value)}
        </div>
      )}
      <div className=" text-sm [&>p]:mb-[4px] [&>p]:font-light [&>p>span]:font-medium">
        <p>
          <span>ID:</span> #{vehicle.customId}
        </p>
        {vehicle.mileage && (
          <p>
            <span>Mileage:</span> {vehicle.mileage} km
          </p>
        )}
        {vehicle.technicalData?.gears && (
          <p>
            <span>Gears:</span> {vehicle.technicalData.gears}
          </p>
        )}
        {vehicle.technicalData?.power && (
          <p>
            <span>Power:</span> {vehicle.technicalData.power}
          </p>
        )}
        {vehicle.technicalData?.fuel && (
          <p>
            <span>Fuel:</span> {vehicle.technicalData.fuel}
          </p>
        )}

        {vehicle.productionDate && (
          <p>
            <span>Production date:</span>{" "}
            {getYearFromDate(vehicle.productionDate)}
          </p>
        )}
        {vehicle.firstRegistration && (
          <p>
            <span>First registration:</span>{" "}
            {getMonthYearFromDate(vehicle.firstRegistration)}
          </p>
        )}

        {vehicle.technicalData?.engineVolume && (
          <p>
            <span>Engine Size:</span> {vehicle.technicalData.engineVolume} cc
          </p>
        )}

        {vehicle.bodyType && (
          <p>
            <span>Body type:</span>{" "}
            {vehicle.bodyType
              .replace(/_/g, "-")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </p>
        )}
        {vehicle.technicalData?.drivetrain && (
          <p>
            <span>Drivetrain:</span> {vehicle.technicalData.drivetrain}
          </p>
        )}
        {vehicle.technicalData?.seats && (
          <p>
            <span>Seats:</span> {vehicle.technicalData.seats}
          </p>
        )}
        {vehicle.technicalData?.doors && (
          <p>
            <span>Doors:</span> {vehicle.technicalData.doors}
          </p>
        )}
      </div>
    </div>
  );
};

export default VehicleData;
