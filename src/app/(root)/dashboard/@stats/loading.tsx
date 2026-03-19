import { FaSpinner } from "react-icons/fa";

export default function DashboardLoading() {
  return (
    <div className="p-6 flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 text-center ">
        <FaSpinner className="w-4 h-4" />
      </div>
    </div>
  );
}