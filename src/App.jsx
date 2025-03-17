import './App.css';
import { useState } from 'react';

const financeFlashcards = {
  "Fundamentals of Finance": [
    { question: "What does it mean when someone says 'pay yourself first' in personal finance?", answer: "It refers to saving or investing a portion of your income before paying for other expenses.", hint: "Focus on saving before spending!" },
    { question: "How does a financial statement help a business assess its health?", answer: "It provides an overview of assets, liabilities, and equity, showing how well the business can meet obligations and generate value.", hint: "Think about the company's financial health." },
    { question: "What is the significance of understanding interest rates when taking on a loan?", answer: "It determines how much extra you will pay on top of the borrowed amount over time.", hint: "Interest rates are the additional cost of borrowing money." },
    { question: "What is the role of tracking cash flow?", answer: "It helps ensure that you have enough money to cover expenses and manage the flow of money in and out.", hint: "It’s about knowing where your money is going." },
    { question: "What does financial leverage mean?", answer: "It involves using borrowed funds to potentially increase returns, though it also increases risk.", hint: "Borrowing money to invest and earn more." },
    { question: "What happens if a company's liabilities exceed its assets?", answer: "The company is considered insolvent, unable to cover its obligations with its available resources.", hint: "Think of a company that owes more than it owns." },
    { question: "How can you determine if you're spending within your means?", answer: "By keeping track of income and expenses and ensuring that monthly spending does not exceed earnings.", hint: "Don’t spend more than you make!" },
    { question: "Why is having an emergency fund important?", answer: "It acts as a buffer against unexpected expenses, preventing you from relying on loans or credit cards.", hint: "It’s for when life throws a curveball." },
    { question: "How does the time value of money affect long-term savings?", answer: "Money invested today will grow due to interest or returns, meaning its value increases over time.", hint: "Time makes money grow!" },
    { question: "What is depreciation in accounting?", answer: "It represents the gradual reduction in value of an asset over time, often reducing taxable income.", hint: "Think of your car losing value over time." }
  ],
  "Investing Basics": [
    { question: "How can you minimize risk in a portfolio?", answer: "By diversifying investments across different assets, industries, and regions.", hint: "Spread out your investments to avoid putting all your eggs in one basket." },
    { question: "Why might someone choose to invest in bonds instead of stocks?", answer: "Bonds typically offer more stability with lower risk, making them suitable for conservative investors.", hint: "Bonds are more predictable, stocks can be volatile." },
    { question: "What is a 'buy and hold' investment strategy?", answer: "It involves purchasing securities and holding them for the long term, regardless of market fluctuations.", hint: "Think long-term, ignoring short-term ups and downs." },
    { question: "What is the purpose of dividends in stock investing?", answer: "They provide income to shareholders, often paid out from the company's profits.", hint: "Dividends are like rewards for holding stocks." },
    { question: "What does it mean for an investment to be illiquid?", answer: "It means the asset cannot easily be converted into cash or sold without potentially losing value.", hint: "Some assets are harder to sell quickly." },
    { question: "How does diversification help protect a portfolio?", answer: "It reduces risk by spreading investments across various assets so that a downturn in one sector doesn’t drastically affect the entire portfolio.", hint: "Don't put all your money in one type of asset." },
    { question: "What’s the difference between actively managed and passively managed funds?", answer: "Actively managed funds aim to outperform the market, while passive funds track an index without trying to beat the market.", hint: "Active = trying to beat the market, Passive = following the market." },
    { question: "What are the benefits of investing in real estate?", answer: "Real estate can appreciate in value over time and provide rental income, along with possible tax benefits.", hint: "Real estate grows in value and can provide consistent income." },
    { question: "Why use dollar-cost averaging as an investment strategy?", answer: "It involves investing a fixed amount regularly, which helps reduce the impact of market volatility.", hint: "Consistent investments over time smooth out market ups and downs." },
    { question: "How is the price-to-earnings (P/E) ratio useful in evaluating stocks?", answer: "It helps investors assess whether a stock is under or over-valued by comparing its market price to earnings.", hint: "P/E ratio tells you how much you're paying for each dollar of earnings." }
  ],
  "Personal Financial Management": [
    { question: "What is the 50/30/20 rule in budgeting?", answer: "The 50/30/20 rule divides your income into 50% for necessities, 30% for discretionary spending, and 20% for savings or debt repayment.", hint: "50% needs, 30% wants, 20% savings." },
    { question: "What is the difference between a checking account and a savings account?", answer: "A checking account is for daily transactions, while a savings account is for saving money with a higher interest rate.", hint: "Checking = spending, savings = saving." },
    { question: "What is a credit score, and how is it calculated?", answer: "A credit score is a numerical representation of your creditworthiness, calculated based on factors like payment history, credit utilization, and length of credit history.", hint: "Your credit score shows how well you manage debt." },
    { question: "What is the purpose of an emergency fund?", answer: "An emergency fund helps cover unexpected expenses like medical bills or car repairs, preventing debt accumulation.", hint: "It’s a financial safety net." },
    { question: "What is compound interest, and how does it work?", answer: "Compound interest is interest calculated on both the initial principal and accumulated interest, allowing savings to grow faster.", hint: "Your interest earns interest!" },
    { question: "What are the main types of insurance everyone should have?", answer: "Key insurances include health, auto, home or renters, and life insurance, all protecting against financial risks.", hint: "Insurance is about protecting yourself from unexpected costs." },
    { question: "What is a 401(k), and how does it differ from an IRA?", answer: "A 401(k) is an employer-sponsored retirement plan, while an IRA is an individual retirement account with more flexible options.", hint: "401(k) = employer-sponsored, IRA = individual." },
    { question: "What is a budget deficit?", answer: "A budget deficit occurs when expenses exceed income, requiring borrowing to cover the gap.", hint: "A deficit means you're spending more than you make." },
    { question: "What is the difference between a credit card and a debit card?", answer: "A credit card allows borrowing from a lender, while a debit card uses your available bank funds.", hint: "Credit = borrowing, debit = spending your own money." },
    { question: "What is a Roth IRA, and why might it be a good choice for retirement savings?", answer: "A Roth IRA allows tax-free growth and withdrawals, making it ideal for those expecting a higher tax bracket in retirement.", hint: "Roth IRA = tax-free growth." }
  ],
  "Corporate Finance": [
    { question: "What is enterprise value (EV), and why is it important for business valuation?", answer: "Enterprise value is a company's total value, including market cap, debt, and cash, used for assessing worth.", hint: "EV gives a more complete picture of a company’s value." },
    { question: "What is the difference between operating income and net income?", answer: "Operating income is profit from core operations, while net income is the overall profit after all expenses.", hint: "Operating income = core business profit, net income = total profit." },
    { question: "What is the purpose of a balance sheet?", answer: "A balance sheet shows a company's financial position by listing assets, liabilities, and equity.", hint: "It’s like a snapshot of the company’s financial health." },
    { question: "What is a leveraged buyout (LBO)?", answer: "An LBO is a company acquisition using a mix of debt and equity, with debt secured by the company’s assets.", hint: "Debt is used to buy the company." },
    { question: "What is the Modigliani-Miller theorem in corporate finance?", answer: "The Modigliani-Miller theorem states that a company's value is unaffected by its capital structure in perfect markets.", hint: "In perfect markets, debt doesn’t affect company value." },
    { question: "What is a capital expenditure (CapEx), and how does it differ from an operating expense (OpEx)?", answer: "CapEx is spending on long-term assets, while OpEx covers day-to-day business expenses.", hint: "CapEx = long-term investments, OpEx = day-to-day expenses." },
    { question: "What is the role of the CFO in a company?", answer: "The CFO manages financial activities, including reporting, planning, risk management, and ensuring capital for growth.", hint: "The CFO is in charge of the company’s finances." },
    { question: "What is a discounted cash flow (DCF) analysis?", answer: "A DCF analysis estimates an investment's value based on its future cash flows, discounted to their present value.", hint: "DCF values future cash flows today." },
    { question: "What is the significance of the debt-to-equity ratio in corporate finance?", answer: "The debt-to-equity ratio measures a company’s financial leverage, with a higher ratio indicating more debt.", hint: "More debt compared to equity means more financial risk." },
    { question: "What is the significance of cash flow in a business?", answer: "Cash flow tracks the movement of money in and out of a company, essential for sustaining operations and growth.", hint: "Cash flow keeps the business running smoothly." }
  ]
};

