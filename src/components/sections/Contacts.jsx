import { useState, useEffect } from "react";
import axios from "axios";
import { lendingData } from "../../api/api";

export const Contacts = () => {
  const [contactData, setContactData] = useState({
    email: "eugene@dontpanic.team",
    telegram: "https://t.me/Boooble_boo",
  });

  useEffect(() => {
    lendingData.getContact()
      .then((response) => {
        setContactData(response.data || {
          email: "eugene@dontpanic.team",
          telegram: "https://t.me/Boooble_boo",
        });
      })
      .catch((error) => {
        console.error("Помилка отримання контактів:", error);
      });
  }, []);

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-box-title">
            <h2 className="contact-box-title-h2">Звернутись до організаторів</h2>
            <p className="contact-box-title-p">
              Якщо готові скластись dokoopy і долучитись до хорошої справи – пишіть прямо зараз ось сюди:
            </p>
          </div>
          <div className="contact-link">
            <a className="navigation-list-item" href={`mailto:${contactData.email}`}>
              email
            </a>
            <a className="navigation-list-item" href={contactData.telegram} target="_blank">
              telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
