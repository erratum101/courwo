import requests
import datetime
import apimoex
import pandas as pd

board = 'TQBR'
current_time = datetime.datetime.now().time()

yesterday = datetime.date.today() - datetime.timedelta(days=1)

with open("./TICK.txt", "r") as TICKs:
    TICKs = [line.rstrip() for line in TICKs]

output_file = open("./tickers_data.txt".format(board), "w")
process = 0

with requests.session() as session:
    for TICK in TICKs:
        process += 1
        print((process / len(TICKs)) * 100, ' %')
        data = apimoex.get_board_history(session, TICK, board=board, start=yesterday, end=yesterday)
        df = pd.DataFrame(data)
        df = df[['TRADEDATE', 'CLOSE']]
        for index, row in df.iterrows():
            ticker_data = "{}, {}\n".format(TICK, row['CLOSE']) 
            output_file.write(ticker_data)


output_file.close()