const App = () => {
  const [category, setCategory] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [correctStreak, setCorrectStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState(new Set());
  const [showAnswer, setShowAnswer] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false); // Track if user has attempted an answer

  const cards = category ? financeFlashcards[category].filter((_, index) => !masteredCards.has(index)) : [];

  // Flip the card after pressing the "Show Answer" button
  const toggleAnswer = () => {
    setIsFlipped(true); // Flip the card
    setShowAnswer(true); // Show the answer after the flip
  };

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsFlipped(false); // Reset card flip state for next card
    setFeedback("");
    setUserAnswer("");
    setShowAnswer(false); // Hide answer for next card
    setHasAnswered(false); // Reset the answer state
  };

  const showPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setIsFlipped(false); // Reset card flip state for previous card
    setFeedback("");
    setUserAnswer("");
    setShowAnswer(false); // Hide answer for previous card
    setHasAnswered(false); // Reset the answer state
  };

  const checkAnswer = () => {
    const correctAnswer = cards[currentCardIndex].answer.toLowerCase().trim();
    const userInput = userAnswer.toLowerCase().trim();

    if (userInput === correctAnswer) {
      setFeedback("✅ Correct!");
      setCorrectStreak((streak) => streak + 1);
    } else {
      setFeedback(`❌ Incorrect. Hint: ${cards[currentCardIndex].hint || "Try focusing on the main idea!"}`);
      setCorrectStreak(0);
    }
    setHasAnswered(true); // Mark that the user has answered
  };

  const markAsMastered = () => {
    setMasteredCards(new Set([...masteredCards, currentCardIndex]));
    setFeedback("🎉 You've mastered this card! Well done!");
    showNextCard();
  };

  const shuffleCards = () => {
    financeFlashcards[category] = financeFlashcards[category].sort(() => Math.random() - 0.5);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const goBackToCategories = () => {
    setCategory(null);
    setCorrectStreak(0);
    setMasteredCards(new Set());
  };

  return (
    <div className="App">
      {category ? (
        <>
          <div className="flashcard-container">
          <h1>{category} Flashcards</h1>
            <h3>Streak: {correctStreak} 🔥</h3>
            <div className="card">
              <h3>{isFlipped ? cards[currentCardIndex]?.answer : cards[currentCardIndex]?.question}</h3>
            </div>
            <div className="input-container">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer..."
              />
              <button className="textbutton submit-button" onClick={checkAnswer}>Submit</button>
            </div>
            {hasAnswered && (
              <button className="textbutton" onClick={toggleAnswer}>Show Answer</button>
            )}
            <p>{feedback}</p>
            <div className="button-container">
              <button onClick={showPreviousCard} className="back-arrow">⬅</button>
              <button onClick={showNextCard} className="next-arrow">➡</button>
            </div>
            <div className="action-buttons-container">
              <button className="textbutton" onClick={markAsMastered}>Mark as Mastered ✅</button>
              <button className="textbutton" onClick={shuffleCards}>Shuffle 🔀</button>
            </div>
            <button className="textbutton" onClick={goBackToCategories}>Back to Categories</button>
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