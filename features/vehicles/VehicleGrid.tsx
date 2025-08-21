import { Button } from "@/components/ui";
import { vehicles } from "@/data/vechicles";
import VehicleItem from "./VehicleItem";

export const VehicleGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {vehicles.map((vehicle) => (
          <VehicleItem key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
      <div className="flex justify-center my-16 w-full max-w-[500px] mx-auto">
        <Button size="lg">LOAD 34 MORE</Button>
      </div>
    </>
  );
};
