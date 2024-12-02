import React, { useState } from 'react';
import { DialogActions, DialogContent, DialogTitle, Checkbox, Button, TextField } from '@mui/material';
import './RequestAccessModal.scss';

const RequestAccessModal = ({ onClose }) => {
  const [reason, setReason] = useState('');
  const [checked, setChecked] = useState(false);

  const content = {
    title: "Request Access",  
    bodyText: "To ensure the security and privacy of sensitive information, access to unmask data is restricted. Please provide a valid reason for your request and ensure you have the necessary permissions.", 
    termsConditions: "I acknowledge that unmasking data is subject to compliance with company policies and data protection regulations.",
    primaryBtnText: "Request Access", 
    secondaryBtnText: "Cancel", 
  };

  const handleSubmit = () => {
    if (checked) {
      console.log('Submitted Reason:', reason); // Handle the submission logic
      onClose(); // Close modal after submission
    } else {
      alert('Please agree to the terms before submitting.');
    }
  };

  return (
    <>
      <DialogTitle>{content.title}</DialogTitle>
      <DialogContent>
        <p>{content.bodyText}</p>
        <TextField
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="modal__input"
          placeholder='Reason For Access'
          fullWidth
        />
        <div className="modal__checkbox">
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            color="primary"
          />
          <label htmlFor="agree" className="modal__checkbox__label">
            {content.termsConditions}
          </label>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} className="btn-primary">
          {content.primaryBtnText}
        </Button>
        <Button onClick={onClose} className="btn-border">
          {content.secondaryBtnText}
        </Button>
      </DialogActions>
    </>
  );
};

export default RequestAccessModal;
