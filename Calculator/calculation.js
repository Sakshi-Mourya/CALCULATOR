window.calculator = function () {
    return {
        initialAmount: '',
        yearlyAmount: '',
        interestRate: '',
        years: '',

        profits: [],

        get totalInvested() {
            if (this.profits.length > 0) {
                return Intl.NumberFormat().format(+this.initialAmount + (this.yearlyAmount * this.years));
            }
            return 0;
        },

        get totalProfit() {
            if (this.profits.length > 0) {
                return Intl.NumberFormat().format(this.profits[this.profits.length - 1].yearProfit);
            }
            return 0;
        },

        get totalSavings() {
            if (this.profits.length > 0) {
                return Intl.NumberFormat().format(this.profits[this.profits.length - 1].yearSavings);
            }
            return 0;
        },

        calculation() {

            if (!this.initialAmount && !this.yearlyAmount && !this.interestRate && !this.years) {
                return;
            }

            this.profits = [];

            let date = new Date().getFullYear();
            let startDeposit = parseInt(this.initialAmount); // start deposit
            let totalDeposit = startDeposit;
            let yearlyDeposit = parseInt(this.yearlyAmount); // yearly deposit
            let interestRate = parseFloat(this.interestRate / 100).toFixed(2);
            let years = +this.years;

            for (let i = 0; i < years; i++) {
                startDeposit += yearlyDeposit;
                totalDeposit += yearlyDeposit;

                this.profits.push({
                    year: date + i,
                    yearProfit: (startDeposit - totalDeposit).toFixed(2),
                    yearSavings: startDeposit.toFixed(2),
                })

                startDeposit += startDeposit * interestRate;
            }
        },

    }
}