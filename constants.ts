import { ImageSourcePropType } from "react-native";

export interface PlansDataTypes {
  id: number;
  name: string;
  returnValue: string;
  image: ImageSourcePropType;
  gradientColours: string[];
}

export interface InvestGuidesDataTypes {
  id: number;
  title: string;
  subtext: string;
  image: ImageSourcePropType;
}

export interface HistoryDataTypes {
  id: number;
  rp: string;
  stockName: string;
  date: string;
}

const plansData: PlansDataTypes[] = [
  {
    id: 1,
    name: "Gold",
    returnValue: "30",
    image: require("./assets/images/gold.png"),
    gradientColours: ["#F0C735", "#D98F39"],
  },
  {
    id: 2,
    name: "Silver",
    returnValue: "60",
    image: require("./assets/images/silver.png"),
    gradientColours: ["#CAC9C9", "#979797"],
  },
  {
    id: 3,
    name: "Platinum",
    returnValue: "90",
    image: require("./assets/images/platinum.png"),
    gradientColours: ["#BA8DF3", "#615EE2"],
  },
];

const investGuidesData: InvestGuidesDataTypes[] = [
  {
    id: 1,
    title: "Basic type of investments",
    image: require("./assets/images/guide1.png"),
    subtext:
      "Prepare yourself for navigating the aftermath of the 2020 stock market recession and seize opportunities for future growth and financial stability.",
  },
  {
    id: 2,
    title: "Understanding Bonds and Fixed Income",
    image: require("./assets/images/guide2.png"),
    subtext:
      "Learn how bonds and fixed income securities can provide stable returns while balancing your investment portfolio. Explore various types of bonds, risks involved, and strategies to maximize your returns.",
  },
  {
    id: 3,
    title: "Diversifying with Real Estate Investments",
    image: require("./assets/images/guide3.jpg"),
    subtext:
      "Discover the benefits of diversifying your investment portfolio with real estate. From rental properties to real estate investment trusts (REITs), find out how to generate passive income and hedge against market volatility.",
  },
  {
    id: 4,
    title: "Navigating the World of Cryptocurrency",
    image: require("./assets/images/guide4.png"),
    subtext:
      "Delve into the world of cryptocurrency and blockchain technology. Understand the fundamentals of popular cryptocurrencies like Bitcoin and Ethereum, explore trading strategies, and learn how to securely store your digital assets.",
  },
  {
    id: 5,
    title: "Investing in Sustainable and Ethical Funds",
    image: require("./assets/images/guide5.jpg"),
    subtext:
      "Explore the growing trend of sustainable and ethical investing. Learn how to align your investment goals with your values by investing in companies that prioritize environmental, social, and governance (ESG) factors.",
  },
];

const historyData = [
  {
    id: 1,
    rp: "200.000",
    stockName: "APPL",
    date: "TUE 22 Jan 2023",
  },
  {
    id: 2,
    rp: "220.000",
    stockName: "GOOG",
    date: "FRI 02 Feb 2023",
  },
  {
    id: 3,
    rp: "180.000",
    stockName: "MSFT",
    date: "MON 12 Mar 2023",
  },
  {
    id: 4,
    rp: "250.000",
    stockName: "AMZN",
    date: "WED 25 Apr 2023",
  },
  {
    id: 5,
    rp: "190.000",
    stockName: "NFLX",
    date: "THU 17 May 2023",
  },
  {
    id: 6,
    rp: "205.000",
    stockName: "TSLA",
    date: "TUE 06 Jun 2023",
  },
  {
    id: 7,
    rp: "215.000",
    stockName: "FB",
    date: "FRI 28 Jul 2023",
  },
  {
    id: 8,
    rp: "230.000",
    stockName: "NVDA",
    date: "MON 21 Aug 2023",
  },
];

export default plansData;
export { investGuidesData, historyData };
