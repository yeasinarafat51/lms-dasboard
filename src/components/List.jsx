import Button from "../common/Button";
import { RxDot } from "react-icons/rx";

const List = () => {
  const assignments = [
    {
      title: "Conducting User Research...",
      course: "User Research and Personas...",
      dueDate: "July 1, 2024",
      status: "Done",
      submitStatus: "Submitted",
    },
    {
      title: "Wireframing Basics...",
      course: "Design Foundations",
      dueDate: "July 5, 2024",
      status: "Progress",
      submitStatus: "Submitted",
    },
    {
      title: "Prototyping with Figma...",
      course: "Design Systems",
      dueDate: "July 10, 2024",
      status: "Pending",
      submitStatus: "Not Submitted",
    },
  ];

  return (
    <div className="p-4">
      {/* Table Container */}
      <div className="space-y-3">
        {/* Header Row */}
        <div className="grid grid-cols-5 w-[989px] h-[48px] shadow-md bg-[#E4E4E4] py-2 px-4 rounded-md text-sm font-bold text-gray-700">
          <div className="text-left">Assignment Title</div>
          <div className="text-left">Course/Lessons</div>
          <div className="text-center">Due Date</div>
          <div className="text-center">Status</div>
          <div className="text-center">Submit</div>
        </div>

        {/* Data Rows */}
        {assignments.map((assignment, index) => (
          <div
            key={index}
            className={`grid grid-cols-5 w-[989px] h-[48px] shadow-md py-2 px-4 bg-white rounded-md text-sm font-bold ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            {/* Column 1: Assignment Title */}
            <div className="text-left text-sm text-gray-800 truncate">
              {assignment.title}
            </div>
            {/* Column 2: Course */}
            <div className="text-left text-sm text-gray-600 truncate">
              {assignment.course}
            </div>
            {/* Column 3: Due Date */}
            <div className="text-center text-sm text-gray-600">
              {assignment.dueDate}
            </div>
            {/* Column 4: Status */}
            <div className="flex items-center justify-center">
              <Button
                className={`flex items-center justify-center px-2 py-1 rounded-md text-sm font-medium ${
                  assignment.status === "Done"
                    ? "bg-[#F0FEED] text-[#259800]"
                    : assignment.status === "Progress"
                    ? "bg-[#EDF5FE] text-[#3083FF]"
                    : "bg-[#FEEDED] text-[#DC2626]"
                }`}
              >
                <RxDot className="mr-1" />
                {assignment.status}
              </Button>
            </div>
            {/* Column 5: Submit Status */}
            <div
              className={`text-center text-sm font-bold ${
                assignment.submitStatus === "Submitted"
                  ? "text-[#B6B6B6]"
                  : "text-red-500"
              }`}
            >
              {assignment.submitStatus}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
