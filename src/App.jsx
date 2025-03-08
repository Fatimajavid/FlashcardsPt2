import './App.css';
import { useState } from 'react';

const financeFlashcards = {
  "Personal Finance": [
    { question: "What is the 50/30/20 rule in budgeting?", answer: "The 50/30/20 rule divides your income into 50% for necessities, 30% for discretionary spending, and 20% for savings or debt repayment." },
    { question: "What is the difference between a checking account and a savings account?", answer: "A checking account is for daily transactions, while a savings account is for saving money with a higher interest rate." },
    { question: "What is a credit score, and how is it calculated?", answer: "A credit score is a numerical representation of your creditworthiness, calculated based on factors like payment history, credit utilization, and length of credit history." },
    { question: "What is the purpose of an emergency fund?", answer: "An emergency fund helps cover unexpected expenses like medical bills or car repairs, preventing debt accumulation." },
    { question: "What is compound interest, and how does it work?", answer: "Compound interest is interest calculated on both the initial principal and accumulated interest, allowing savings to grow faster." },
    { question: "What are the main types of insurance everyone should have?", answer: "Key insurances include health, auto, home or renters, and life insurance, all protecting against financial risks." },
    { question: "What is a 401(k), and how does it differ from an IRA?", answer: "A 401(k) is an employer-sponsored retirement plan, while an IRA is an individual retirement account with more flexible options." },
    { question: "What is a budget deficit?", answer: "A budget deficit occurs when expenses exceed income, requiring borrowing to cover the gap." },
    { question: "What is the difference between a credit card and a debit card?", answer: "A credit card allows borrowing from a lender, while a debit card uses your available bank funds." },
    { question: "What is a Roth IRA, and why might it be a good choice for retirement savings?", answer: "A Roth IRA allows tax-free growth and withdrawals, making it ideal for those expecting a higher tax bracket in retirement." }
  ],
  "Investment Strategies": [
    { question: "What is the difference between stocks and bonds?", answer: "Stocks represent ownership in a company, while bonds are loans made to a company or government in exchange for regular interest payments." },
    { question: "What is diversification, and why is it important in investing?", answer: "Diversification spreads investments across assets to reduce risk, ensuring not all investments lose value at once." },
    { question: "What is the purpose of a mutual fund?", answer: "A mutual fund pools money from multiple investors to invest in a diversified portfolio of assets." },
    { question: "What is an index fund, and how does it differ from an actively managed fund?", answer: "An index fund tracks a market index passively, while an actively managed fund aims to outperform the market." },
    { question: "What is risk tolerance, and why is it important for investors?", answer: "Risk tolerance refers to how much risk an investor is willing to take, influencing their investment strategy." },
    { question: "What is dollar-cost averaging?", answer: "Dollar-cost averaging is investing a fixed amount regularly, regardless of market conditions, to reduce the impact of volatility." },
    { question: "What is a P/E ratio, and how is it used to evaluate stocks?", answer: "The P/E ratio compares a company’s price to its earnings, helping assess whether a stock is over or undervalued." },
    { question: "What is the difference between growth stocks and value stocks?", answer: "Growth stocks are expected to grow quickly, while value stocks are undervalued and may offer higher dividends." },
    { question: "What is the importance of an asset allocation strategy?", answer: "Asset allocation divides investments across different asset types to balance risk and return according to financial goals." },
    { question: "What is the difference between a primary and a secondary market?", answer: "The primary market deals with new securities, while the secondary market involves buying and selling existing securities." }
  ],
  "Corporate Finance": [
    { question: "What is enterprise value (EV), and why is it important for business valuation?", answer: "Enterprise value is a company's total value, including market cap, debt, and cash, used for assessing worth." },
    { question: "What is the difference between operating income and net income?", answer: "Operating income is profit from core operations, while net income is the overall profit after all expenses." },
    { question: "What is the purpose of a balance sheet?", answer: "A balance sheet shows a company's financial position by listing assets, liabilities, and equity." },
    { question: "What is a leveraged buyout (LBO)?", answer: "An LBO is a company acquisition using a mix of debt and equity, with debt secured by the company’s assets." },
    { question: "What is the Modigliani-Miller theorem in corporate finance?", answer: "The Modigliani-Miller theorem states that a company's value is unaffected by its capital structure in perfect markets." },
    { question: "What is a capital expenditure (CapEx), and how does it differ from an operating expense (OpEx)?", answer: "CapEx is spending on long-term assets, while OpEx covers day-to-day business expenses." },
    { question: "What is the role of the CFO in a company?", answer: "The CFO manages financial activities, including reporting, planning, risk management, and ensuring capital for growth." },
    { question: "What is a discounted cash flow (DCF) analysis?", answer: "A DCF analysis estimates an investment's value based on its future cash flows, discounted to their present value." },
    { question: "What is the significance of the debt-to-equity ratio in corporate finance?", answer: "The debt-to-equity ratio measures a company’s financial leverage, with a higher ratio indicating more debt." },
    { question: "What is the significance of cash flow in a business?", answer: "Cash flow tracks the movement of money in and out of a company, essential for sustaining operations and growth." }
  ],
  "Financial Techniques": [
    { question: "What is arbitrage in the context of financial markets?", answer: "Arbitrage is the practice of exploiting price differences of the same asset in different markets to make a profit." },
    { question: "What is a forward contract?", answer: "A forward contract is a customized agreement between two parties to buy or sell an asset at a specified price on a future date. It’s used for hedging or speculation purposes." },
    { question: "What is a collateralized debt obligation (CDO)?", answer: "A collateralized debt obligation (CDO) is a complex financial product that pools together different types of debt (like mortgages or corporate loans) and slices them into tranches, which are sold to investors based on risk levels." },
    { question: "What is the Black-Scholes model?", answer: "The Black-Scholes model is a mathematical model used for pricing options. It calculates the theoretical price of options based on factors like the underlying asset’s price, volatility, time to expiration, and the risk-free interest rate." },
    { question: "What is the concept of market efficiency?", answer: "Market efficiency is the theory that asset prices fully reflect all available information at any given time. According to the Efficient Market Hypothesis (EMH), it’s impossible to consistently outperform the market through stock picking or market timing." },
    { question: "What is a swap in financial markets?", answer: "A swap is a derivative contract in which two parties exchange cash flows based on different financial variables, such as interest rates, currencies, or commodities. It’s often used for hedging or speculative purposes." },
    { question: "What is a hedge fund, and how does it operate?", answer: "A hedge fund is a pooled investment fund that uses advanced strategies (e.g., short selling, leverage, derivatives) to generate high returns for accredited investors. It’s less regulated than mutual funds and often involves more risk." },
    { question: "What is an options contract?", answer: "An options contract gives the holder the right (but not the obligation) to buy or sell an underlying asset at a specific price before a set date. It’s used for hedging or speculative purposes, offering flexibility and leverage." },
    { question: "What are treasury bills, and how do they differ from bonds?", answer: "Treasury bills (T-bills) are short-term government securities with maturities of one year or less, typically sold at a discount. Bonds have longer maturities and pay interest periodically. T-bills are considered safer due to the short duration and backing by the U.S. government." },
    { question: "What is a margin call in investing?", answer: "A margin call occurs when the value of an investor’s margin account falls below the required minimum, prompting the investor to deposit more funds or sell assets to cover the difference. It happens when the borrowed money used for purchasing investments is at risk of losing value." }
  ]
};

