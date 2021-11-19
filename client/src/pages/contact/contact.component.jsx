import React, { useState } from "react";
import * as SiIcons from 'react-icons/si';
import FormInput from '../../components/form-input/form-input.component';
import FormTextarea from '../../components/form-input/form-textarea.component';
import FormSelect from '../../components/form-input/form-select.component';
import { firestore } from "../../firebase/firebase.utils";
import CustomButton from '../../components/custom-button/custom-button.component';

import { 
    FormContainer,
    FancyTitle
} from './contact.styles';

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const [setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    firestore.collection("contacts")
      .add({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        service: service,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setService("");
    setMessage("");
  };

  return (
    <FormContainer>
        <FancyTitle>
            <SiIcons.SiMinutemailer/><h3>Send us an Email</h3>
        </FancyTitle>
        <form className="contactFormOverlay clearfix" onSubmit={handleSubmit}>
                <FormInput
                    type="text" 
					id="template-contactform-name" 
					name="template-contactform-name"
                    value={name}
                    className='sm-form-control'
                    onChange={(e) => setName(e.target.value)}
                    label='Name *'
                    required
                />
                <FormInput
                    type="text" 
					id="template-contactform-email" 
					name="template-contactform-email"
                    value={email}
                    label='Email *'
                    className='email sm-form-control'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <FormInput
                    type="text" 
					id="template-contactform-phone" 
					name="template-contactform-phone"
                    value={phone}
                    label='Phone'
                    className='sm-form-control'
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="template-contactform-service">Service</label>
                <FormSelect id="template-contactform-service" 
                        name="template-contactform-service" 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="sm-form-control">
                    <option value="">-- Select One --</option>
                    <option value="MonkeyAss1">MonkeyAss1</option>
                    <option value="MonkeyAss2">MonkeyAss2</option>
                    <option value="MonkeyAss3">MonkeyAss3</option>
                    <option value="MonkeyAss4">MonkeyAss4</option>
                </FormSelect>

                <FormInput type="text" 
                        id="template-contactform-subject" 
                        name="template-contactform-subject" 
                        value={subject}
                        label= 'Subject *'
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        />
                <label htmlFor="template-contactform-message">Message <small>*</small></label>
                <FormTextarea
                    type="text"
                    id="template-contactform-message" 
                    name="template-contactform-message" 
                    rows="6" cols="30"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}>
                </FormTextarea>
            <CustomButton>
                Submit
            </CustomButton>
        </form>
    </FormContainer>
  );
};

export default ContactPage;
