import React from 'react';
import { useParams } from 'react-router-dom';

const AlumniDetail = ({ teamMembers }) => {
  const { id } = useParams();
  
  // Find the member based on the id from the URL
  const member = teamMembers.find((m) => m.id === parseInt(id)); // Assuming 'id' is a number

  if (!member) {
    return <div>Alumni not found</div>;
  }

  return (
    <div className="alumni-detail">
      <h2>{member.name}</h2>
      <p>{member.description}</p> {/* Assume description is part of the member object */}
    </div>
  );
};

export default AlumniDetail;

