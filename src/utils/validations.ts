import { LABELS } from "../constants/constants";

export const validateName = (name: string): string | null => {
  if (!name.trim()) return LABELS.validationGPMessage;
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) return LABELS.validationEmailMessage;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return LABELS.validationEmailInvalidMessage;
  return null;
};

export const validateContact = (contactNumber: string): string | null => {
  if (!contactNumber.trim()) return null; // optional
  const regex = /^[0-9\s+()-]+$/;
  if (!regex.test(contactNumber)) return LABELS.validationContactMessage;
  return null;
};
