import React from 'react';
import Input from '../../components/Input/Input';




const FeedbackForm = () => {



  return (
    <form className="feedback-form">
      <div className="feedback-form__item">
        <Input
          isLabelHidden
          name="user-email"
          type="email"
          placeholder="email@emашl.com"
          label="Email"
        />
      </div>

      <div className="feedback-form__item">
        <Input
          name="name"
          placeholder="Введите имя"
          label="name"
        />
      </div>

      <div className="feedback-form__item">
        <Input
          name="user-message"
          type="textarea"
          placeholder="ваше сообщение"
          label="Message"
        />
      </div>

    </form>
  );
};

export default FeedbackForm;