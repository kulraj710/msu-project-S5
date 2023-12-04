from main import GenericAssistant
# from neuralintents import GenericAssistant
import matplotlib.pyplot as plt
import pandas as pd
import pandas_datareader as web
import mplfinance as mpf
import yfinance as yf
import pickle
import sys
import datetime as dt

def plot_chart():
    ticker = input("Choose a ticker symbol: ")
    start_string = input("Choose a starting date (DD/MM/YYYY): ")

    start_date = dt.datetime.strptime(start_string, "%d%m%Y")
    end_date = dt.datetime.now()
    stock_data = web.DataReader(ticker, 'yahoo', start_date, end_date)
    
    # Visual set up for the candlestick chart (from mplfinance)
    plt.style.use('dark_background')
    colors = mpf.make_marketcolors(up='#00ff00', down='#ff0000', volume='in', wick='inherit', edge='inherit')
    # Up = Green, Down = Red
    mpf_style = mpf.make_mpf_style(base_mpf_style='mike', marketcolors=colors)
    mpf.plot(stock_data, type='candle', style=mpf_style, volume=True)
    
    
    
def plot_chart1():
    msft = yf.Ticker("Reliance.NS")
    
    return msft.news

def plot_chart2():
    msft = yf.Ticker("Reliance.NS")
    
    return msft.balance_sheet

a = plot_chart2()
print(a)


