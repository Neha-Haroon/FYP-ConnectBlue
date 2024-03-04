import React, { useEffect } from "react";
import AdminHeader from "../../components/Layout/AdminHeader";
import AdminSideBar from "../../components/Admin/Layout/AdminSideBar";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../../redux/actions/order";
// import { getAllSellers } from "../../redux/actions/sellers";

const AdminDashboardOrders = () => {
  const dispatch = useDispatch();

  const { adminOrders, adminOrderLoading } = useSelector(
    (state) => state.order
  );
  // const { sellers, isLoading } = useSelector(
  //   (state) => state.sellers
  // );
    
  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
    // dispatch(getAllSellers());
  }, []);

  const columns = [
    { field: "id", headerName: "Booking ID", minWidth: 150, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "worker",
      headerName: "Worker",
      minWidth: 130,
      flex: 0.7,
    },
    
    {
      field: "service",
      headerName: "Service Type",
      minWidth: 130,
      flex: 0.7,
    },
    
    {
      field: "user",
      headerName: "User",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "area",
      headerName: "Area",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 80,
      flex: 0.6,
    },
    {
      field: "paymentInfo",
      headerName: "Payment Info",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
  ];

  const row = [];
  let currSeller;
  adminOrders &&
    adminOrders.forEach((item) => {
// currSeller = sellers.filter(i =>{i.includes(item?.cart?.[0].shopId)})
      row.push({
        id: item._id,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        user:item?.user?.name,
        service:item?.cart?.[0].category,
        area:item?.cart?.[0].shop.area,
        total: "Rs." + item?.totalPrice,
        status: item?.status,
        paymentInfo:item.paymentInfo.type,
        createdAt: item?.createdAt.slice(0, 10),
        worker: item?.cart?.[0].shop.name,
      });
    });
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSideBar active={2} />
          </div>

          <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center">
            <div className="w-[97%] flex justify-center">
              <DataGrid
                rows={row}
                columns={columns}
                pageSize={4}
                disableSelectionOnClick
                autoHeight
                className="header-bg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOrders;
