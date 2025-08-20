import Spinner from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center z-50">
      <Spinner />
    </div>
  );
}
