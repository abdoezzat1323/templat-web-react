import "./fontawesome-free-6.3.0-web/css/all.min.css";
import "./App.css";

function App() {
  return (
    <>
      <section className="    bg-image  ">
        <nav className=" sec1-text navbar navbar-expand-lg p-3  ">
          <div className="container">
            <div className=" col-xl-4 col-xl-4 col-lg-3 col-md-4 ">
              <a className="fs-4  text-light navbar-brand" href="a">
                Devolepee
              </a>
            </div>
            <div className="col-1">
              <button
                className="navbar-toggler text-bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className=" offset-xxl-1 col-xl-4 col-lg-5 col-md-5  collapse navbar-collapse  "
              id="navbarNavDropdown"
            >
              <ul className=" fs-4 txt-color navbar-nav">
                <div className=" underline-parent me-4 overflow-hidden">
                  <div className="w-100 h-special bg-light underline-div"></div>
                  <li className="nav-item">
                    <a
                      className="text-light fs-5 nav-link active"
                      aria-current="page"
                      href="a"
                    >
                      HOME
                    </a>
                  </li>
                </div>
                <div className=" underline-parent me-4 overflow-hidden">
                  <div className="w-100 h-special bg-light underline-div"></div>
                  <li className="nav-item">
                    <a
                      className="text-light fs-5 nav-link active"
                      aria-current="page"
                      href="a"
                    >
                      ABOUT
                    </a>
                  </li>
                </div>{" "}
                <div className=" underline-parent me-4 overflow-hidden">
                  <div className="w-100 h-special bg-light underline-div"></div>
                  <li className="nav-item">
                    <a
                      className="text-light fs-5 nav-link active"
                      aria-current="page"
                      href="a"
                    >
                      SERVICES
                    </a>
                  </li>
                </div>{" "}
                <div className=" underline-parent me-4 overflow-hidden">
                  <div className="w-100 h-special bg-light underline-div"></div>
                  <li className="nav-item">
                    <a
                      className="text-light fs-5 nav-link active"
                      aria-current="page"
                      href="a"
                    >
                      WORK
                    </a>
                  </li>
                </div>{" "}
                <div className=" underline-parent me-4 overflow-hidden">
                  <div className="w-100 h-special bg-light underline-div"></div>
                  <li className="nav-item">
                    <a
                      className="text-light fs-5 nav-link active"
                      aria-current="page"
                      href="a"
                    >
                      BLOG
                    </a>
                  </li>
                </div>
                <div className=" underline-parent me-4 overflow-hidden">
                  <div className="w-100 h-special bg-light underline-div"></div>
                  <li className="nav-item">
                    <a
                      className="text-light  fs-5 nav-link active"
                      aria-current="page"
                      href="a"
                    >
                      CONTACTS
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <div className=" sec1-text container  h-75 d-flex justify-content-center align-items-center ">
          <div className="row  ">
            <div className="col-12 text-center ">
              <h1 className="  fs-special txt-color pb-4 ">
                I am Morgan Freeman
              </h1>
              <h1 className="txt-color">DEVOLEPER</h1>
            </div>
          </div>
        </div>
      </section>
      <section className=" h-auto sec2-bg-color  pb-3">
        <div className="container  bg-white shadow rounded-3 px-5 ">
          <div className="row ">
            <div className="col-xl-6 col-12   mt-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4    ">
                  <img
                    className=" rounded-3 w-100 "
                    src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/testimonial-2.jpg"
                    alt=""
                  />
                </div>
                <div className=" offset-xl-1 col-xl-7 col-lg-8 col-md-8 col-sm-8 col-8  ">
                  <h5 className=" fw-bold">
                    Name:<span className=" fw-normal"> Morgan Freeman</span>
                  </h5>
                  <h5 className="fw-bold mt-4">
                    Profile:
                    <span className=" fw-normal"> full stack developer</span>
                  </h5>
                  <h5 className="fw-bold mt-4">
                    Email:
                    <span className=" fw-normal"> contact@example.com</span>
                  </h5>
                  <h5 className="fw-bold mt-4">
                    Phone: <span className=" fw-normal"> (617) 557-0089</span>
                  </h5>
                </div>
              </div>
              <div className="mt-3">
                <h4>Skill</h4>
                <h4 className=" mt-3 fw-bold">HTML 75%</h4>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar w-75"></div>
                </div>
                <h4 className="mt-3 fw-bold">CSS 50%</h4>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar w-50"></div>
                </div>
                <h4 className="mt-3 fw-bold">PHP 25%</h4>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar w-25"></div>
                </div>
                <h4 className="mt-3 fw-bold">JAVASCRIPT 75%</h4>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar w-75"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 mt-5">
              <h2>About Me</h2>
              <div className="w-100px h-special bg-blue"></div>
              <p className=" fw-light mt-5 fs-4">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                at sem. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Nulla porttitor accumsan tincidunt
              </p>
              <p className=" fw-light mt-4 fs-4">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                at sem. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Nulla porttitor accumsan tincidunt.
              </p>
              <p className=" fw-light mt-4 fs-4 ">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                at sem. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Nulla porttitor accumsan tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-100  h-auto   sec2-bg-color">
        <div className="container mb-4">
          <div className="row text-center">
            <div className="col-12 mt-5">
              <h1 className=" fw-bolder">SERVICES</h1>
              <p className=" fs-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
              <div className="d-flex justify-content-center">
                <div className="w-100px h-special  bg-blue mb-5"></div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center ">
            <div className="col-xl-4 col-lg-6 col-md-12 mb-5 text-center ">
              <div className=" parent-icon-div w-100 bg-white rounded-4 shadow pt-5">
                <div className=" w-100 h-icon-div  d-flex align-items-center justify-content-center">
                  <span className=" border-special  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-briefcase  fa-special "></i>
                  </span>
                </div>
                <div className="pt-3 pb-4">
                  <h1>WEB DESIGN</h1>
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mb-5 text-center ">
              {" "}
              <div className=" parent-icon-div w-100 bg-white rounded-4 shadow pt-5">
                <div className=" w-100 h-icon-div  d-flex align-items-center justify-content-center">
                  <span className=" border-special  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-briefcase  fa-special "></i>
                  </span>
                </div>
                <div className="pt-3 pb-4">
                  <h1>WEB DESIGN</h1>
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mb-5 text-center">
              <div className=" parent-icon-div w-100 bg-white rounded-4 shadow pt-5">
                <div className=" w-100 h-icon-div  d-flex align-items-center justify-content-center">
                  <span className=" border-special  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-briefcase  fa-special "></i>
                  </span>
                </div>
                <div className="pt-3 pb-4">
                  <h1>WEB DESIGN</h1>
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row d-flex justify-content-center ">
            <div className="col-xl-4 col-lg-6 col-md-12 mb-5 text-center ">
              <div className=" parent-icon-div w-100 bg-white rounded-4 shadow pt-5">
                <div className=" w-100 h-icon-div  d-flex align-items-center justify-content-center">
                  <span className=" border-special  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-briefcase  fa-special "></i>
                  </span>
                </div>
                <div className="pt-3 pb-4">
                  <h1>WEB DESIGN</h1>
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mb-5 text-center ">
              {" "}
              <div className=" parent-icon-div w-100 bg-white rounded-4 shadow pt-5">
                <div className=" w-100 h-icon-div  d-flex align-items-center justify-content-center">
                  <span className=" border-special  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-briefcase  fa-special "></i>
                  </span>
                </div>
                <div className="pt-3 pb-4">
                  <h1>WEB DESIGN</h1>
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-xl-4 col-lg-6 col-md-12 mb-5 text-center">
              <div className=" parent-icon-div w-100 bg-white rounded-4 shadow pt-5">
                <div className=" w-100 h-icon-div  d-flex align-items-center justify-content-center">
                  <span className=" border-special  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-briefcase  fa-special "></i>
                  </span>
                </div>
                <div className="pt-3 pb-4">
                  <h1>WEB DESIGN</h1>
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" sec3-img    position-relative">
        <div className="bg-img-blue "></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-12  my-lg-5 py-4   ">
              <div className=" parent-icon-div w-100 h-55     ">
                <div className=" w-100 h-icon-div2 d-flex align-items-center justify-content-center  ">
                  <span className=" border-special2  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-briefcase  fa-special "></i>
                  </span>
                </div>
              </div>
              <div className=" text-white  sec3-txt-color text-center">
                <h1>450</h1>
                <p>WORKS COMPLETED</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12  my-lg-5 py-4   ">
              <div className=" parent-icon-div w-100 h-55     ">
                <div className=" w-100 h-icon-div2 d-flex align-items-center justify-content-center  ">
                  <span className=" border-special2  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-briefcase  fa-special "></i>
                  </span>
                </div>
              </div>
              <div className=" text-white  sec3-txt-color text-center">
                <h1>450</h1>
                <p>WORKS COMPLETED</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12  my-lg-5 py-4   ">
              <div className=" parent-icon-div w-100 h-55    ">
                <div className=" w-100 h-icon-div2 d-flex align-items-center justify-content-center  ">
                  <span className=" border-special2  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-briefcase  fa-special "></i>
                  </span>
                </div>
              </div>
              <div className=" text-white  sec3-txt-color text-center">
                <h1>450</h1>
                <p>WORKS COMPLETED</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12  my-lg-5 py-4   ">
              <div className=" parent-icon-div w-100 h-55     ">
                <div className=" w-100 h-icon-div2 d-flex align-items-center justify-content-center  ">
                  <span className=" border-special2  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-briefcase  fa-special "></i>
                  </span>
                </div>
              </div>
              <div className=" text-white  sec3-txt-color text-center">
                <h1>450</h1>
                <p>WORKS COMPLETED</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" sec2-bg-color w-100 h-auto pb-9">
        <div className="container  ">
          <div className="row text-center pt-4 ">
            <div className="col-12 ">
              <h1 className=" fw-bolder  ">PORTFOLIO</h1>
              <p cla>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="w-100 d-flex justify-content-center">
                <div className="w-100px  h-special bg-blue mb-5"></div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-12 mb-3">
              <div className="w-100   parent-card-sec4  ">
                <div className=" overflow-hidden">
                  <a href="a">
                    <img
                      className=" img-sec4 rounded-3 "
                      src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/work-1.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" d-flex justify-content-between align-items-center shadow rounded-3">
                  <div>
                    <h5 className="m-3 me-0">Lorem impsum dolor</h5>
                    <p className="m-3 pb-3">Web Design / 18 Sep. 2018</p>
                  </div>
                  <div className=" plus-parent text-center  me-3">
                    <span>
                      <a href="a">
                        <i className="fa-solid fa-plus plus-font "></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mb-3">
              <div className="w-100   parent-card-sec4  ">
                <div className=" overflow-hidden">
                  <a href="a">
                    <img
                      className=" img-sec4 rounded-3 "
                      src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/work-2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" d-flex justify-content-between align-items-center shadow rounded-3">
                  <div>
                    <h3 className="m-3">Lorem impsum dolor</h3>
                    <p className="m-3 pb-3">Web Design / 18 Sep. 2018</p>
                  </div>
                  <div className=" plus-parent text-center  me-3">
                    <span>
                      <a href="a">
                        <i className="fa-solid fa-plus plus-font "></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mb-3">
              <div className="w-100   parent-card-sec4  ">
                <div className=" overflow-hidden">
                  <a href="a">
                    <img
                      className=" img-sec4 rounded-3 "
                      src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/work-3.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" d-flex justify-content-between align-items-center shadow rounded-3">
                  <div>
                    <h3 className="m-3">Lorem impsum dolor</h3>
                    <p className="m-3 pb-3">Web Design / 18 Sep. 2018</p>
                  </div>
                  <div className=" plus-parent text-center  me-3">
                    <span>
                      <a href="a">
                        <i className="fa-solid fa-plus plus-font "></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center pt-4">
            <div className="col-xl-4 col-lg-6 col-md-12 mb-3">
              <div className="w-100   parent-card-sec4  ">
                <div className=" overflow-hidden">
                  <a href="a">
                    <img
                      className=" img-sec4 rounded-3 "
                      src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/work-4.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" d-flex justify-content-between align-items-center shadow rounded-3">
                  <div>
                    <h3 className="m-3">Lorem impsum dolor</h3>
                    <p className="m-3 pb-3">Web Design / 18 Sep. 2018</p>
                  </div>
                  <div className=" plus-parent text-center  me-3">
                    <span>
                      <a href="a">
                        <i className="fa-solid fa-plus plus-font "></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mb-3">
              <div className="w-100   parent-card-sec4  ">
                <div className=" overflow-hidden">
                  <a href="a">
                    <img
                      className=" img-sec4 rounded-3 "
                      src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/work-5.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" d-flex justify-content-between align-items-center shadow rounded-3">
                  <div>
                    <h3 className="m-3">Lorem impsum dolor</h3>
                    <p className="m-3 pb-3">Web Design / 18 Sep. 2018</p>
                  </div>
                  <div className=" plus-parent text-center  me-3">
                    <span>
                      <a href="a">
                        <i className="fa-solid fa-plus plus-font "></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 mb-3">
              <div className="w-100   parent-card-sec4  ">
                <div className=" overflow-hidden">
                  <a href="a">
                    <img
                      className=" img-sec4 rounded-3 "
                      src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/work-6.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" d-flex justify-content-between align-items-center shadow rounded-3">
                  <div>
                    <h3 className="m-3">Lorem impsum dolor</h3>
                    <p className="m-3 pb-3">Web Design / 18 Sep. 2018</p>
                  </div>
                  <div className=" plus-parent text-center  me-3">
                    <span>
                      <a href="a">
                        <i className="fa-solid fa-plus plus-font "></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="  w-100  h-auto sec5-img position-relative">
        <div className="bg-img-blue "></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className=" text-center ">
                      <div className="d-flex  justify-content-center mb-5  ">
                        <img
                          src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/testimonial-4.jpg"
                          className="d-block rounded-circle "
                          alt="..."
                        />
                      </div>
                      <div className="w-50 m-auto text-white pb-3">
                        <h3>MARTA SOCRATE</h3>
                        <p className=" fs-5">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className=" text-center ">
                      <div className="d-flex mb-5 justify-content-center">
                        <img
                          src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/testimonial-2.jpg"
                          className="d-block rounded-circle "
                          alt="..."
                        />
                      </div>
                      <div className="w-50 text-white m-auto pb-3">
                        <h3>XAVI ALONSO</h3>
                        <p className=" fs-5">
                          Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at sem. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className=" slider-but  me-2"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="  slider-but "
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" h-auto sec2-bg-color">
        <div className="container pb-5">
          <div className="row">
            <div className="col-12 text-center mt-5">
              <h1 className=" fw-bolder fs-7">BLOG</h1>
              <p className=" fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <div className="d-flex justify-content-center">
                <div className="w-100px h-special  bg-blue mb-5"></div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center ">
            <div className="col-xl-4  col-lg-6 col-md-12 mb-4">
              <div className="w-100 bg-white  rounded-3 shadow">
                <div className="mb-3 position-relative">
                  <img
                    className="w-100 rounded-3"
                    src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/post-1.jpg"
                    alt=""
                  />
                  <div className="sm-card-sec5">
                    <span className="  py-3 px-3 m-auto">TRAVEL</span>
                  </div>
                </div>
                <div className=" ms-4">
                  <h3>See more ideas about Travel</h3>
                  <p>
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta
                    dapibus. Praesent sapien massa, convallis a pellentesque
                    nec, egestas non nisi.
                  </p>
                </div>
                <div className="sec5-card rounded-3 ">
                  <div className=" d-flex align-items-center pb-2 row ">
                    <div className=" col-2 pe-2   d-flex justify-content-end aligt pt-2">
                      <img
                        src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/testimonial-4.jpg"
                        className=" rounded-circle w-60  "
                        alt="..."
                      />
                    </div>
                    <div className="col-6 ps-0 me-4 pt-2 me-3">
                      <h5>Morgan Freeman</h5>
                    </div>
                    <div className="col-3 fs-5 fw-lighter   text-black">
                      <span className="">
                        <i class="fa-regular fa-clock "></i>
                      </span>
                      <span className="fs-5 ms-2">10 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4  col-lg-6 col-md-12  mb-4 ">
              <div className="w-100 bg-white  rounded-3 shadow">
                <div className="mb-3 position-relative">
                  <img
                    className="w-100 rounded-3"
                    src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/post-2.jpg"
                    alt=""
                  />
                  <div className="sm-card-sec5">
                    <span className="  py-3 px-3 m-auto">WEB</span>
                  </div>
                </div>
                <div className=" ms-4">
                  <h3>See more ideas about Travel</h3>
                  <p>
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta
                    dapibus. Praesent sapien massa, convallis a pellentesque
                    nec, egestas non nisi.
                  </p>
                </div>
                <div className="sec5-card rounded-3 ">
                  <div className=" d-flex align-items-center pb-2 row ">
                    <div className=" col-2 pe-2   d-flex justify-content-end aligt pt-2">
                      <img
                        src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/testimonial-4.jpg"
                        className=" rounded-circle w-60  "
                        alt="..."
                      />
                    </div>
                    <div className="col-6 ps-0 me-4 pt-2 me-3">
                      <h5>Morgan Freeman</h5>
                    </div>
                    <div className="col-3 fs-5 fw-lighter   text-black">
                      <span className="">
                        <i class="fa-regular fa-clock "></i>
                      </span>
                      <span className="fs-5 ms-2">10 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4  col-lg-6 col-md-12  mb-4 ">
              <div className="w-100 bg-white  rounded-3 shadow">
                <div className="mb-3 position-relative">
                  <img
                    className="w-100 rounded-3"
                    src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/post-3.jpg"
                    alt=""
                  />
                  <div className="sm-card-sec5">
                    <span className="  py-3 px-3 m-auto">WEB DESIGN</span>
                  </div>
                </div>
                <div className=" ms-4">
                  <h3>See more ideas about Travel</h3>
                  <p>
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta
                    dapibus. Praesent sapien massa, convallis a pellentesque
                    nec, egestas non nisi.
                  </p>
                </div>
                <div className="sec5-card rounded-3 ">
                  <div className=" d-flex align-items-center pb-2 row ">
                    <div className=" col-2 pe-2   d-flex justify-content-end aligt pt-2">
                      <img
                        src="https://abdelwahab-mohamed98.github.io/DevFolio-Bootstrap-Project/images/testimonial-4.jpg"
                        className=" rounded-circle w-60  "
                        alt="..."
                      />
                    </div>
                    <div className="col-6 ps-0 me-4 pt-2 me-3">
                      <h5>Morgan Freeman</h5>
                    </div>
                    <div className="col-3 fs-5 fw-lighter   text-black">
                      <span className="">
                        <i class="fa-regular fa-clock "></i>
                      </span>
                      <span className="fs-5 ms-2">10 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-100  h-auto sec5-img position-relative">
        <div className="bg-img-blue "></div>
        <div className="container mb-0 ">
          <div className=" row bg-white">
            <div className=" col-xl-6 col-lg-12 pt-5 ">
              <div className="pt-3 mb-5">
                <h2>Send Message Us</h2>
                <div className="slach-last "></div>
              </div>
              <div className="message-cotente pb-5 ">
                <form action="">
                  <input
                    type="text"
                    className="py-1 px-2 w-100 my-2"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="py-1 px-2 w-100 my-2"
                    placeholder="Your Email"
                  />
                  <input
                    type="text"
                    className="py-1 px-2 w-100 my-2"
                    placeholder="Subject"
                  />
                  <textarea
                    type="text"
                    className="py-1 px-2 w-100 my-2"
                    placeholder="Message"
                  />
                </form>
                <div className="sendmess-but mt-5 mb-4">
                  <button className=" btn-special">Send Message</button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 pt-5 ">
              <div className="pt-3 ">
                <h2>Get In Touch</h2>
                <div className="slach-last mb-5 "></div>
                <p className="fs-4 fw-light ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolorum dolorem soluta quidem expedita aperiam aliquid
                  at. Totam magni ipsum suscipit amet? Autem nemo esse
                  laboriosam ratione nobis mollitia inventore?
                </p>
                <div className="mb-2">
                  <span className=" fs-5 ms-1">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <span className="ms-4 ">
                    329 WASHINGTON ST BOSTON, MA 02108
                  </span>
                </div>
                <div className="mb-2">
                  <span className=" fs-5 ms-1">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                  </span>
                  <span className="ms-4">(617) 557-0089</span>
                </div>
                <div className="mb-2 ">
                  <span className=" fs-5  ">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <span className="ms-3 "> contact@example.com</span>
                </div>
              </div>
              <div className="d-flex">
                <div className="social-but d-flex justify-content-center align-items-center me-3  ">
                  <span className="fs-4 ">
                    <i class="fa-brands fa-facebook"></i>
                  </span>
                </div>
                <div className="social-but d-flex justify-content-center align-items-center me-3 ">
                  <span className="fs-4 ">
                    <i class="fa-brands fa-instagram"></i>
                  </span>
                </div>
                <div className="social-but d-flex justify-content-center align-items-center me-3 ">
                  <span className="fs-4 ">
                    <i class="fa-brands fa-twitter"></i>
                  </span>
                </div>
                <div className="social-but d-flex justify-content-center align-items-center me-2 ">
                  <span className="fs-4 ">
                    <i class="fa-brands fa-linkedin"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className=" bg-blue text-white pb-2 text-center  pt-3">
        <h4>© Copyright DevFolio. All Rights Reserved</h4>
        <h5>Designed by BootstrapMade</h5>
      </footer>
    </>
  );
}

export default App;
