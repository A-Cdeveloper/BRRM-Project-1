import { Button } from "@/components/ui";

interface VehicleErrorProps {
  message?: string;
  onRetry?: () => void;
}

export const VehicleError = ({
  message = "Failed to load vehicle data",
  onRetry,
}: VehicleErrorProps) => {
  const handleRetry = onRetry || (() => window.location.reload());

  return (
    <div className="text-center py-8">
      <p className="text-accent mb-4">{message}</p>
      <Button onClick={handleRetry}>Retry</Button>
    </div>
  );
};

export default VehicleError;
