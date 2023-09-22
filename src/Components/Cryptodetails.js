import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import { useGetCryptoDetailsQuery } from "./Resources/CryptoApi";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
const { Title, Text } = Typography;
const { Option } = Select;
const Cryptodetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  // const stats = [
  //   {
  //     title: "Price to USD",
  //     value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
  //     icon: <DollarCircleOutlined />,
  //   },
  //   { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
  //   {
  //     title: "24h Volume",
  //     value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
  //     icon: <ThunderboltOutlined />,
  //   },
  //   {
  //     title: "Market Cap",
  //     value: `$ ${
  //       cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
  //     }`,
  //     icon: <DollarCircleOutlined />,
  //   },
  //   {
  //     title: "All-time-high(daily avg.)",
  //     value: `$ ${
  //       cryptoDetails?.allTimeHigh?.price &&
  //       millify(cryptoDetails?.allTimeHigh?.price)
  //     }`,
  //     icon: <TrophyOutlined />,
  //   },
  // ];

  // const genericStats = [
  //   {
  //     title: "Number Of Markets",
  //     value: cryptoDetails?.numberOfMarkets,
  //     icon: <FundOutlined />,
  //   },
  //   {
  //     title: "Number Of Exchanges",
  //     value: cryptoDetails?.numberOfExchanges,
  //     icon: <MoneyCollectOutlined />,
  //   },
  //   {
  //     title: "Aprroved Supply",
  //     value: cryptoDetails?.supply?.confirmed ? (
  //       <CheckOutlined />
  //     ) : (
  //       <StopOutlined />
  //     ),
  //     icon: <ExclamationCircleOutlined />,
  //   },
  //   {
  //     title: "Total Supply",
  //     value: `$ ${
  //       cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
  //     }`,
  //     icon: <ExclamationCircleOutlined />,
  //   },
  //   {
  //     title: "Circulating Supply",
  //     value: `$ ${
  //       cryptoDetails?.supply?.circulating &&
  //       millify(cryptoDetails?.supply?.circulating)
  //     }`,
  //     icon: <ExclamationCircleOutlined />,
  //   },
  // ];
  return (
    <Col className="coin-detail-container">
      {cryptoDetails && (
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name">
            {cryptoDetails.name}({cryptoDetails.slug} Price )
          </Title>
          <p>
            {cryptoDetails.name} live price in US dollars. view value statistics
            ,market cap and supply.
          </p>
        </Col>
      )}
      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="select Time Period"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
    </Col>
  );
};

export default Cryptodetails;