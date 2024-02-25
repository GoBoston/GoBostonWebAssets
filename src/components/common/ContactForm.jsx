import React from "react";
import { useNavigate } from "react-router-dom";

import schools from "@/data/schools";
import trips from "@/data/trips";
import cities from "@/data/cities";

const ContactForm = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [formDataJson, setFormDataJson] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState("");
  const navigate = useNavigate();

  const closeModalAndRedirect = () => {
    setShowModal(false); // Close the modal
    navigate("/trips/upcoming/"); // Redirect to the other page
  };
  

  const handleSubmit = async (event) => {

    
    event.preventDefault();
    const phoneNumberElement = document.getElementById("phonenumber");

    // Check if the phone number element exists
    if (phoneNumberElement) {
      const phoneNumber = phoneNumberElement.value;
      if (!phoneNumber.startsWith("+7")) {
        setPhoneNumberError("Номер телефона должен начинаться с +7.");
        return;
      }

      // Reset phone number error if the validation passes
      setPhoneNumberError("");

      // Extracting values directly from the DOM
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: phoneNumber,
        school: document.getElementById("school").value,
        city: document.getElementById("city").value,
        grade: document.getElementById("grade").value,
        tour: document.getElementById("tour").value,
        message: document.getElementById("message").value,
        age: document.getElementById("age").value,
      };

      // Set the form data JSON and show the modal
      setFormDataJson(JSON.stringify(formData, null, 2));
      const messageText = `#formSubmission\nНовая заявка\nИмя Фамилия: ${formData.name}\nEmail: ${formData.email}\nТелефон: ${formData.phoneNumber}\nШкола: ${formData.school}(Класс: ${formData.grade}, Возраст: ${formData.age})\nГород: ${formData.city}\nТур: ${formData.tour}\nДополнительно: ${formData.message}`;
  
      const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
      const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
      try {
        const response = await fetch(sendMessageUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
            parse_mode: "HTML"
          }),
        });
  
        const responseData = await response.json();
  
        if (!response.ok || !responseData.ok) {
          console.log(responseData);
          throw new Error("Failed to send message");
        }
  
      // Handle success (e.g., showing a confirmation message to the user)
      } catch (error) {
        console.error("Error sending message to Telegram:", error);
      // Handle error (e.g., showing an error message to the user)
      }
      setShowModal(true);
      
    } else {
      console.error("Phone number field not found");
    }
  
    
  };

  return (
    <section className="layout-pt-md layout-pb-lg">
      <form className="row y-gap-20 pt-30" onSubmit={handleSubmit}>
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 offset-md-3 offset-0">
            <div className="form-input">
              <input type="text" id="name" required />
              <label htmlFor="name" className="lh-1 text-16 text-light-1">
              Имя Фамилия
              </label>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 offset-md-3 offset-0">
            <div className="form-input">
              <input type="email" id="email" required />
              <label htmlFor="email" className="lh-1 text-16 text-light-1">
              Email
              </label>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 offset-md-3 offset-0">
            <div className="form-input">
              <input type="text" id="phonenumber" required />
              <label htmlFor="phonenumber" className="lh-1 text-16 text-light-1">
              Номер телефона ученика
              </label>
              {phoneNumberError && <div className="text-danger">{phoneNumberError}</div>}
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 offset-md-3 offset-0">
            <div className="form-input">
              <input type="text" id="phonenumberParent" required />
              <label htmlFor="phonenumberParent" className="lh-1 text-16 text-light-1">
              Номер телефона родителя
              </label>
              {phoneNumberError && <div className="text-danger">{phoneNumberError}</div>}
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 offset-md-3 offset-0">
            <label>Школа</label>
            <div className="form-input">
              <select id="school" className="form-select" required>
                {schools.map((item) => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))}
                <option value="Other Public School">Другая школа</option>
              </select>

            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 offset-md-3 offset-0">
            <label>Город</label>
            <div className="form-input">
              <select id="city" className="form-select" required>
                {cities.slice(0, 8).map((city, index) => (
                  <option key={index} value={city.name}>{city.name}</option>
                ))}
                <option value="Other City">Другой город</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 offset-md-3 offset-0">
            <div className="form-input">
              <input type="number" id="grade" required />
              <label htmlFor="grade" className="lh-1 text-16 text-light-1">
              Класс обучения
              </label>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 offset-md-3 offset-0">
            <div className="form-input">
              <input type="number" id="age" required />
              <label htmlFor="age" className="lh-1 text-16 text-light-1">
              Возраст
              </label>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 offset-md-3 offset-0">
            <label>Тур</label>
            <div className="form-input">
              <select id="tour" className="form-select" required>
                {trips.slice(0, 8).map((item) => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 offset-md-3 offset-0">
            <div className="form-input">
              <textarea id="message" rows="4"></textarea>
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
          Отправить заявку! <div className="icon-arrow-top-right ml-15"></div>
          </button>
        </div>
      </form>
      <div className={`modal ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Ура! Развиваемся в Пути!</h5>
              <button type="button" className="close" onClick={closeModalAndRedirect}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Ваша заявка отправлена: 
              <pre>{formDataJson}</pre>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModalAndRedirect}>Закрыть</button>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <div className="modal-backdrop show"></div> : null}
    </section>
  );
};

export default ContactForm;
