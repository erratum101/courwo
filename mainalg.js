function calculateInvestmentPortfolio(initialInvestment, monthlyInvestment, investmentPeriod, investmentGoal, importance) {

    let investmentGoalWeights = {
        "Пассивный доход": 0.3,
        "Сохранение сбережений": 0.3,
        "Пенсионные накопления": 0.4
    };

    let importanceWeights = {
        "Стабильность": 0.25,
        "Высокий доход": 0.25,
        "Баланс": 0.25,
        "Максимальная устойчивость": 0.25
    };

    let portfolioWeights = {
        "initialInvestment": initialInvestment / 1000000,
        "monthlyInvestment": monthlyInvestment / 10000,
        "investmentPeriod": investmentPeriod / 30,
        "investmentGoal": investmentGoalWeights[investmentGoal],
        "importance": importanceWeights[importance]
    };


    let totalWeight = 0;
    for (let key in portfolioWeights) {
        totalWeight += portfolioWeights[key];
    }

    let optimalInvestmentPortfolio = {};
    for (let key in portfolioWeights) {
        optimalInvestmentPortfolio[key] = portfolioWeights[key] / totalWeight;
    }

    return optimalInvestmentPortfolio;
}