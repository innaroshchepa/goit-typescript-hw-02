/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum dayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  
}

function isWeekend(day: dayOfWeek): boolean {
  return day === dayOfWeek.Saturday || day === dayOfWeek.Sunday;
}