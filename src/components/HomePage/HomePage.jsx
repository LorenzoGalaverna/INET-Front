import "./HomePage.css";

import React from "react";
import { BarChart, CartesianAxis, CartesianGrid, XAxis, YAxis, Tooltip,Legend, Bar } from "recharts";

export default function HomePage() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  return (
    <body className="body-home">
      <div>
        <h1 className="titulo-home">Pagina Principal</h1>
      </div>
      <div className="contenedor-linea-home">
        <hr className="linea-home"></hr>
      <h3 className="subtitle">Acciones Rapidas</h3>
      </div>
      <div className="container-chart">
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="contenedor-linea-home">
        <hr className="linea-home"></hr>
      </div>
    </body>
  );
}