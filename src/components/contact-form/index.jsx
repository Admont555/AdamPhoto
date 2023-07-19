import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <Fragment>
            <form
                className="contact-form-wrapper"
                action="https://getform.io/f/09012fd6-fb44-4b11-8f74-62713c4e474b"
                method="POST"
            >
                <div className="row">
                    <div
                        className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="form-group">
                            <input
                                required
                                className="form-control"
                                type="text"
                                name="שם מלא"
                                placeholder="השם שלך"
                                ref={register({ required: "שדה השם הוא חובה" })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>
                    </div>
                    <div
                        className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="form-group">
                            <input
                                className="form-control"
                                required
                                type="tel"
                                name="טלפון"
                                placeholder="מספר הטלפון שלך"
                                ref={register({
                                    required: "מספר הטלפון נדרש",
                                    pattern: {
                                        message: "מספר הטלפון אינו תקין   ",
                                    },
                                })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div
                        className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                name="אימייל"
                                placeholder="כתובת אימייל"
                                ref={register({
                                    required: "אימייל נדרש",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "כתובת המייל אינה תקינה",
                                    },
                                })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div
                        className="col-md-6"
                        data-aos="fade-up"
                        data-aos-delay="900"
                    >
                        <div className="form-group">
                            <select
                                className="form-control"
                                type="text"
                                name="נושא"
                                placeholder="Subject"
                                ref={register({
                                    required: "Subject is required",
                                })}
                            >
                                <option value="" defaultChecked>
                                    בחרו נושא
                                </option>
                                <option value="">צילום לבית העסק</option>
                                <option value="">צילום מוצר</option>
                                <option value="">צילום תדמית</option>
                                <option value="">צילום כנס</option>
                            </select>
                            {errors.subject && <p>{errors.subject.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-12" data-aos="fade-up">
                        <div className="form-group mb-0">
                            <textarea
                                name="טקסט חופשי"
                                rows="3"
                                placeholder="טקסט חופשי"
                                ref={register({
                                    required: "",
                                })}
                            ></textarea>
                            {errors.message && <p>{errors.message.message}</p>}
                        </div>
                    </div>
                    <div
                        className="col-md-12 text-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="form-group mb-0">
                            <button className="btn-submit" type="submit">
                                שליחת טופס
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
