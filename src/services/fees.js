const convertYearToMonthRate = (ratePerYear) => (
  (((1 + ratePerYear / 100) ** (1 / 12)) - 1) * 100
);

const calculateSimpleFees = (
  initialValue,
  interestRate,
  period,
  interestRateGranularity,
  periodInGranularity,
) => new Promise((resolve) => {
  setTimeout(() => {
    const interestRateInMonths = interestRateGranularity === 'years' ? interestRate / 12 : interestRate;
    const periodGranularityInMonths = periodInGranularity === 'years' ? period * 12 : period;
    const feesByMonth = initialValue * (interestRateInMonths / 100);
    const fees = feesByMonth * periodGranularityInMonths;
    const total = initialValue + fees;
    const feesInfos = [];

    for (let i = 0; i < periodGranularityInMonths + 1; i += 1) {
      feesInfos.push({
        month: i,
        feesByMonth,
        invested: initialValue,
        accumulatedFees: feesByMonth * i,
        accumalatedValue: initialValue + feesByMonth * i,
      });
    }

    resolve({
      fees, invested: initialValue, total, feesInfos,
    });
  }, 500);
});

const calculateCompoundFees = (
  initialValue,
  monthlyValue,
  interestRate,
  period,
  interestRateGranularity,
  periodInGranularity,
) => new Promise((resolve) => {
  setTimeout(() => {
    const interestRateInMonths = interestRateGranularity === 'years' ? convertYearToMonthRate(interestRate) : interestRate;
    const periodGranularityInMonths = periodInGranularity === 'years' ? period * 12 : period;
    const feesInfos = [];

    let feesByMonth = initialValue * (interestRateInMonths / 100);
    let compoundValue = initialValue;
    let invested = initialValue;

    for (let i = 0; i < periodGranularityInMonths + 1; i += 1) {
      feesInfos.push({
        month: i,
        feesByMonth,
        invested,
        accumulatedFees: compoundValue - invested,
        accumalatedValue: compoundValue,
      });
      compoundValue += monthlyValue + feesByMonth;
      invested += monthlyValue;
      feesByMonth = compoundValue * (interestRateInMonths / 100);
    }

    resolve({
      fees: feesInfos[feesInfos.length - 1].accumulatedFees,
      invested: feesInfos[feesInfos.length - 1].invested,
      total: feesInfos[feesInfos.length - 1].accumalatedValue,
      feesInfos,
    });
  }, 500);
});

module.exports = {
  calculateSimpleFees,
  calculateCompoundFees,
}