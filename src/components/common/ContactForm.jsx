import React from "react";

const ContactForm = () => {
  const [showModal, setShowModal] = React.useState(false);
const [formDataJson, setFormDataJson] = React.useState('');

const handleSubmit = (event) => {
  event.preventDefault();

  // Extracting values directly from the DOM
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phoneNumber: document.getElementById('phonenumber').value,
    school: document.getElementById('school').value,
    grade: document.getElementById('grade').value,
    tour: document.getElementById('tour').value,
    message: document.getElementById('message').value
  };

  // Set the form data JSON and show the modal
  setFormDataJson(JSON.stringify(formData, null, 2));
  setShowModal(true);
  };

  return (
    <section className="layout-pt-md layout-pb-lg">
    <form className="row y-gap-20 pt-30" onSubmit={handleSubmit}>
      <div class="row justify-content-start">
        <div className="col-6 offset-md-3">
          <div className="form-input">
            <input type="text" id="name" required />
            <label htmlFor="name" className="lh-1 text-16 text-light-1">
              Имя Фамилия
            </label>
          </div>
        </div>
      </div>
      <div class="row justify-content-start">
        <div className="col-6 offset-md-3">
          <div className="form-input">
            <input type="email" id="email" required />
            <label htmlFor="email" className="lh-1 text-16 text-light-1">
              Email
            </label>
          </div>
        </div>
      </div>
      <div class="row justify-content-start">
        <div className="col-6 offset-md-3">
          <div className="form-input">
            <input type="text" id="phonenumber" required />
            <label htmlFor="phonenumber" className="lh-1 text-16 text-light-1">
              Номер телефона
            </label>
          </div>
        </div>
      </div>
      <div class="row justify-content-start">
        <div className="col-6 offset-md-3">
          <div className="form-input">
            <input type="text" id="school" required />
            <label htmlFor="schools" className="lh-1 text-16 text-light-1">
              Школа
            </label>
          </div>
        </div>
      </div>
      <div class="row justify-content-start">
        <div className="col-6 offset-md-3">
          <div className="form-input">
            <input type="text" id="grade" required />
            <label htmlFor="grade" className="lh-1 text-16 text-light-1">
              Класс обучения
            </label>
          </div>
        </div>
      </div>
      <div class="row justify-content-start">
        <div className="col-6 offset-md-3">
          <div className="form-input">
            <input type="text" id="tour" required />
            <label htmlFor="tour" className="lh-1 text-16 text-light-1">
              Выбранный тур
            </label>
          </div>
        </div>
      </div>
      <div class="row justify-content-start">
        <div className="col-6 offset-md-3">
          <div className="form-input">
            <textarea id="message" required rows="4"></textarea>
            <label htmlFor="message" className="lh-1 text-16 text-light-1">
              Дополнительно
            </label>
          </div>
        </div>
      </div>
      <div className="col-auto offset-md-3">
        <button
          type="submit"
          className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
        >
          Send Message <div className="icon-arrow-top-right ml-15"></div>
        </button>
      </div>
    </form>
    <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Form Data</h5>
              <button type="button" className="close" onClick={() => setShowModal(false)}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <pre>{formDataJson}</pre>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <div className="modal-backdrop show"></div> : null}
    </section>
  );
};

export default ContactForm;
