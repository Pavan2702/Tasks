'use client';
import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Trash2 } from 'lucide-react';
import CustomInput from './CustomInput';
import Image from 'next/image';
import UserImage from '../../../public/UserImage.png';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  city: Yup.string().required('City is required'),
  postalCode: Yup.string().required('Postal code is required'),
  address: Yup.string().required('Address is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  password: Yup.string().required('Password is required'),
});

const PersonalInfoForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    city: '',
    postalCode: '',
    address: '',
    email: '',
    phone: '',
    password: '',
    showProfile: false,
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="p-6 bg-white">
      <div className="flex items-start justify-between mb-8">
        <h2 className="text-2xl font-semibold">Personal Information</h2>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className='flex flex-col-reverse lg:grid grid-cols-12 gap-4'>
              <div className='col-span-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Field
                      type="text"
                      component={CustomInput}
                      name="firstName"
                      className="inputplace"
                      placeholder="First Name"
                    />
                  </div>

                  <div>
                    <Field
                      type="text"
                      component={CustomInput}
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </div>

                  <div>
                    <Field
                      type="text"
                      component={CustomInput}
                      name="city"
                      placeholder="City"
                    />
                  </div>

                  <div>
                    <Field
                      type="text"
                      component={CustomInput}
                      name="postalCode"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>

                <div className='my-6'>
                  <Field
                    type="text"
                    component={CustomInput}
                    name="address"
                    placeholder="Address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Field
                      type="email"
                      component={CustomInput}
                      name="email"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <Field
                      type="text"
                      component={CustomInput}
                      name="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div className='my-6'>
                  <Field
                    type="password"
                    component={CustomInput}
                    name="password"
                    placeholder="Password"
                  />
                </div>


                <p>Use this email to log in to your <span className='text-[#1688FE]'> resumedone.io </span> account and receive notifications.</p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-[170px] flex my-4 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save
                </button>


                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    name="showProfile"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Show my profile to serious employers
                  </label>
                </div>
              </div>

              <div className='col-span-4'>
                <div className="w-[144px] h-[144px] bg-gray-200 rounded-full overflow-hidden relative">
                  {/* Click on image to open file picker */}
                  <div onClick={handleImageClick} className="cursor-pointer">
                    <Image
                      src={selectedImage || UserImage} 
                      alt="User Image"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Hidden file input */}
                  <input
                    type="file"
                    id="userImage"
                    name="userImage"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="mt-8 pt-8 border pl-4 border-[#E3E3E4]">
        <h3 className="text-lg font-medium text-gray-900">Delete account</h3>
        <p className="mt-1 text-sm text-gray-500">
          If you delete your account you'll be permanently removing it from our systems - you can't undo it.
        </p>
        <button className="mt-4 flex items-center text-red-600 hover:text-red-700">
          <Trash2 className="w-4 h-4 mr-2" />
          Yes, Delete my account
        </button>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
        <p>
          <span className='text-[#1688FE]'> Get in touch with our support team </span> if you have any questions or want to leave some feedback.
          We'll be happy to hear from you.
        </p>

        <div className="mt-6 flex space-x-4">
          <a href="#" className="hover:text-gray-700">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="hover:text-gray-700">FAQ</a>
          <a href="#" className="hover:text-gray-700">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
