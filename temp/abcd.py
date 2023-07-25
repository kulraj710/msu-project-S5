import yfinance as yf

def abc():

    stock=input("enter the name of stock")
    msft = yf.download(stock,start="2023-07-24",end="2023-07-25")
# get stock info
    return (msft["Close"])
# get historical market data
#    hist = msft.history(period="5d")


a=abc()
print (a)



