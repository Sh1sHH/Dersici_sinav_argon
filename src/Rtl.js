import React from "react";
import Menu from "./Menu";

function Rtl() {
  return (
    <div>
      <div className="min-height-300 bg-dark position-absolute w-100" />
      <aside
        className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-end me-4 rotate-caret"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute start-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          />
          <a
            className="navbar-brand m-0"
            href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html "
            target="_blank"
          >
            <img
              src="../assets/img/logo-ct-dark.png"
              width="26px"
              height="26px"
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="me-1 font-weight-bold">Creative Tim</span>
          </a>
        </div>
        <hr className="horizontal dark mt-0" />
        <div
          className="collapse navbar-collapse px-0 w-auto "
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " href="../pages/dashboard.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                </div>
                <span className="nav-link-text me-1">لوحة القيادة</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/tables.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text me-1">الجداول</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/billing.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card text-success text-sm opacity-10" />
                </div>
                <span className="nav-link-text me-1">الفواتير</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/virtual-reality.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-app text-info text-sm opacity-10" />
                </div>
                <span className="nav-link-text me-1">الواقع الافتراضي</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="../pages/rtl.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-world-2 text-danger text-sm opacity-10" />
                </div>
                <span className="nav-link-text me-1">RTL</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 me-4 pe-2 text-uppercase text-xs font-weight-bolder opacity-6">
                صفحات المرافق
              </h6>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/profile.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-02 text-dark text-sm opacity-10" />
                </div>
                <span className="nav-link-text me-1">حساب تعريفي</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/sign-in.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-copy-04 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text me-1">تسجيل الدخول</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/sign-up.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-collection text-info text-sm opacity-10" />
                </div>
                <span className="nav-link-text me-1">اشتراك</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer mx-3 ">
          <div className="card card-plain shadow-none" id="sidenavCard">
            <img
              className="w-50 mx-auto"
              src="../assets/img/illustrations/icon-documentation.svg"
              alt="sidebar_illustration"
            />
            <div className="card-body text-center p-3 w-100 pt-0">
              <div className="docs-info">
                <h6 className="mb-0 text-center">تحتاج مساعدة?</h6>
                <p className="text-xs font-weight-bold text-center mb-0">
                  يرجى التحقق من مستنداتنا
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard"
            target="_blank"
            className="btn btn-dark btn-sm w-100 mb-3"
          >
            توثيق
          </a>
          <a
            className="btn btn-primary btn-sm mb-0 w-100"
            href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=sidebarfree"
            type="button"
          >
            التطور للاحترافية
          </a>
        </div>
      </aside>
      <main className="main-content position-relative border-radius-lg overflow-hidden">
        {/* Navbar */}
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
          id="navbarBlur"
          data-scroll="false"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 ">
                <li className="breadcrumb-item text-sm ps-2">
                  <a className="opacity-5 text-white" href="javascript:;">
                    لوحات القيادة
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-sm text-white active"
                  aria-current="page"
                >
                  RTL
                </li>
              </ol>
              <h6 className="font-weight-bolder text-white mb-0">RTL</h6>
            </nav>
            <div
              className="collapse navbar-collapse mt-sm-0 mt-2 px-0"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group">
                  <span className="input-group-text text-body">
                    <i className="fas fa-search" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="أكتب هنا..."
                  />
                </div>
              </div>
              <ul className="navbar-nav me-auto ms-0 justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-white font-weight-bold px-0"
                  >
                    <i className="fa fa-user me-sm-1" />
                    <span className="d-sm-inline d-none">يسجل دخول</span>
                  </a>
                </li>
                <li className="nav-item d-xl-none pe-3 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-white p-0"
                    id="iconNavbarSidenav"
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line bg-white" />
                      <i className="sidenav-toggler-line bg-white" />
                      <i className="sidenav-toggler-line bg-white" />
                    </div>
                  </a>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-white p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
                <li className="nav-item dropdown ps-2 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-white p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell cursor-pointer" />
                  </a>
                  <ul
                    className="dropdown-menu  px-2 py-3 me-sm-n4"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="mb-2">
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/team-2.jpg"
                              className="avatar avatar-sm  ms-3 "
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">
                                New message
                              </span>{" "}
                              from Laur
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/small-logos/logo-spotify.svg"
                              className="avatar avatar-sm bg-gradient-dark  ms-3 "
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">
                                New album
                              </span>{" "}
                              by Travis Scott
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="avatar avatar-sm bg-gradient-secondary  ms-3  my-auto">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      />
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */}
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                          أموال اليوم
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                          $53,000
                          <span className="text-success text-sm font-weight-bolder">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-start">
                      <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          className="ni ni-money-coins text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                          مستخدمو اليوم
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                          2,300
                          <span className="text-success text-sm font-weight-bolder">
                            +33%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-start">
                      <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          className="ni ni-world text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                          عملاء جدد
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                          +3,462
                          <span className="text-danger text-sm font-weight-bolder">
                            -2%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-start">
                      <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          className="ni ni-paper-diploma text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-capitalize font-weight-bold">
                          مبيعات
                        </p>
                        <h5 className="font-weight-bolder mb-0">
                          $103,430
                          <span className="text-success text-sm font-weight-bolder">
                            +5%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 text-start">
                      <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          className="ni ni-cart text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-7 mb-lg-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-lg-6 mb-lg-0 mb-4">
                      <div className="d-flex flex-column h-100">
                        <p className="mb-1 pt-2 text-bold">بناها المطورون</p>
                        <h5 className="font-weight-bolder">
                          Soft UI Dashboard
                        </h5>
                        <p className="mb-5">
                          من الألوان والبطاقات والطباعة إلى العناصر المعقدة ،
                          ستجد الوثائق الكاملة.
                        </p>
                        <a
                          className="text-dark font-weight-bold ps-1 mb-0 icon-move-left mt-auto"
                          href="javascript:;"
                        >
                          اقرأ المستندات
                          <i
                            className="fas fa-arrow-left text-sm ms-1"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 me-auto ms-0 text-center">
                      <div className="bg-gradient-primary border-radius-lg min-height-200">
                        <img
                          src="../assets/img/shapes/waves-white.svg"
                          className="position-absolute h-100 top-0 d-md-block d-none"
                          alt="waves"
                        />
                        <div className="position-relative pt-5 pb-4">
                          <img
                            className="max-width-500 w-100 position-relative z-index-2"
                            src="../assets/img/illustrations/rocket-white.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card h-100 p-3">
                <div
                  className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
                  style={{
                    backgroundImage: 'url("../assets/img/ivancik.jpg")',
                  }}
                >
                  <span className="mask bg-gradient-dark" />
                  <div className="card-body position-relative z-index-1 p-3 h-100">
                    <div className="d-flex flex-column h-100">
                      <h5 className="text-white font-weight-bolder mb-4 pt-2">
                        العمل مع الصواريخ
                      </h5>
                      <p className="text-white mb-5">
                        تكوين الثروة هو لعبة تطوري حديثة ذات حصيلة إيجابية.
                        الأمر كله يتعلق بمن يغتنم الفرصة أولاً هذه بطاقة بسيطة.
                      </p>
                      <a
                        className="text-white font-weight-bold ps-1 mb-0 icon-move-left mt-auto"
                        href="javascript:;"
                      >
                        اقرأ المستندات
                        <i
                          className="fas fa-arrow-left text-sm ms-1"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-5 mb-lg-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3">
                    <div className="chart">
                      <canvas
                        id="chart-bars"
                        className="chart-canvas"
                        height="170px"
                      />
                    </div>
                  </div>
                  <h6 className="ms-2 mt-4 mb-0"> المستخدمين النشطين </h6>
                  <p className="text-sm ms-2">
                    {" "}
                    (<span className="font-weight-bolder">+23%</span>) من
                    الأسبوع الماضي{" "}
                  </p>
                  <div className="container border-radius-lg">
                    <div className="row">
                      <div className="col-3 py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center ms-2 d-flex align-items-center justify-content-center">
                            <svg
                              width="10px"
                              height="10px"
                              viewBox="0 0 40 44"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>document</title>
                              <g
                                id="Basic-Elements"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="Rounded-Icons"
                                  transform="translate(-1870.000000, -591.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g
                                    id="Icons-with-opacity"
                                    transform="translate(1716.000000, 291.000000)"
                                  >
                                    <g
                                      id="document"
                                      transform="translate(154.000000, 300.000000)"
                                    >
                                      <path
                                        className="color-background"
                                        d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                        id="Path"
                                        opacity="0.603585379"
                                      />
                                      <path
                                        className="color-background"
                                        d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                        id="Shape"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="text-xs mt-1 mb-0 font-weight-bold">
                            المستخدمون
                          </p>
                        </div>
                        <h4 className="font-weight-bolder">36K</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-60"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col-3 py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center ms-2 d-flex align-items-center justify-content-center">
                            <svg
                              width="10px"
                              height="10px"
                              viewBox="0 0 40 40"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>spaceship</title>
                              <g
                                id="Basic-Elements"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="Rounded-Icons"
                                  transform="translate(-1720.000000, -592.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g
                                    id="Icons-with-opacity"
                                    transform="translate(1716.000000, 291.000000)"
                                  >
                                    <g
                                      id="spaceship"
                                      transform="translate(4.000000, 301.000000)"
                                    >
                                      <path
                                        className="color-background"
                                        d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                                        id="Shape"
                                      />
                                      <path
                                        className="color-background"
                                        d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                                        id="Path"
                                      />
                                      <path
                                        className="color-background"
                                        d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                                        id="color-2"
                                        opacity="0.598539807"
                                      />
                                      <path
                                        className="color-background"
                                        d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                                        id="color-3"
                                        opacity="0.598539807"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="text-xs mt-1 mb-0 font-weight-bold">
                            نقرات
                          </p>
                        </div>
                        <h4 className="font-weight-bolder">2m</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-90"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col-3 py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center ms-2 d-flex align-items-center justify-content-center">
                            <svg
                              width="10px"
                              height="10px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>credit-card</title>
                              <g
                                id="Basic-Elements"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="Rounded-Icons"
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g
                                    id="Icons-with-opacity"
                                    transform="translate(1716.000000, 291.000000)"
                                  >
                                    <g
                                      id="credit-card"
                                      transform="translate(453.000000, 454.000000)"
                                    >
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        id="Path"
                                        opacity="0.593633743"
                                      />
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                        id="Shape"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="text-xs mt-1 mb-0 font-weight-bold">
                            مبيعات
                          </p>
                        </div>
                        <h4 className="font-weight-bolder">435$</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-30"
                            role="progressbar"
                            aria-valuenow={30}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col-3 py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center ms-2 d-flex align-items-center justify-content-center">
                            <svg
                              width="10px"
                              height="10px"
                              viewBox="0 0 40 40"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>settings</title>
                              <g
                                id="Basic-Elements"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="Rounded-Icons"
                                  transform="translate(-2020.000000, -442.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g
                                    id="Icons-with-opacity"
                                    transform="translate(1716.000000, 291.000000)"
                                  >
                                    <g
                                      id="settings"
                                      transform="translate(304.000000, 151.000000)"
                                    >
                                      <polygon
                                        className="color-background"
                                        id="Path"
                                        opacity="0.596981957"
                                        points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                      />
                                      <path
                                        className="color-background"
                                        d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                        id="Path"
                                        opacity="0.596981957"
                                      />
                                      <path
                                        className="color-background"
                                        d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                        id="Path"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="text-xs mt-1 mb-0 font-weight-bold">
                            العناصر
                          </p>
                        </div>
                        <h4 className="font-weight-bolder">43</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-50"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card">
                <div className="card-header pb-0">
                  <h6>نظرة عامة على المبيعات</h6>
                  <p className="text-sm">
                    <i className="fa fa-arrow-up text-success" />
                    <span className="font-weight-bold">4% أكثر</span> في عام
                    2021
                  </p>
                </div>
                <div className="card-body p-3">
                  <div className="chart">
                    <canvas
                      id="chart-line"
                      className="chart-canvas"
                      height="300px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
              <div className="card">
                <div className="card-header pb-0">
                  <div className="row mb-3">
                    <div className="col-6">
                      <h6>المشاريع</h6>
                      <p className="text-sm">
                        <i
                          className="fa fa-check text-info"
                          aria-hidden="true"
                        />
                        <span className="font-weight-bold ms-1">30 انتهى</span>{" "}
                        هذا الشهر
                      </p>
                    </div>
                    <div className="col-6 my-auto text-start">
                      <div className="dropdown float-start ps-4">
                        <a
                          className="cursor-pointer"
                          id="dropdownTable"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v text-secondary" />
                        </a>
                        <ul
                          className="dropdown-menu px-2 py-3 me-n4"
                          aria-labelledby="dropdownTable"
                        >
                          <li>
                            <a
                              className="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              عمل
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              عمل آخر
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item border-radius-md"
                              href="javascript:;"
                            >
                              شيء آخر هنا
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0 pb-2">
                  <div className="table-responsive">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            المشروع
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            أعضاء
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            ميزانية
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            إكمال
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-xd.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  Soft UI XD الإصدار
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-1.jpg"
                                />
                              </a>
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-2.jpg"
                                />
                              </a>
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Alexander Smith"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-3.jpg"
                                />
                              </a>
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              $14,000{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    60%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-60"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-atlassian.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  أضف مسار التقدم إلى التطبيق الداخلي
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-2.jpg"
                                />
                              </a>
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              $3,000{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    10%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-10"
                                  role="progressbar"
                                  aria-valuenow={10}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-slack.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  إصلاح أخطاء النظام الأساسي
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-3.jpg"
                                />
                              </a>
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-1.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              غير مضبوط{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-success w-100"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-spotify.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  إطلاق تطبيق الهاتف المحمول الخاص بنا
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-3.jpg"
                                />
                              </a>
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Alexander Smith"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-1.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              $20,500{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    100%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-success w-100"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-jira.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  أضف صفحة التسعير الجديدة
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              $500{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    25%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-25"
                                  role="progressbar"
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={25}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src="../assets/img/small-logos/logo-invision.svg"
                                  className="avatar avatar-sm ms-3"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  إعادة تصميم متجر جديد على الإنترنت
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="avatar-group mt-2">
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-1.jpg"
                                />
                              </a>
                              <a
                                href="javascript:;"
                                className="avatar avatar-xs rounded-circle"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/team-4.jpg"
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="text-xs font-weight-bold">
                              {" "}
                              $2,000{" "}
                            </span>
                          </td>
                          <td className="align-middle">
                            <div className="progress-wrapper w-75 mx-auto">
                              <div className="progress-info">
                                <div className="progress-percentage">
                                  <span className="text-xs font-weight-bold">
                                    40%
                                  </span>
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-gradient-info w-40"
                                  role="progressbar"
                                  aria-valuenow={40}
                                  aria-valuemin={0}
                                  aria-valuemax={40}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-header pb-0">
                  <h6>نظرة عامة على الطلبات</h6>
                  <p className="text-sm">
                    <i
                      className="fa fa-arrow-up text-success"
                      aria-hidden="true"
                    />
                    <span className="font-weight-bold">24%</span> هذا الشهر
                  </p>
                </div>
                <div className="card-body p-3">
                  <div className="timeline timeline-one-side">
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="ni ni-bell-55 text-success text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          $2400, تغييرات في التصميم
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          22 DEC 7:20 PM
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="ni ni-html5 text-danger text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          طلب جديد #1832412
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          21 DEC 11 PM
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="ni ni-cart text-info text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          مدفوعات الخادم لشهر أبريل
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          21 DEC 9:34 PM
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="ni ni-credit-card text-warning text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          تمت إضافة بطاقة جديدة للطلب #4395133
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          20 DEC 2:20 AM
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block mb-3">
                      <span className="timeline-step">
                        <i className="ni ni-key-25 text-primary text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          فتح الحزم من أجل التطوير
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          18 DEC 4:54 AM
                        </p>
                      </div>
                    </div>
                    <div className="timeline-block">
                      <span className="timeline-step">
                        <i className="ni ni-money-coins text-dark text-gradient" />
                      </span>
                      <div className="timeline-content">
                        <h6 className="text-dark text-sm font-weight-bold mb-0">
                          طلب جديد #9583120
                        </h6>
                        <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                          17 DEC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer pt-3  ">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-end">
                    © , made with <i className="fa fa-heart" /> by
                    <a
                      href="https://www.creative-tim.com"
                      className="font-weight-bold"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        className="nav-link pe-0 text-muted"
                        target="_blank"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <div className="fixed-plugin">
        <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i className="fa fa-cog py-2"> </i>
        </a>
        <div className="card shadow-lg">
          <div className="card-header pb-0 pt-3 ">
            <div className="float-end">
              <h5 className="mt-3 mb-0">Argon Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div className="float-start mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i className="fa fa-close" />
              </button>
            </div>
            {/* End Toggle Button */}
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0 overflow-auto">
            {/* Sidebar Backgrounds */}
            <div>
              <h6 className="mb-0">Sidebar Colors</h6>
            </div>
            <a
              href="javascript:void(0)"
              className="switch-trigger background-color"
            >
              <div className="badge-colors my-2 text-end">
                <span
                  className="badge filter bg-gradient-primary active"
                  data-color="primary"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-dark"
                  data-color="dark"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-info"
                  data-color="info"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-success"
                  data-color="success"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-warning"
                  data-color="warning"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-danger"
                  data-color="danger"
                  onclick="sidebarColor(this)"
                />
              </div>
            </a>
            {/* Sidenav Type */}
            <div className="mt-3">
              <h6 className="mb-0">Sidenav Type</h6>
              <p className="text-sm">
                Choose between 2 different sidenav types.
              </p>
            </div>
            <div className="d-flex">
              <button
                className="btn bg-gradient-primary w-100 px-3 mb-2 active ms-2"
                data-class="bg-white"
                onclick="sidebarType(this)"
              >
                White
              </button>
              <button
                className="btn bg-gradient-primary w-100 px-3 mb-2"
                data-class="bg-default"
                onclick="sidebarType(this)"
              >
                Dark
              </button>
            </div>
            <p className="text-sm d-xl-none d-block mt-2">
              You can change the sidenav type just on desktop view.
            </p>
            {/* Navbar Fixed */}
            <div className="d-flex my-3">
              <h6 className="mb-0">Navbar Fixed</h6>
              <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  className="form-check-input mt-1 float-end me-auto"
                  type="checkbox"
                  id="navbarFixed"
                  onclick="navbarFixed(this)"
                />
              </div>
            </div>
            <hr className="horizontal dark my-sm-4" />
            <div className="mt-2 mb-5 d-flex">
              <h6 className="mb-0">Light / Dark</h6>
              <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  className="form-check-input mt-1 float-end me-auto"
                  type="checkbox"
                  id="dark-version"
                  onclick="darkMode(this)"
                />
              </div>
            </div>
            <a
              className="btn bg-gradient-dark w-100"
              href="https://www.creative-tim.com/product/argon-dashboard"
            >
              Free Download
            </a>
            <a
              className="btn btn-outline-dark w-100"
              href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard"
            >
              View documentation
            </a>
            <div className="w-100 text-center">
              <a
                className="github-button"
                href="https://github.com/creativetimofficial/argon-dashboard"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star creativetimofficial/argon-dashboard on GitHub"
              >
                Star
              </a>
              <h6 className="mt-3">Thank you for sharing!</h6>
              <a
                href="https://twitter.com/intent/tweet?text=Check%20Argon%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fargon-dashboard"
                className="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i className="fab fa-twitter me-1" aria-hidden="true" /> Tweet
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard"
                className="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i className="fab fa-facebook-square me-1" aria-hidden="true" />{" "}
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*   Core JS Files   */}
      {/* Github buttons */}
      {/* Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc */}
    </div>
  );
}
export default Rtl;
