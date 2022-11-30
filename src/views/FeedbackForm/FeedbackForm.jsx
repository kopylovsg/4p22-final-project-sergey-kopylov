import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Checkbox/Checkbox'
import isEmailValid from "../../utils/isEmailValid";
import Radios from "../../components/Radios/Radios";
import Select from "../../components/Select/Select";



const FeedbackForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');

  const [agreement, setAgreement] = useState(false);
  const [agreementError, setAgreementError] = useState('');

  const [country, setCountry] = useState('russia');

  const validate = () => {
    let hasError = false

    if (isEmailValid(email)) {
      setEmailError('')
    } else {
      setEmailError('Поле обязательно для заполнения!')
      hasError = true
    }

    if (name.length) {
      setNameError('')
    } else {
      setNameError('Поле обязательно для заполнения!')
      hasError = true
    }

    if (message.length) {
      setMessageError('')
    } else {
      setMessageError('Поле обязательно для заполнения!')
      hasError = true
    }

    if (agreement) {
      setAgreementError('')
    } else {
      setAgreementError('Обязательное поле!')
      hasError = true
    }
    return !hasError;
  };

  const onSubmit = (event) => {
    event.preventDefault()

    const isValid = validate()
    if (isValid) {
      const formNode = event.target;
      const formData= new FormData(formNode);
      const formDataFormatted = Object.fromEntries(formData);
      console.log(formDataFormatted)
    }
  };


  return (
    <form className="feedback-form" onSubmit={onSubmit}>
      <div className="feedback-form__item">
        <Input
          isLabelHidden
          name="email"
          type="email"
          placeholder="email@emаil.com"
          label="Email"
          value={email}
          error={emailError}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>

      <div className="feedback-form__item">
        <Input
          name="name"
          placeholder="Введите имя"
          label="Name"
          value={name}
          error={nameError}
          onChange={({ target }) => setName(target.value)}
        />
      </div>

      <div className="feedback-form__item">
        <Input
          name="message"
          type="textarea"
          placeholder="ваше сообщение"
          label="Message"
          value={message}
          error={messageError}
          onChange={({ target }) => setMessage(target.value)}
        />
      </div>

      <div className="feedback-form__item">
        <Checkbox
          name="agreement"
          label="Cогласен с условиями"
          isChecked={agreement}
          error={agreementError}
          onChange={({ target }) => setAgreement(target.checked)}
        />
      </div>

      <div className="feedback-form__item">
        <Radios
          name="sex"
          label="Пол:"
          items={[
            {
              value: 'male',
              label: 'Male',
              isChecked: true,
            },
            {
              value: 'female',
              label: 'Female',
            },
          ]}

        />

      </div>

      <div className="feedback-form__item">
        <Select
          label="Регион"
          name="Country"
          value={country}
          options={[
            {
              value: 'russia',
              label: 'Russia',
            },
            {
              value: 'usa',
              label: 'USA',
            },
            {
              value: 'china',
              label: 'China',
            },
          ]}
          onChange={setCountry}
        />
      </div>

      <div className="feedback-form__item">
        <button type="submit">Отправить</button>
      </div>

    </form>
  );
};

export default FeedbackForm;