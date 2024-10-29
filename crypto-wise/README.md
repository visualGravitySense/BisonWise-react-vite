# Crypto Tracker

Crypto Tracker - это веб-приложение для отображения актуальной информации о криптовалютах, созданное с использованием React, Vite и CoinPaprika API. Приложение позволяет просматривать список криптовалют с информацией о названии, символе и ранге, и использует `Context API` для управления состоянием.

## Основные функции

- **Получение данных о криптовалютах**: Данные загружаются с помощью CoinPaprika API, предоставляющего информацию по различным криптовалютам.
- **Отображение списка криптовалют**: Список криптовалют, включающий название, символ и ранг каждой монеты.
- **Управление состоянием с помощью Context API**: Общее состояние приложения управляется через `CryptoContext`, что позволяет легко передавать данные между компонентами.
- **Стилизация с использованием React Bootstrap**: Используется Bootstrap для оформления интерфейса и адаптивного дизайна.

## Стек технологий

- **React** с использованием **Vite**: для быстрой разработки и рендера компонентов.
- **React Context API**: для управления состоянием и передачи данных по приложению.
- **CoinPaprika API**: для получения данных о криптовалютах.
- **React Bootstrap**: для стилизации интерфейса.


---

### Project Setup
1. **Initialize the Project**:
   - Start a new React project using Vite:
     ```bash
     npm create vite@latest crypto-dashboard --template react
     ```
   - Install dependencies for Bootstrap and other libraries (e.g., Axios for API calls, Chart.js or Recharts for visualizations).
     ```bash
     npm install react-bootstrap bootstrap axios recharts
     ```

2. **Set Up Basic Structure**:
   - Create a folder structure for components, context, services, and styles:
     ```
     src/
     ├── components/
     │   ├── Header.js
     │   ├── Sidebar.js
     │   ├── PriceAlerts.js
     │   ├── Exchanges.js
     │   ├── MarketCap.js
     │   ├── CryptoOverview.js
     │   └── ...
     ├── context/
     │   └── CryptoContext.js
     ├── services/
     │   └── coinpaprika.js
     └── styles/
         └── custom.css
     ```

### Step 1: Set Up API Integration with CoinPaprika
Create a service file (`coinpaprika.js`) to handle API requests to CoinPaprika. For example:

```javascript
import axios from 'axios';

const API_URL = 'https://api.coinpaprika.com/v1';

export const getCoinData = async (coinId) => {
  const response = await axios.get(`${API_URL}/coins/${coinId}`);
  return response.data;
};

export const getMarketData = async () => {
  const response = await axios.get(`${API_URL}/global`);
  return response.data;
};

// Add additional functions for other endpoints as needed
```

### Step 2: Set Up Global State with Context
Create a `CryptoContext.js` file to store data globally (e.g., market data, selected cryptocurrency, alerts):

```javascript
import React, { createContext, useState, useEffect } from 'react';
import { getMarketData } from '../services/coinpaprika';

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getMarketData();
      setMarketData(data);
    }
    fetchData();
  }, []);

  return (
    <CryptoContext.Provider value={{ marketData }}>
      {children}
    </CryptoContext.Provider>
  );
};
```

### Step 3: Create Components Based on the Design
Based on the design, each section should be developed as a component.

1. **Header**: Display global market data and links to other sections.
2. **Price Alerts**: Form for users to set up alerts based on their preferred prices.
3. **Exchanges**: List of top exchanges by volume.
4. **Market Cap & Volume**: Use charts to display market cap and volume data.
5. **Crypto Overview**: Include components to display detailed stats for Bitcoin or selected currencies, such as market cap, price, all-time high, and historical data.

#### Example Component: Market Cap
```javascript
import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import { PieChart, Pie, Tooltip } from 'recharts';

const MarketCap = () => {
  const { marketData } = useContext(CryptoContext);

  const data = [
    { name: 'BTC', value: marketData?.btc_dominance },
    { name: 'ETH', value: marketData?.eth_dominance },
    // Add other cryptocurrencies based on API data
  ];

  return (
    <div className="market-cap">
      <h4>Market Cap Dominance</h4>
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" nameKey="name" fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default MarketCap;
```

### Step 4: Add Charts for Data Visualization
For the **Bitcoin Price Chart**, **Top Exchanges**, and **Volume Change**, use libraries like **Recharts** or **Chart.js**.

- **Bitcoin Price Chart**: Line chart to display the price trend over time.
- **Volume Chart**: Area chart to show volume changes.
- **Dominance & Market Cap Charts**: Pie or bar charts to visualize market dominance by currency.

#### Example: Bitcoin Price Chart
```javascript
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { getCoinData } from '../services/coinpaprika';

const BitcoinPriceChart = () => {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    async function fetchPriceData() {
      const data = await getCoinData('btc-bitcoin'); // Example coin ID for Bitcoin
      setPriceData(data);
    }
    fetchPriceData();
  }, []);

  return (
    <LineChart width={600} height={300} data={priceData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
};

export default BitcoinPriceChart;
```

### Step 5: Styling with Bootstrap and Custom CSS
Use **React Bootstrap** for layout and UI components to maintain consistency with the design, such as cards, buttons, and forms. Customize the theme if needed by overriding Bootstrap variables or adding custom styles in `custom.css`.

### Step 6: Layout and Routing
Use `react-router-dom` for navigating between sections, such as:

- **Home**: Overview of global crypto data.
- **Exchanges**: Detailed info on exchanges.
- **Alerts**: Price alert setup page.

```javascript
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Exchanges from './components/Exchanges';
import Alerts from './components/Alerts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

### Additional Notes
- **Responsive Design**: Make sure each component is responsive for both desktop and mobile.
- **State Management**: Consider more advanced state management if the app grows (e.g., `useReducer` or Redux).
- **Error Handling**: Handle API errors gracefully with loading states or error messages.