const App = () => {
  const [category, setCategory] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cards = category ? financeFlashcards[category] : [];

  const flipCard = () => setIsFlipped(!isFlipped);

  const showPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    setIsFlipped(false);
  };
  
  const showNextCard = () => {
    const nextIndex = Math.floor(Math.random() * cards.length);
    setCurrentCardIndex(nextIndex);
    setIsFlipped(false);
  };

  const goBackToCategories = () => {
    setCategory(null);
  };

  return (
    <div className="App">
      {category ? (
        <>
          <div className="flashcard-container">
            <h1>{category} Flashcards</h1>
            <div className="card" onClick={flipCard}>
              <h3>{isFlipped ? cards[currentCardIndex].answer : cards[currentCardIndex].question}</h3>
            </div>
            <div className="button-container">
              <button onClick={showPreviousCard} className="back-arrow">&#8592;</button>
              <button onClick={showNextCard} className="next-arrow">&#8594;</button>
            </div>
            <button className="back-to-categories" onClick={goBackToCategories}>Back to Categories</button>
          </div>
        </>
      ) : (
        <div className="category-container">
          <h1>Select a Category</h1>
          <div className="category-cards">
            {Object.keys(financeFlashcards).map((categoryName) => (
              <div
                key={categoryName}
                className="category-card"
                onClick={() => setCategory(categoryName)}
              >
                <h3>{categoryName}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
