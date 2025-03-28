import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Profile() {
  return (
    <div>
      <div
        className="position-absolute w-100 min-height-300 top-0"
        style={{
          backgroundImage:
            'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg")',
          backgroundPositionY: "50%",
        }}
      >
        <span className="mask bg-primary opacity-6" />
      </div>
      <Menu />
      <div className="main-content position-relative max-height-vh-100 h-100">
        {/* Navbar */}
        <nav className="navbar navbar-main navbar-expand-lg bg-transparent shadow-none position-absolute px-4 w-100 z-index-2 mt-n11">
          <div className="container-fluid py-1">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 ps-2 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="text-white opacity-5" href="javascript:;">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-sm text-white active"
                  aria-current="page"
                >
                  Profile
                </li>
              </ol>
              <h6 className="text-white font-weight-bolder ms-2">Profile</h6>
            </nav>
            <div
              className="collapse navbar-collapse me-md-0 me-sm-4 mt-sm-0 mt-2"
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
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-white font-weight-bold px-0"
                  >
                    <i className="fa fa-user me-sm-1" />
                    <span className="d-sm-inline d-none">Sign In</span>
                  </a>
                </li>
                <li className="nav-item d-xl-none ps-3 pe-0 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-white p-0"
                  ></a>
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
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
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
                    className="dropdown-menu dropdown-menu-end px-2 py-3 ms-n4"
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
                              className="avatar avatar-sm me-3"
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
                              className="avatar avatar-sm bg-gradient-dark me-3"
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
                          <div className="avatar avatar-sm bg-gradient-secondary me-3 my-auto">
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
        <div className="card shadow-lg mx-4 card-profile-bottom">
          <div className="card-body p-3">
            <div className="row gx-4">
              <div className="col-auto">
                <div className="avatar avatar-xl position-relative">
                  <img
                    src="../assets/img/team-1.jpg"
                    alt="profile_image"
                    className="w-100 border-radius-lg shadow-sm"
                  />
                </div>
              </div>
              <div className="col-auto my-auto">
                <div className="h-100">
                  <h5 className="mb-1">Sayo Kravits</h5>
                  <p className="mb-0 font-weight-bold text-sm">
                    Public Relations
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                <div className="nav-wrapper position-relative end-0">
                  <ul className="nav nav-pills nav-fill p-1" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1 active d-flex align-items-center justify-content-center "
                        data-bs-toggle="tab"
                        href="javascript:;"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="ni ni-app" />
                        <span className="ms-2">App</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center "
                        data-bs-toggle="tab"
                        href="javascript:;"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="ni ni-email-83" />
                        <span className="ms-2">Messages</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center "
                        data-bs-toggle="tab"
                        href="javascript:;"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="ni ni-settings-gear-65" />
                        <span className="ms-2">Settings</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header pb-0">
                  <div className="d-flex align-items-center">
                    <p className="mb-0">Edit Profile</p>
                    <button className="btn btn-primary btn-sm ms-auto">
                      Settings
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <p className="text-uppercase text-sm">User Information</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Username
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="lucky.jesse"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Email address
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          defaultValue="jesse@example.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          First name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Jesse"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Last name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Lucky"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="horizontal dark" />
                  <p className="text-uppercase text-sm">Contact Information</p>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Address
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          City
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="New York"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Country
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="United States"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Postal code
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={437300}
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="horizontal dark" />
                  <p className="text-uppercase text-sm">About me</p>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          About me
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-profile">
                <img
                  src="../assets/img/bg-profile.jpg"
                  alt="Image placeholder"
                  className="card-img-top"
                />
                <div className="row justify-content-center">
                  <div className="col-4 col-lg-4 order-lg-2">
                    <div className="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                      <a href="javascript:;">
                        <img
                          src="../assets/img/team-2.jpg"
                          className="rounded-circle img-fluid border border-2 border-white"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
                  <div className="d-flex justify-content-between">
                    <a
                      href="javascript:;"
                      className="btn btn-sm btn-info mb-0 d-none d-lg-block"
                    >
                      Connect
                    </a>
                    <a
                      href="javascript:;"
                      className="btn btn-sm btn-info mb-0 d-block d-lg-none"
                    >
                      <i className="ni ni-collection" />
                    </a>
                    <a
                      href="javascript:;"
                      className="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block"
                    >
                      Message
                    </a>
                    <a
                      href="javascript:;"
                      className="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none"
                    >
                      <i className="ni ni-email-83" />
                    </a>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex justify-content-center">
                        <div className="d-grid text-center">
                          <span className="text-lg font-weight-bolder">22</span>
                          <span className="text-sm opacity-8">Friends</span>
                        </div>
                        <div className="d-grid text-center mx-4">
                          <span className="text-lg font-weight-bolder">10</span>
                          <span className="text-sm opacity-8">Photos</span>
                        </div>
                        <div className="d-grid text-center">
                          <span className="text-lg font-weight-bolder">89</span>
                          <span className="text-sm opacity-8">Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h5>
                      Mark Davis<span className="font-weight-light">, 35</span>
                    </h5>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div className="fixed-plugin">
        <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i className="fa fa-cog py-2"> </i>
        </a>
        <div className="card shadow-lg">
          <div className="card-header pb-0 pt-3 ">
            <div className="float-start">
              <h5 className="mt-3 mb-0">Argon Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div className="float-end mt-4">
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
              <div className="badge-colors my-2 text-start">
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
                className="btn bg-gradient-primary w-100 px-3 mb-2 active me-2"
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
            <hr className="horizontal dark my-sm-4" />
            <div className="mt-2 mb-5 d-flex">
              <h6 className="mb-0">Light / Dark</h6>
              <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  className="form-check-input mt-1 ms-auto"
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
export default Profile;
