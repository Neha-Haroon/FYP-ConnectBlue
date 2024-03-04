import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Layout/Loader";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { AiOutlineArrowRight } from "react-icons/ai";

const AllOrders = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "Booking ID", minWidth: 150, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 1,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    // {
    //   field: "itemsQty",
    //   headerName: "Items Qty",
    //   type: "number",
    //   minWidth: 130,
    //   flex: 1,
    // },
    {
      field: "worker",
      headerName: "Worker",
      minWidth: 130,
      flex: 1,
    },
    
    {
      field: "service",
      headerName: "Service Type",
      minWidth: 130,
      flex: 1,
    },
    
    {
      field: "client",
      headerName: "Client",
      minWidth: 130,
      flex: 1,
    },

    {
      field: "area",
      headerName: "Area",
      minWidth: 170,
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 80,
      flex: 1,
    },
    {
      field: "paymentInfo",
      headerName: "Payment Info",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      type: "number",
      minWidth: 150,
      flex: 1,
    },
    
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 1,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "Rs.  " + item.totalPrice,
        status: item.status,
        client:item.user.name,
        
        service:item?.cart?.[0].category,
        area:item?.cart?.[0].shop.area,
        paymentInfo:item.paymentInfo.type,
        createdAt: item?.createdAt.slice(0, 10),
        worker: item?.cart?.[0].shop.name,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            className="header-bg"
          />
        </div>
      )}
    </>
  );
};

export default AllOrders;
