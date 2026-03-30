import React from "react";

export const MapDemo4 = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 499,
      stock: 120,
      color: "Black",
      status: "active",
      discount: 10,
    },
    {
      id: 2,
      name: "Bluetooth Headphones",
      price: 1499,
      stock: 80,
      color: "Blue",
      status: "active",
      discount: 15,
    },
    {
      id: 3,
      name: "Gaming Keyboard",
      price: 1999,
      stock: 50,
      color: "RGB",
      status: "active",
      discount: 20,
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 2999,
      stock: 30,
      color: "Silver",
      status: "inactive",
      discount: 5,
    },
    {
      id: 5,
      name: "USB-C Charger",
      price: 799,
      stock: 200,
      color: "White",
      status: "active",
      discount: 8,
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 999,
      stock: 60,
      color: "Gray",
      status: "active",
      discount: 12,
    },
    {
      id: 7,
      name: "External Hard Drive",
      price: 4599,
      stock: 25,
      color: "Black",
      status: "active",
      discount: 18,
    },
    {
      id: 8,
      name: "Mobile Tripod",
      price: 699,
      stock: 90,
      color: "Black",
      status: "active",
      discount: 10,
    },
    {
      id: 9,
      name: "LED Monitor",
      price: 8999,
      stock: 15,
      color: "Black",
      status: "inactive",
      discount: 25,
    },
    {
      id: 10,
      name: "Power Bank",
      price: 1199,
      stock: 110,
      color: "Red",
      status: "active",
      discount: 14,
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 4</h1>
      <table  class="table table-dark">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>STOCK</th>
                <th>DISOUNT</th>
                <th>COLOR</th>
                <th>STATUS</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((prod)=>{
                    return <tr>
                        <td>{prod.id}</td>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <td>{prod.stock}</td>
                        <td>{prod.discount}</td>
                        <td>{prod.color}</td>
                        <td>{prod.status}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};
