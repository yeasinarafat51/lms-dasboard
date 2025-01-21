const List = () => {
    const assignments = [
      {
        title: "Conducting User Research...",
        course: "User Research and Personas...",
        dueDate: "July 1, 2024",
        status: "In Progress",
        submitStatus: "Submitted",
      },
      {
        title: "Wireframing Basics...",
        course: "Design Foundations",
        dueDate: "July 5, 2024",
        status: "Completed",
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
        <div className="border border-gray-300 rounded-md shadow-md">
          {/* Header Row */}
          <div className="grid grid-cols-5 bg-gray-200 py-2 px-4 rounded-t-md text-sm font-bold text-gray-700">
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
              className={`grid grid-cols-5 py-2 px-4 ${
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
              <div className="text-center text-sm font-medium">
                {assignment.status}
              </div>
              {/* Column 5: Submit Status */}
              <div
                className={`text-center text-sm font-bold ${
                  assignment.submitStatus === "Submitted"
                    ? "text-green-600"
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
  