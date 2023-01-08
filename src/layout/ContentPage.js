import React from "react";

const ContentPage = () => {
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-block card-stretch card-transparent ">
                <div className="card-header d-flex justify-content-between pb-0">
                  <div className="header-title">
                    <h4 className="card-title">Documents</h4>
                  </div>
                  <div className="card-header-toolbar d-flex align-items-center">
                    <div className="card-header-toolbar">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle dropdown-bg btn bg-white"
                          id="dropdownMenuButton001"
                          data-toggle="dropdown"
                        >
                          Name<i className="ri-arrow-down-s-line ml-1"></i>
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow-none"
                          aria-labelledby="dropdownMenuButton001"
                        >
                          <a className="dropdown-item" href="#">
                            Last modified
                          </a>
                          <a className="dropdown-item" href="#">
                            Last modifiedby me
                          </a>
                          <a className="dropdown-item" href="#">
                            Last opened by me
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-block card-stretch card-height">
                <div className="card-body image-thumb">
                  <a
                    href="#"
                    data-title="Terms.pdf"
                    data-load-file="file"
                    data-load-target="#resolte-contaniner"
                    data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <div className="mb-4 text-center p-3 rounded iq-thumb">
                      <div className="iq-image-overlay"></div>
                      <img
                        src="../assets/images/layouts/page-1/pdf.png"
                        className="img-fluid"
                        alt="image1"
                      />
                    </div>
                    <h6>Terms.pdf</h6>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-block card-stretch card-height">
                <div className="card-body image-thumb">
                  <a
                    href="#"
                    data-title="New-one.docx"
                    data-load-file="file"
                    data-load-target="#resolte-contaniner"
                    data-url="../assets/vendor/doc-viewer/files/demo.docx"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <div className="mb-4 text-center p-3 rounded iq-thumb">
                      <div className="iq-image-overlay"></div>
                      <img
                        src="../assets/images/layouts/page-1/doc.png"
                        className="img-fluid"
                        alt="image1"
                      />
                    </div>
                    <h6>New-one.docx</h6>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-block card-stretch card-height">
                <div className="card-body image-thumb">
                  <a
                    href="#"
                    data-title="Woo-box.xlsx"
                    data-load-file="file"
                    data-load-target="#resolte-contaniner"
                    data-url="../assets/vendor/doc-viewer/files/demo.xlsx"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <div className="mb-4 text-center p-3 rounded iq-thumb">
                      <div className="iq-image-overlay"></div>
                      <img
                        src="../assets/images/layouts/page-1/xlsx.png"
                        className="img-fluid"
                        alt="image1"
                      />
                    </div>
                    <h6>Woo-box.xlsx</h6>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-block card-stretch card-height">
                <div className="card-body image-thumb doc-text">
                  <a
                    href="#"
                    data-title="IOS-content.pptx"
                    data-load-file="file"
                    data-load-target="#resolte-contaniner"
                    data-url="../assets/vendor/doc-viewer/files/demo.pptx"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <div className="mb-4 text-center p-3 rounded iq-thumb">
                      <div className="iq-image-overlay"></div>
                      <img
                        src="../assets/images/layouts/page-1/ppt.png"
                        className="img-fluid"
                        alt="image1"
                      />
                    </div>
                    <h6>IOS-content.pptx</h6>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card card-block card-stretch card-transparent">
                <div className="card-header d-flex justify-content-between pb-0">
                  <div className="header-title">
                    <h4 className="card-title">Folders</h4>
                  </div>
                  <div className="card-header-toolbar">
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle dropdown-bg btn bg-white"
                        id="dropdownMenuButton1"
                        data-toggle="dropdown"
                      >
                        Name<i className="ri-arrow-down-s-line ml-1"></i>
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right shadow-none"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <a className="dropdown-item" href="#">
                          Last modified
                        </a>
                        <a className="dropdown-item" href="#">
                          Last modifiedby me
                        </a>
                        <a className="dropdown-item" href="#">
                          Last opened by me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <div className="card card-block card-stretch card-height">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <a href="./page-alexa.html" className="folder">
                      <div className="icon-small bg-danger rounded mb-4">
                        <i className="ri-file-copy-line"></i>
                      </div>
                    </a>
                    <div className="card-header-toolbar">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle"
                          id="dropdownMenuButton2"
                          data-toggle="dropdown"
                        >
                          <i className="ri-more-2-fill"></i>
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton2"
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2"></i>View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2"></i>Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-pencil-fill mr-2"></i>Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-printer-fill mr-2"></i>Print
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2"></i>
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="./page-alexa.html" className="folder">
                    <h5 className="mb-2">Alexa Workshop</h5>
                    <p className="mb-2">
                      <i className="lar la-clock text-danger mr-2 font-size-20"></i>{" "}
                      10 Dec, 2020
                    </p>
                    <p className="mb-0">
                      <i className="las la-file-alt text-danger mr-2 font-size-20"></i>{" "}
                      08 Files
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <div className="card card-block card-stretch card-height">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <a href="./page-android.html" className="folder">
                      <div className="icon-small  rounded bg-primary  mb-4">
                        <i className="ri-file-copy-line"></i>
                      </div>
                    </a>
                    <div className="card-header-toolbar">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle"
                          id="dropdownMenuButton3"
                          data-toggle="dropdown"
                        >
                          <i className="ri-more-2-fill"></i>
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton3"
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2"></i>View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2"></i>Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-pencil-fill mr-2"></i>Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-printer-fill mr-2"></i>Print
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2"></i>
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="./page-android.html" className="folder">
                    <h5 className="mb-2">Android</h5>
                    <p className="mb-2">
                      <i className="lar la-clock text-primary mr-2 font-size-20"></i>{" "}
                      09 Dec, 2020
                    </p>
                    <p className="mb-0">
                      <i className="las la-file-alt text-primary mr-2 font-size-20"></i>{" "}
                      08 Files
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <div className="card card-block card-stretch card-height">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <a href="./page-brightspot.html" className="folder">
                      <div className="icon-small bg-info rounded mb-4">
                        <i className="ri-file-copy-line"></i>
                      </div>
                    </a>
                    <div className="card-header-toolbar">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle"
                          id="dropdownMenuButton4"
                          data-toggle="dropdown"
                        >
                          <i className="ri-more-2-fill"></i>
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton4"
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2"></i>View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2"></i>Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-pencil-fill mr-2"></i>Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-printer-fill mr-2"></i>Print
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2"></i>
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="./page-brightspot.html" className="folder">
                    <h5 className="mb-2">Brightspot</h5>
                    <p className="mb-2">
                      <i className="lar la-clock text-info mr-2 font-size-20"></i>{" "}
                      07 Dec, 2020
                    </p>
                    <p className="mb-0">
                      <i className="las la-file-alt text-info mr-2 font-size-20"></i>{" "}
                      08 Files
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <div className="card card-block card-stretch card-height">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <a href="./page-ionic.html" className="folder">
                      <div className="icon-small bg-success rounded mb-4">
                        <i className="ri-file-copy-line"></i>
                      </div>
                    </a>
                    <div className="card-header-toolbar">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle"
                          id="dropdownMenuButton5"
                          data-toggle="dropdown"
                        >
                          <i className="ri-more-2-fill"></i>
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton5"
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2"></i>View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2"></i>Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-pencil-fill mr-2"></i>Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-printer-fill mr-2"></i>Print
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2"></i>
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="./page-ionic.html" className="folder">
                    <h5 className="mb-2">Ionic Chat App</h5>
                    <p className="mb-2">
                      <i className="lar la-clock text-success mr-2 font-size-20"></i>{" "}
                      06 Dec, 2020
                    </p>
                    <p className="mb-0">
                      <i className="las la-file-alt text-success mr-2 font-size-20"></i>{" "}
                      08 Files
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card card-block card-stretch card-transparent">
                <div className="card-header d-flex justify-content-between pb-0">
                  <div className="header-title">
                    <h4 className="card-title">Files</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card card-block card-stretch card-height">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table mb-0 table-borderless tbl-server-info">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Owner</th>
                          <th scope="col">Last Edit</th>
                          <th scope="col">File Size</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="icon-small bg-danger rounded mr-3">
                                <i className="ri-file-excel-line"></i>
                              </div>
                              <div
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                data-title="alexa5.pdf"
                                style={{ cursor: "pointer" }}
                              >
                                Weekly Report.pdf
                              </div>
                            </div>
                          </td>
                          <td>Me</td>
                          <td>Mar 30, 2020 Gail Forcewind</td>
                          <td>10 MB</td>
                          <td>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle"
                                id="dropdownMenuButton10"
                                data-toggle="dropdown"
                              >
                                <i className="ri-more-fill"></i>
                              </span>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton10"
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="ri-eye-fill mr-2"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="icon-small bg-primary rounded mr-3">
                                <i className="ri-file-download-line"></i>
                              </div>
                              <div
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.docx"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                data-title="alexa6.docx"
                                style={{ cursor: "pointer" }}
                              >
                                Milestone.docx
                              </div>
                            </div>
                          </td>
                          <td>Penny</td>
                          <td>Mar 31, 2020 Penny</td>
                          <td>65 MB</td>
                          <td>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle"
                                id="dropdownMenuButton11"
                                data-toggle="dropdown"
                              >
                                <i className="ri-more-fill"></i>
                              </span>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton11"
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="ri-eye-fill mr-2"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="icon-small bg-info rounded mr-3">
                                <i className="ri-file-excel-line"></i>
                              </div>
                              <div
                                data-title="Alexa8.xlsx"
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.xlsx"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                style={{ cursor: "pointer" }}
                              >
                                Training center.xlsx
                              </div>
                            </div>
                          </td>
                          <td>Banny</td>
                          <td>Mar 30, 2020 Banny</td>
                          <td>90 MB</td>
                          <td>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle"
                                id="dropdownMenuButton13"
                                data-toggle="dropdown"
                              >
                                <i className="ri-more-fill"></i>
                              </span>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton13"
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="ri-eye-fill mr-2"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="icon-small bg-success rounded mr-3">
                                <i className="ri-file-excel-line"></i>
                              </div>
                              <div
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.docx"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                data-title="alexa7.pptx"
                                style={{ cursor: "pointer" }}
                              >
                                Training center.pptx
                              </div>
                            </div>
                          </td>
                          <td>Me</td>
                          <td>Apr 04, 2020 me</td>
                          <td>10 MB</td>
                          <td>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle"
                                id="dropdownMenuButton12"
                                data-toggle="dropdown"
                              >
                                <i className="ri-more-fill"></i>
                              </span>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton12"
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="ri-eye-fill mr-2"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
