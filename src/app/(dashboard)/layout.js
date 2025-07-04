import { jost, poppins } from "@/utils/fonts";
import "@/app/globals.css";
import { Providers } from "@/reduxToolkit/provider";
import AdminLayout from "../../components/layout/AdminLayout"
import ToastMessage from "@/components/common/ToastMessage";
export const metadata = {
  title: "Dashboard Page",
  description: "This is Marketing Page",
};


const DashboardLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${poppins.variable} antialiased`}
      >
        <Providers>
          <AdminLayout>
            {children}
          </AdminLayout>
          <ToastMessage />
        </Providers>

      </body>
    </html >
  )
}

export default DashboardLayout;