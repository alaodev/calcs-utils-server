const {
  parseISO,
  differenceInMilliseconds,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} = require('date-fns');

const calculateDiffBetweenDates = (
  initialDate, 
  finalDate
) => new Promise((resolve) => {
  setTimeout(() => {
    const parsedInitialDate = parseISO(initialDate);
    const parsedFinalDate = parseISO(finalDate);

    resolve({
      inMilliseconds: differenceInMilliseconds(parsedFinalDate, parsedInitialDate),
      inSeconds: differenceInSeconds(parsedFinalDate, parsedInitialDate),
      inMinutes: differenceInMinutes(parsedFinalDate, parsedInitialDate),
      inHours: differenceInHours(parsedFinalDate, parsedInitialDate),
      inDays: differenceInDays(parsedFinalDate, parsedInitialDate),
      inWeeks: differenceInWeeks(parsedFinalDate, parsedInitialDate),
      inMonths: differenceInMonths(parsedFinalDate, parsedInitialDate),
      inYears: differenceInYears(parsedFinalDate, parsedInitialDate),
    });
  }, 500)
});

module.exports = {
  calculateDiffBetweenDates,
}; 