import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ventasSemana = [120, 115, 140, 180, 130, 170, 160];
const dias = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

const topProductos = [
  { nombre: 'Zapatillas', vendidos: 120, color: 'primary' },
  { nombre: 'Chaquetas', vendidos: 95, color: 'info' },
  { nombre: 'Gorras', vendidos: 76, color: 'success' },
];

const ultimosPedidos = [
  { id: 202, cliente: 'Juan Pérez', estado: 'Enviado', badge: 'success' },
  { id: 203, cliente: 'Laura Gómez', estado: 'Pendiente', badge: 'warning' },
  { id: 204, cliente: 'Carlos Ruiz', estado: 'Cancelado', badge: 'danger' },
];

const AdminPanel = () => {
  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar */}
      <div className="bg-dark text-white p-4" style={{ minWidth: 220 }}>
        <h4 className="mb-4">Admin Panel</h4>
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <a className="nav-link active bg-primary text-white rounded" href="#">
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="bi bi-box-seam me-2"></i> Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="bi bi-receipt me-2"></i> Pedidos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="bi bi-people me-2"></i> Clientes
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4 fw-bold">Panel de Administración</h2>
        {/* Resumen */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="card text-white bg-primary h-100">
              <div className="card-body">
                <div className="card-title">Total Ventas</div>
                <h3 className="card-text">3.245,89 €</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-success h-100">
              <div className="card-body">
                <div className="card-title">Productos</div>
                <h3 className="card-text">120</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-info h-100">
              <div className="card-body">
                <div className="card-title">Pedidos</div>
                <h3 className="card-text">85</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-dark h-100">
              <div className="card-body">
                <div className="card-title">Clientes</div>
                <h3 className="card-text">56</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Gráfica ventas semana */}
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Ventas esta semana</h5>
                <svg width="100%" height="120" viewBox="0 0 300 120">
                  {/* Ejes */}
                  <polyline fill="none" stroke="#0d6efd" strokeWidth="3" points="
                    0,100
                    50,{100 - ventasSemana[0] / 2}
                    100,{100 - ventasSemana[1] / 2}
                    150,{100 - ventasSemana[2] / 2}
                    200,{100 - ventasSemana[3] / 2}
                    250,{100 - ventasSemana[4] / 2}
                    300,{100 - ventasSemana[5] / 2}
                  " />
                  {/* Puntos */}
                  {ventasSemana.map((v, i) => (
                    <circle key={i} cx={i * 50} cy={100 - v / 2} r="4" fill="#0d6efd" />
                  ))}
                  {/* Días */}
                  {dias.map((d, i) => (
                    <text key={d} x={i * 50} y={115} fontSize="12" textAnchor="middle">{d}</text>
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Top productos */}
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Top Productos</h5>
                <ul className="list-group list-group-flush">
                  {topProductos.map((prod) => (
                    <li key={prod.nombre} className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <input type="checkbox" checked readOnly className="form-check-input me-2" />
                        {prod.nombre}
                      </span>
                      <span className={`badge bg-${prod.color} rounded-pill`}>{prod.vendidos} vendidos</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-1">
          {/* Top productos (mini) */}
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title mb-3">Top Productos</h6>
                <ul className="list-group list-group-flush">
                  {topProductos.map((prod) => (
                    <li key={prod.nombre} className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <input type="checkbox" checked readOnly className="form-check-input me-2" />
                        {prod.nombre}
                      </span>
                      <span className={`text-muted`}>{prod.vendidos} vendidos</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Últimos pedidos */}
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title mb-3">Últimos pedidos</h6>
                <ul className="list-group list-group-flush">
                  {ultimosPedidos.map((pedido) => (
                    <li key={pedido.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <span>#{pedido.id} <span className="ms-2">{pedido.cliente}</span></span>
                      <span className={`badge bg-${pedido.badge}`}>{pedido.estado}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 