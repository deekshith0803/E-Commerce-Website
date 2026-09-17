import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";
import AdminSidbar from "../../components/AdminSidbar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidbar />

      <div className="flex-1">
        <AdminNavbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
