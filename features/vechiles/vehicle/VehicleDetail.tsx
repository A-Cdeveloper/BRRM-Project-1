import VehicleData from "./VehicleData";
import VehicleDescription from "./VehicleDescription";
import VehicleEquipment from "./VehicleEquipment";
import VehicleImageSlider from "./vehicle-slider";

const VehicleDetail = () => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-2 space-y-3 lg:space-y-0 mt-1 mb-8">
        <VehicleImageSlider />
        <VehicleData />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-2 space-y-3 lg:space-y-0 lg:my-8">
        <VehicleDescription />
        <VehicleEquipment />
      </div>
    </>
  );
};

export default VehicleDetail;
