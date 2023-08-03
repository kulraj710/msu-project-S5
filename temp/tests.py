import yfinance as yf
import pandas as pd
import spacy
import datetime as dt
import pandas_datareader as web
import mplfinance as mpf
import matplotlib.pyplot as plt

def test_yfinance_with_spacy():
    nlp = spacy.load("en_core_web_sm")
    doc = nlp("I love my friend raj")

    for token in doc:
        if token == "PERSON":
            print(token.text)
        else:
            print(token.text)


def get_closing_price(symbol):
    stock_data = yf.download(symbol, start="2023-07-25", end="2023-07-26")  # Replace with desired date range
    return stock_data['Close']

# Replace 'RELIANCE.NS' with the appropriate ticker symbol for Reliance on Yahoo Finance.
# closing_prices = get_closing_price('LT.NS')
# print(round(closing_prices[0], 2))


# tickers = pd.read_html('https://ournifty.com/stock-list-in-nse-fo-futures-and-options.html#:~:text=NSE%20F%26O%20Stock%20List%3A%20%20%20%20SL,%20%201000%20%2052%20more%20rows%20')[0]

# print(tickers.SYMBOL.to_list())


def test_date_inputs():
    start_string = input("Enter date in string : ")
    start_date = dt.datetime.strptime(start_string, "%d/%m/%Y")
    print(start_date)

# test_date_inputs()

def plot_chart():
    ticker = input("Choose a ticker symbol: ")
    # start_string = input("Choose a starting date (YYYY-): ")

    # start_date = dt.datetime.strptime(start_string, "%d/%m/%Y")
    # end_date = dt.datetime.now()
    stock_data = yf.download(ticker, period="3mo", interval="1d")  # Replace with desired date range
    # stock_data = web.DataReader(ticker, 'yahoo', start_date, end_date)
    return stock_data
    # Visual set up for the candlestick chart (from mplfinance)
    # plt.style.use('Solarize_Light2')
    # colors = mpf.make_marketcolors(up='#00ff00', down='#ff0000', volume='in', wick='inherit', edge='inherit')
    # Up = Green, Down = Red
    # mpf_style = mpf.make_mpf_style(base_mpf_style='mike', marketcolors=colors)
    # mpf.plot(stock_data, type='candle', style=mpf_style, volume=True)
    
# a = plot_chart()
# print(a)


from flask import Flask, jsonify, request
from flask_restful import Resource, Api

app = Flask(__name__)

api = Api(app)

class Chat(Resource):
    def get(self):
        stock_data = yf.download("LT.NS", period="3mo", interval="1d")
        return jsonify({"res" : stock_data.to_json(orient = "index")})

api.add_resource(Chat, '/chat')

if __name__ == '__main__':
    app.run(debug=True)
    