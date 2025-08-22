import { Vehicle } from "@/types/";
import { getMonthYearFromDate, getYearFromDate } from "@/utils/formatDate";
import { formatPrice } from "@/utils/formatPrice";

const VehicleData = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <div className="w-full lg:w-[50%]">
      <h2 className="text-3xl font-medium">
        {vehicle.make} {vehicle.model}
      </h2>
      <p className="text-lg text-white/80">{vehicle.seriesName}</p>
      <div className="text-primary font-bold text-5xl mb-1">
        {formatPrice(vehicle.prices[0].value)}
      </div>
      <div className=" text-sm [&>p]:mb-[4px] [&>p]:font-light [&>p>span]:font-medium">
        <p>
          <span>ID:</span> #{vehicle.customId}
        </p>
        {vehicle.mileage && (
          <p>
            <span>Mileage:</span> {vehicle.mileage} km
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
        {vehicle.typeName && (
          <p>
            <span>Engine:</span> {vehicle.typeName}
          </p>
        )}
        {vehicle.generation && (
          <p>
            <span>Generation:</span> {vehicle.generation}
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
      </div>
    </div>
  );
};

export default VehicleData;
