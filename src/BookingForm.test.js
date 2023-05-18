import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm, { initializeTimes, updateTimes } from './BookingForm';

// Test the submit button
test('Renders the BookingForm button', () => {
  render(<BookingForm />);
  const buttonElement = screen.getByText("Make Your Reservation");
  expect(buttonElement).toBeInTheDocument();
});

// Mock the fetchAPI function for testing purposes
jest.mock('./api', () => ({
  fetchAPI: jest.fn(() => ["10:00 AM", "12:00 PM", "2:00 PM"]), // Return a non-empty array of booking times
}));

// Test the initializeTimes function
test('initializeTimes returns the correct initial state', () => {
  const initialState = initializeTimes();
  expect(initialState).toEqual(["10:00 AM", "12:00 PM", "2:00 PM"]);
});

// Test the updateTimes function
test('updateTimes returns the same value as provided in the state', () => {
  const state = ["10:00 AM", "12:00 PM", "2:00 PM"];
  const selectedDate = new Date(); // Provide a pre-selected date for testing
  const updatedState = updateTimes(selectedDate);
  expect(updatedState).toEqual(state);
});

test('Input fields have the correct attributes', () => {
  render(<BookingForm />);

  const dateInput = screen.getByLabelText("Date:");
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("name", "date");
  expect(dateInput).toBeRequired();

  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("placeholder", "1");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toBeRequired();

  const occasionSelect = screen.getByLabelText("Occasion");
  expect(occasionSelect).toHaveAttribute("id", "occasion");
  expect(occasionSelect).toBeRequired();
});

test('Date validation function works correctly', () => {
  // Test invalid state
  const invalidDate = "2020-05-18";
  render(<BookingForm />);
  const dateInput = screen.getByLabelText("Date:");

  fireEvent.change(dateInput, { target: { value: invalidDate } });

  const submitButton = screen.getByText("Make Your Reservation");
  expect(submitButton).toBeDisabled();

  // Test valid state
  const validDate = "2023-05-18";
  fireEvent.change(dateInput, { target: { value: validDate } });
  expect(submitButton).toBeEnabled();
});

test('Guests validation function works correctly', () => {
  // Test invalid state
  const invalidGuests = "0";
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(guestsInput, { target: { value: invalidGuests } });

  const submitButton = screen.getByText("Make Your Reservation");
  expect(submitButton).toBeDisabled();

  // Test valid state
  const validGuests = "5";
  fireEvent.change(guestsInput, { target: { value: validGuests } });
  expect(submitButton).toBeEnabled();
});