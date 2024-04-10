window.addEventListener('load', refresh);
//CREATING POST OBJECTS
class Post {
    constructor(img, text, tags, i) {
        this.imageSrc = img;
        this.content = text;
        this.tags = tags;
        this.icons = i;
    }
}


var stocksArray = [new Post("media/feed/stock-investing-1.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions! Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few. Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                 In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` Stocks`, ` Amateur`, ` Investing`], [`<i class=" Stocks-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("media\\feed\\stock-2.jpg",
    `Wondering about IRAs? Let's break it down! IRAs are individual retirement accounts designed to help you save for retirement. The main players are traditional IRAs and Roth IRAs. Money added to Traditional IRAs are not taxed until they are cashed in, while Roth IRAs
     tax the initial investment and allow the holder to keep all of their profits. Choose what suits your financial game plan best!`,
    [` Stocks`, ` Investing`, ` Intermediate`], [`<i class=" Stocks-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("media\\feed\\stock-3.jpg",
    `Updating yourself with your investments’s earnings is key. Every public company posts its earnings every quarter, reporting the past year and sharing its future prospects. This allows the investor to learn more about the company's leadership and ability to grow. At the
     same time, it is important to be careful and wary of suspicious data . Although it is not common, and certainly not legal, to lie on these reports, companies, Enron being one of them, have lied in the past and caused many investors to lose their investments.`,
    [` Stocks`, ` Advanced`, ` Investing`], [`<i class=" Stocks-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("media\\feed\\stock-4.jpg",
    `Myth-Busters: The view on stocks <br> A common misconception is that the only way to make money off of stocks is to predict the market. This is not true! Owning a stock should be like owning part of that business and treated in that manner! Remember, 
    most stocks do well in the long term, and the economics of the stocks’ business is more important than making guesses.`,
    [` Stocks`, ` Intermediate`, ` Investing`], [`<i class=" Stocks-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("media\\feed\\stock-5.jpg",
    `Stock Exchange vs. Stock Index: What’s the Difference? <br> A stock index is a gauge to read the whole market; An exchange is the place where you buy and sell securities. Common stock indexes include the S&P 500 and the Dow Johnson Index. Popular stock exchanges
     include the New York Stock Exchange (NYSE) and the  Tokyo Stock Exchange (TSE)`,
    [` Stocks`, ` Amateur`, ` Investing`], [`<i class=" Stocks-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("media\\feed\\stock-6.jpg",
    `Tune in to learn about the 5 Steps to investing in Stocks:<br>
    <ol class="hanging">
      <li>Figure out what you're investing for - Is this a short term or long term investment? What is your strategy?</li>
      <li>Choose an account type that matches the purpose of your investment - Are you saving for retirement in a 401(k) or IRA or is this a brokerage account for personal goals?</li>
      <li>Open the account and put money in it - Which companies do you want to open the account through and how much money are you putting in?</li>
      <li>Pick and Buy Investments - Are you hiring a stock broker to help or are you doing your own research?</li>
      <li>Relax as you wait for your investments to gain value!!</li> </ol>`,
    [` Stocks`, ` Amateur`, ` Investing`], [`<i class=" Stocks-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Stocks-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`])

];




var realEstateArray = [new Post("media\\feed\\realEstate-1.jpg",
    `When considering real estate investments, it's important to conduct <strong> thorough research on the market trends</strong> and potential for growth in the area. Look for properties with <strong>potential for appreciation,</strong>
     such as those in up-and-coming neighborhoods or areas experiencing economic development. Consider the long-term potential of the investment and the potential for rental income. It's also important to have a solid understanding of the costs involved, 
     including maintenance, property taxes, and potential renovations. Additionally, consider <strong>diversifying your portfolio</strong> by investing in different types of properties. Finally, seek advice from experienced professionals in the industry to help guide your decisions. Happy investing!!`,
    [` Real-Estate`, ` Amateur`, ` Investing`], [`<i class=" Real-Estate-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("media\\feed\\realEstate-2.jpg",
    `There are several strategies for real estate investing, including rental properties, fix and flip, wholesaling, and real estate investment trusts (REITs). Rental properties involve purchasing and renting out properties for passive income. Fix and flip involves buying properties, 
    renovating them, and selling for a profit. Wholesaling involves finding properties at a discount and assigning the contract to another buyer. REITs are publicly traded companies that own and manage income-producing real estate. Each strategy has its own benefits and potential risks, 
    so it's important to thoroughly research and understand each before investing.`,
    [` Real-Estate`, ` Amateur`, ` Intermediate`], [`<i class=" Real-Estate-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("media\\feed\\realEstate-3.jpg",
    `Factors to consider when buying your next real estate investment:<br>
    <ol class="hanging">
      <li><strong>Get Pre-Approved for a Mortgage:</strong> In addition to potential interest rate advantages, pre-approval for a mortgage allows you to become a preferred buyer for the seller: you've shown you are able to follow through on your offer.</li>
      <li><strong>Look for a Catalyst:</strong>Developments of new infrastructure like a new park or highway can make properties desirable in the future. Knowing about new developments is key to buying valuable properties at cheaper prices.</li>
      <li><strong>Local School Quality:</strong> Buyers are often also parents, who want to raise their kids in a quality environment: one of the biggest factors for them is school quality, so it is important as an investor to keep this in mind before making investments.</li>
      <li><strong>Crime Rate:</strong>A property in an area with a high crime rate can be hard to resell or find a new tenant after a vacancy. Customers are unlikely to pay for a property that is potentially unsafe, which can result in great losses on investment.</li> </ol>`,
    [` Real-Estate`, ` Investing`, ` Intermediate`], [`<i class=" Real-Estate-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("media\\feed\\realEstate-4.jpg",
    `As your properties grow, it can get time and energy inefficient to manage all your properties by yourself. Instead, try hiring a property manager: start by researching local property management companies and interviewing potential candidates. Look for experience, qualifications, 
    and a strong track record. Check references and ensure they are familiar with local landlord-tenant laws. Remember, it is always better in the long term to pay more to have a great manager than cut corners and increase profit in the short term.`,
    [` Real-Estate`, ` Investing`, ` Intermediate`], [`<i class=" Real-Estate-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("media\\feed\\realEstate-5.jpg",
    `Market cycle theory is often applied to real estate to understand the trends and patterns in the housing market. This theory suggests that real estate markets go through phases of expansion, peak, contraction, and trough. By understanding these cycles, investors and 
    industry professionals can make informed decisions about buying, selling, and investing in real estate. It also helps in predicting market conditions and identifying opportunities for growth or risk mitigation. In addition, it can increase an investor's capital gains by significant amounts.`,
    [` Real-Estate`, ` Investing`, ` Intermediate`], [`<i class=" Real-Estate-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("media\\feed\\realEstate-6.jpeg",
    `Section 1031, also known as the Starker Loophole, is a way for investors to trade properties without having to directly pay capital gains taxes. The only asset that can be traded through this section is business or investment real estate, which does not include personal homes. In addition, 
    a ‘boot’, or additional non-real estate payment, included in the deal is also subject to certain taxes. Read more about the Section Here: <a href="https://www.investopedia.com/terms/s/section1031.asp" target="_blank"> https://www.investopedia.com/terms/s/section1031.asp</a>`,
    [` Real-Estate`, ` Advanced`, ` Investing`], [`<i class=" Real-Estate-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Real-Estate-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`])];






var businessArray = [new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` Small-Business`, ` Amateur`, ` Investing`], [`<i class=" Small-Business-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Small-Business-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Small-Business-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` Small-Business`, ` Investing`, ` Advanced`], [`<i class=" Small-Business-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Small-Business-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Small-Business-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` Small-Business`, ` Intermediate`, ` Investing`], [`<i class=" Small-Business-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Small-Business-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Small-Business-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`])];






var bondsArray = [new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` Bonds`, ` Amateur`, ` Investing`], [`<i class=" Bonds-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Bonds-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Bonds-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` Bonds`, ` Investing`, ` Advanced`], [`<i class=" Bonds-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Bonds-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Bonds-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` Bonds`, ` Intermediate`, ` Investing`], [`<i class=" Bonds-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Bonds-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Bonds-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`])];






var royaltiesArray = [new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` Royalties`, ` Amateur`, ` Investing`], [`<i class=" Royalties-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Royalties-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Royalties-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` Royalties`, ` Investing`, ` Advanced`], [`<i class=" Royalties-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Royalties-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Royalties-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` Royalties`, ` Intermediate`, ` Investing`], [`<i class=" Royalties-Counter Investing-Counter fa-solid fa-heart "></i>`, `<i class="Royalties-Counter Investing-Counter fa-solid fa-thumbs-up"></i>`, `<i class="Royalties-Counter Investing-Counter fa-solid fa-thumbs-down"></i>`])];






var generalArray = [new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` General`, ` Amateur`], [`<i class=" General-Counter fa-solid fa-heart "></i>`, `<i class="General-Counter fa-solid fa-thumbs-up"></i>`, `<i class="General-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` General`, ` Advanced`], [`<i class=" General-Counter fa-solid fa-heart "></i>`, `<i class="General-Counter fa-solid fa-thumbs-up"></i>`, `<i class="General-Counter fa-solid fa-thumbs-down"></i>`]),
new Post("https://smartasset.com/wp-content/uploads/sites/2/2023/09/trading-charts-and-data-on-digital-screen-tradingview.jpg_s1024x1024wisk20ctfajIaJEp21Bd6QD4V7KKG8HwgJMOHZa_I_prQKxJ7g.jpg",
    `Let's talk stocks and ratios today, a crucial aspect to making investment decisions!<br>Some common ratios in stocks include price - to - earnings(P / E) ratio, price - to - book(P / B) ratio, and
                debt - to - equity ratio, just to name a few.Each of these ratios provides valuable information about a company's financial health, and give a snapshot of the company's overall performance.
                  In a constantly changing market, having a good grasp of ratios is essential for any investor trying to identify undervalued or overvalued stocks, compare companies within the same industry, and make 
                informed decisions on when to buy or sell a stock...So next time you are researching a company, don't forget to take a look at its ratios!`,
    [` General`, ` Intermediate`], [`<i class=" General-Counter fa-solid fa-heart "></i>`, `<i class="General-Counter fa-solid fa-thumbs-up"></i>`, `<i class="General-Counter fa-solid fa-thumbs-down"></i>`])];


body = document.querySelector("#feed")
var tenPosts = [];
var feed = "";

var investing = 0;
var stocks = 0;
var realEstate = 0;
var business = 0;
var bonds = 0;
var royalties = 0;
var general = 0;
var heartCounter = 0;
var likeCounter = 0;
var dislikeCounter = 0;


function randomPosts() {
    var probS = stocks + 1;
    var probRE = realEstate + 1;
    var probBsn = business + 1;
    var probB = bonds + 1;
    var probRo = royalties + 1;
    var probGe = general + 1;

    for (var i = 0; i < probS; i++) {
        var j = Math.floor(Math.random() * stocksArray.length);
        tenPosts.push(stocksArray[j]);
    }
    for (var i = 0; i < probRE; i++) {
        var j = Math.floor(Math.random() * realEstateArray.length);
        tenPosts.push(realEstateArray[j]);
    }
    for (var i = 0; i < probBsn; i++) {
        var j = Math.floor(Math.random() * businessArray.length);
        tenPosts.push(businessArray[j]);
    }
    for (var i = 0; i < probB; i++) {
        var j = Math.floor(Math.random() * bondsArray.length);
        tenPosts.push(bondsArray[j]);
    }
    for (var i = 0; i < probRo; i++) {
        var j = Math.floor(Math.random() * royaltiesArray.length);
        tenPosts.push(royaltiesArray[j]);
    }
    for (var i = 0; i < probGe; i++) {
        var j = Math.floor(Math.random() * generalArray.length);
        tenPosts.push(generalArray[j]);
    }

    shuffleArray(tenPosts);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function refresh() {
    console.log("REFRESHED");
    investing = 0;
    stocks = 0;
    realEstate = 0;
    business = 0;
    bonds = 0;
    royalties = 0;
    general = 0;

    if (!(localStorage.getItem('feed') == null)) {
        var array = JSON.parse(localStorage.getItem('feed'));
        if (array.length >= 6) {
            stocks = array[0];
            realEstate = array[1];
            business = array[2];
            bonds = array[3];
            royalties = array[4];
            general = array[5]
            console.log(array);
        }
    }

    randomPosts();

    for (var i = 0; i < tenPosts.length; i++) {
        var feed = `<div class="post">
    <img
src = "`+ tenPosts[i].imageSrc + `" >

    <div class="text">
        <div class="preference">` +
            stringArray(tenPosts[i].icons, 1) +
            `</div>
        <p>` + tenPosts[i].content + `
                </p>
                <div class="tags">`+ stringArray(tenPosts[i].tags, 2) + `
                </div>
            </div></div>
    `;
        body.innerHTML += feed;
    }




    function stringArray(array, second) {
        if (second == 1) {
            var string = ``;
            for (var i = 0; i < array.length; i++) {
                string += array[i];
            }
            return string;
        } if (second == 2) {
            var string2 = ``;
            for (var i = 0; i < array.length; i++) {
                string2 += ` <div class="tag` + array[i] + `">` + array[i] + "</div>";
            }
            return string2;
        }
    }

    //HEARTS TOGGLES
    const hearts = document.querySelectorAll('.fa-heart');

    hearts.forEach(element => {
        element.addEventListener('click', function handleClick(event) {
            element.classList.toggle("selected");

            var addTopic = false;
            if (element.classList.contains("selected")) {
                heartCounter++;
                addTopic = true;
            } else {
                heartCounter--;
                addTopic = false;
            }
            if (element.classList.contains("Investing-Counter") && addTopic == true) {
                investing++;
            } else if (element.classList.contains("Investing-Counter") && addTopic == false) {
                investing--;
            }
            if (element.classList.contains("Stocks-Counter") && addTopic == true) {
                stocks++;
            } else if (element.classList.contains("Stocks-Counter") && addTopic == false) {
                stocks--;
            }
            if (element.classList.contains("Real-Estate-Counter") && addTopic == true) {
                realEstate++;
            } else if (element.classList.contains("Real-Estate-Counter") && addTopic == false) {
                realEstate--;
            }
            if (element.classList.contains("Small-Business-Counter") && addTopic == true) {
                business++;
            } else if (element.classList.contains("Small-Business-Counter") && addTopic == false) {
                business--;
            }
            if (element.classList.contains("Bonds-Counter") && addTopic == true) {
                bonds++;
            } else if (element.classList.contains("Bonds-Counter") && addTopic == false) {
                bonds--;
            }
            if (element.classList.contains("Royalties-Counter") && addTopic == true) {
                royalties++;
            } else if (element.classList.contains("Royalties-Counter") && addTopic == false) {
                royalties--;
            }
            if (element.classList.contains("General-Counter") && addTopic == true) {
                general++;
            } else if (element.classList.contains("General-Counter") && addTopic == false) {
                general--;
            }
            updateVariables();
        });
    });

    //LIKE TOGGLES
    const likes = document.querySelectorAll('.fa-thumbs-up');

    likes.forEach(element => {
        element.addEventListener('click', function handleClick(event) {
            element.classList.toggle("selected");

            var addTopic = false;
            if (element.classList.contains("selected")) {
                likeCounter++;
                addTopic = true;
            } else {
                likeCounter--;
                addTopic = false;
            }
            if (element.classList.contains("Investing-Counter") && addTopic == true) {
                investing++;
            } else if (element.classList.contains("Investing-Counter") && addTopic == false) {
                investing--;
            }
            if (element.classList.contains("Stocks-Counter") && addTopic == true) {
                stocks++;
            } else if (element.classList.contains("Stocks-Counter") && addTopic == false) {
                stocks--;
            }
            if (element.classList.contains("Real-Estate-Counter") && addTopic == true) {
                realEstate++;
            } else if (element.classList.contains("Real-Estate-Counter") && addTopic == false) {
                realEstate--;
            }
            if (element.classList.contains("Small-Business-Counter") && addTopic == true) {
                business++;
            } else if (element.classList.contains("Small-Business-Counter") && addTopic == false) {
                business--;
            }
            if (element.classList.contains("Bonds-Counter") && addTopic == true) {
                bonds++;
            } else if (element.classList.contains("Bonds-Counter") && addTopic == false) {
                bonds--;
            }
            if (element.classList.contains("Royalties-Counter") && addTopic == true) {
                royalties++;
            } else if (element.classList.contains("Royalties-Counter") && addTopic == false) {
                royalties--;
            }
            if (element.classList.contains("General-Counter") && addTopic == true) {
                general++;
            } else if (element.classList.contains("General-Counter") && addTopic == false) {
                general--;
            }
            updateVariables();
        });
    });

    //DISLIKE TOGGLES
    const dislikes = document.querySelectorAll('.fa-thumbs-down');

    dislikes.forEach(element => {
        element.addEventListener('click', function handleClick(event) {
            element.classList.toggle("selected");

            var addTopic = false;
            if (element.classList.contains("selected")) {
                dislikeCounter++;
                addTopic = false;
            } else {
                dislikeCounter--;
                addTopic = true;
            }
            if (element.classList.contains("Investing-Counter") && addTopic == true) {
                investing++;
            } else if (element.classList.contains("Investing-Counter") && addTopic == false) {
                investing--;
            }
            if (element.classList.contains("Stocks-Counter") && addTopic == true) {
                stocks++;
            } else if (element.classList.contains("Stocks-Counter") && addTopic == false) {
                stocks--;
            }
            if (element.classList.contains("Real-Estate-Counter") && addTopic == true) {
                realEstate++;
            } else if (element.classList.contains("Real-Estate-Counter") && addTopic == false) {
                realEstate--;
            }
            if (element.classList.contains("Small-Business-Counter") && addTopic == true) {
                business++;
            } else if (element.classList.contains("Small-Business-Counter") && addTopic == false) {
                business--;
            }
            if (element.classList.contains("Bonds-Counter") && addTopic == true) {
                bonds++;
            } else if (element.classList.contains("Bonds-Counter") && addTopic == false) {
                bonds--;
            }
            if (element.classList.contains("Royalties-Counter") && addTopic == true) {
                royalties++;
            } else if (element.classList.contains("Royalties-Counter") && addTopic == false) {
                royalties--;
            }
            if (element.classList.contains("General-Counter") && addTopic == true) {
                general++;
            } else if (element.classList.contains("General-Counter") && addTopic == false) {
                general--;
            }
            updateVariables();
        });
    });

    function updateVariables() {

        var array = [investing, stocks, realEstate, business, bonds, royalties, general];
        localStorage.setItem('feed', JSON.stringify(array));

        if (!(localStorage.getItem('userKey') == null)) {
            $.ajax({
                type: 'POST',
                url: 'php/feedUpdate.php',
                data:
                {
                    userID: localStorage.getItem('userKey'),
                    stock: array[1],
                    bond: array[2],
                    land: array[3],
                    store: array[4],
                    book: array[5],
                    other: array[6]
                },
            });
            /*var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                console.log(this.readyState) //should be 4
                console.log(this.status) //should be 200 OK
                console.log(this.responseText) //response return from request
            };
            var params = {
                userID: JSON.parse(localStorage.getItem('userKey'))
            }
            //var paramString = "userID=" + localStorage.getItem('userKey'); //+ "&stock=" + array[1] + "&bond=" + array[2] + "&land=" + array[3] + "&store=" + array[4] + "&book=" + array[5] + "&other=" + array[6];
            xhttp.open("POST", "http://localhost:80/hackathonProject/php/feedUpdate.php", false);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            //xhttp.send(paramString);
            xhttp.send(json.stringify(params));*/

        }

    }
}

refresh();
