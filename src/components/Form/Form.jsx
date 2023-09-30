import Select from "react-select";
import "./Form.css";
import { tags } from "../../utils/tagsData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { formValidation } from "./validation";
import { userdataForm } from "./formOptions";
import { useNavigate } from "react-router-dom";
import { addData } from "../../app/features/form/formSlice";

const Form = () => {
  const [formData, setFormData] = useState(userdataForm);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData((prev) => {
      return { ...prev, [field]: value };
    });
  };

  const handleChangeSelect = (selectedOptions) => {
    setFormData((prev) => {
      return { ...prev, ["tags"]: selectedOptions };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = formValidation(formData);
    if (Object.keys(errors).length) {
      setFormErrors(errors);
    } else {
      dispatch(addData(formData));
      setFormData(userdataForm);
      alert("data submitted succesfully");
      setFormErrors({});
      navigate("/dashboard");
    }
  };

  return (
    <>
      <h1>Add User Data</h1>
      <form onSubmit={handleSubmit}>
        <div className='wrap-content'>
          <div className='input-wrap'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              placeholder='username..'
              value={formData.username}
              onChange={(e) => handleChange("username", e.target.value)}
            />
            <span
              style={{
                display: formErrors.username?.length ? "block" : "none",
              }}
              className='errors'
            >
              {formErrors.username}
            </span>
          </div>
          <div className='input-wrap'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='email..'
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <span
              style={{
                display: formErrors.email?.length ? "block" : "none",
              }}
              className='errors'
            >
              {formErrors.email}
            </span>
          </div>
        </div>
        <div>
          <Select
            isMulti
            name='tags'
            options={tags}
            className='basic-multi-select'
            classNamePrefix='select'
            onChange={handleChangeSelect}
          />
          <span
            style={{
              display: formErrors.tags?.length ? "block" : "none",
            }}
            className='errors'
          >
            {formErrors.tags}
          </span>
        </div>
        <textarea
          className='desc'
          value={formData.desc}
          onChange={(e) => handleChange("desc", e.target.value)}
        />
        <span
          style={{
            display: formErrors.desc?.length ? "block" : "none",
          }}
          className='errors'
        >
          {formErrors.desc}
        </span>
        <button type='submit'>Add Data</button>
      </form>
    </>
  );
};

export default Form;
