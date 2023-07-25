import yfinance as yf

def get_ticker_symbol(stock_name):
    # Search for the stock on Yahoo Finance
    stock_data = yf.Ticker(stock_name)

    # Get the info about the stock, including the ticker symbol
    stock_info = stock_data.info
    ticker_symbol = stock_info['symbol']

    return ticker_symbol

# Replace 'Reliance' with the name of the stock you want to search for
stock_name = 'Reliance'
ticker_symbol = get_ticker_symbol(stock_name)
print(f"The ticker symbol for {stock_name} is: {ticker_symbol}")
