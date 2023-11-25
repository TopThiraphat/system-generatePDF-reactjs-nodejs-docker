import React from "react";

function Sidebar() {
  // console.log(process.env.PUBLIC_URL);
  return (
    <>
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src={`${process.env.PUBLIC_URL}/avatar5.png`}
                className="img-circle"
                alt="User Image"
              />
            </div>
            <div className="pull-left info">
              <p>Admin</p>
              <a href="#">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>

          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">เมนู</li>
            <li className="active treeview">
              <a href="#">
                <i class="fa fa-book"></i>{" "}
                <span>
                  สำหรับสร้างไฟล์ <b> PDF</b>
                </span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active">
                  <a href="/home/generatePDF/menu-rental5airpost">
                    <i className="fa fa-circle-o" /> DTRS : Rental 5 Airport
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    </>
  );
}
export default Sidebar;
