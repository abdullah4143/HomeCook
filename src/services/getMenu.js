// src/services/getMenu.js

import menuData from '../data/menuData';

// Function to get today's menu based on the current day of the week
export const getMenuForToday = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = new Date().getDay(); // Returns an integer (0-6) representing the day of the week (Sunday - Saturday)

  const today = daysOfWeek[currentDay]; // Get the name of the current day (e.g., 'Monday')

  // Find the menu for today by matching the day
  const menuForToday = menuData.find(menu => menu.day === today);

  return menuForToday ? menuForToday.items : []; // Return the menu items for the current day or an empty array if no menu exists for today
};
