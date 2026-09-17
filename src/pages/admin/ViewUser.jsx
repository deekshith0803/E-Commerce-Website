import React from "react";

const ViewUser = () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Users</h2>

          <p className="text-gray-500 mt-1">
            Manage all registered users from here.
          </p>
        </div>

        {/* User Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">All Users</h3>

            <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
              {users.length} Users
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    #
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Name
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Role
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.email}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {index + 1}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-semibold">
                            {user.name?.charAt(0).toUpperCase()}
                          </span>
                        </div>

                        <span className="font-semibold text-gray-800">
                          {user.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">
                      {user.email}
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600">
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {users.length === 0 && (
            <div className="py-10 text-center text-gray-500">
              No users found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
