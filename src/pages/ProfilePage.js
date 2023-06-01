import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className="profile-container">
      <h1>Profile Details</h1>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default ProfilePage;
