import React from 'react';
import '../assets/style/Section4.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

function Section4() {
  const [result, setResult] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a568b47a-8044-428b-9e8f-717075a0c1f7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="Section4">
      <div className="Section4-information">
        <h2>Let&apos;s Work Together</h2>
        <p>
          I create personalized graduation notes that celebrate achievements and milestones.
          Each note is crafted with care, making your special moment even more memorable.
          Perfect for sharing heartfelt words and best wishes.
        </p>
        <div className="Section4-icons">
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
      </div>

      <div className="Section4-form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='Name ' required/>
          <input type="email" name="email" placeholder='Email ' required/>
          <textarea name="message" placeholder='Your Message ' required></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Form'}
          </button>
        </form>
        <span style={{ color: result === "Form Submitted Successfully" ? 'green' : 'black' }}>{result}</span>
      </div>
    </div>
  );
}

export default Section4;
