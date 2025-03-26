import React from "react";
import faqGraphic from '../images/faq_graphic.jpg'; // Update with the correct path to the image
import Footer from "./Footer";




const FAQs = () => {


    // FAQ Data
const faqData = [
    {
      question: "How can I benefit from using Alumni Space?",
      answer: (
        <>
          Using Alumni Space, you can <strong>reconnect with former classmates</strong>,{" "}
          <strong>access exclusive career resources</strong> and networking opportunities,
          and stay engaged with your alma mater through{" "}
          <strong>events and community initiatives</strong>. Whether you're looking to
          advance your career, participate in alumni events, or contribute to the
          university community, Alumni Space provides valuable tools and connections to
          enhance your professional and personal growth.
        </>
      ),
    },
    {
      question: "Do I need to pay for the services being offered?",
      answer: (
        <>
          <strong>No, all services provided on the alumni website are completely free of
          charge.</strong> We are dedicated to supporting our alumni community without
          any costs, allowing you to freely access networking opportunities, career
          resources, and event participation. Enjoy the full range of features and
          support without any financial commitment.
        </>
      ),
    },
    {
      question: "Can I find a job on this platform?",
      answer: (
        <>
          Yes, you can find a job on this platform.{" "}
          <b>
            The website offers a range of free career resources, including job listings,
            networking events, and mentorship programs
          </b>{" "}
          designed to help alumni connect with potential employers and advance their
          careers. By leveraging these tools, you can explore various job opportunities
          and receive valuable guidance without any cost.
        </>
      ),
    },
    {
      question: "What should I do if my academic record is blocked?",
      answer: (
        <>
          You can download the blocked academic record form by{" "}
          <a
            href="https://tut.ac.za/images/docs/blocked-Academic-Record.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            clicking here
          </a>
          . Once completed, please email it to{" "}
          <a href="mailto:SkosanaK@tut.ac.za">SkosanaK@tut.ac.za</a> and ensure to cc:{" "}
          <a href="mailto:SegwaneTM@tut.ac.za">SegwaneTM@tut.ac.za</a>.
        </>
      ),
    },
    {
      question: "How can I apply for the re-issuing of my certificate?",
      answer: (
        <>
          <p>
            To apply for a duplicate qualification statement, submit an affidavit
            (confirming the loss, theft, or destruction of the original certificate), a
            copy of your ID, and proof of payment. The fee is R224 per qualification,
            payable to:
          </p>
          <p>
            <strong>Account Name:</strong> Tshwane University of Technology
            <br />
            <strong>Bank:</strong> ABSA
            <br />
            <strong>Account No:</strong> 04 000 000 3
            <br />
            <strong>Branch Code:</strong> 323245
            <br />
            <strong>Reference No:</strong> F224/0455
          </p>
          <p>Duplicate certificates will be issued, not original ones.</p>
        </>
      ),
    },
  ];


  return (

    <>
    <section className="faq-section" id="section_4">
    <div className="container">
        <div className="row">
          <div className="">
            <h2 className="mb-3" style={{ textAlign: 'center', paddingTop: '30px' }}>Frequently Asked Questions</h2>
          </div>
          <div className="clearfix"></div>
          <div className="col-lg-5 col-12">
            <img src={faqGraphic} className="img-fluid" alt="FAQs" />
          </div>
          <div className="col-lg-6 col-12 m-auto">
            <div className="accordion" id="accordionExample">

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    How can I benefit from using Alumni Space?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Using Alumni Space, you can <strong>reconnect with former classmates</strong>, <strong>access exclusive career resources</strong> and networking opportunities, and stay engaged with your alma mater through <strong>events and community initiatives</strong>. Whether you're looking to advance your career, participate in alumni events, or contribute to the university community, Alumini Space provides valuable tools and connections to enhance your professional and personal growth.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do I need to pay for the services being offered?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>No, all services provided on the alumni website are completely free of charge.</strong> We are dedicated to supporting our alumni community without any costs, allowing you to freely access networking opportunities, career resources, and event participation. Enjoy the full range of features and support without any financial commitment.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can I find a job on this platform?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, you can find a job on this platform. <b>The website offers a range of free career resources, including job listings, networking events, and mentorship programs</b> designed to help alumni connect with potential employers and advance their careers. By leveraging these tools, you can explore various job opportunities and receive valuable guidance without any cost.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                  What should I do if my academic record is blocked?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  <p>You can download the blocked academic record form by <a href="https://tut.ac.za/images/docs/blocked-Academic-Record.pdf" target="_blank" rel="noopener noreferrer">clicking here</a>. Once completed, please email it to <a href="mailto:SkosanaK@tut.ac.za">SkosanaK@tut.ac.za</a> and ensure to cc: <a href="mailto:SegwaneTM@tut.ac.za">SegwaneTM@tut.ac.za</a>.</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                  How can I apply for the re-issuing of my certificate?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                   <p>To apply for a duplicate qualification statement, submit an affidavit (confirming the loss, theft, or destruction of the original certificate), a copy of your ID, and proof of payment. The fee is R224 per qualification, payable to:</p>
                   <p><strong>Account Name:</strong> Tshwane University of Technology<br />
                   <strong>Bank:</strong> ABSA<br />
                   <strong>Account No:</strong> 04 000 000 3<br />
                   <strong>Branch Code:</strong> 323245<br />
                   <strong>Reference No:</strong> F224/0455</p>
                   <p>Duplicate certificates will be issued, not original ones.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    
    <Footer/>
    </>
    
  );
};

export default FAQs;
