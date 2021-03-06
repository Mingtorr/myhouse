
import pandas as pd


file_name = './2020년기준_2019년_성연령별인구.csv'
df = pd.read_csv(file_name)[['tot_oa_cd',	'4세이하_남자', '5세이상~9세이하_남자', '10세이상~14세이하_남자', '15세이상~19세이하_남자', '20세이상~24세이하_남자', '25세이상~29세이하_남자', '30세이상~34세이하_남자', '35세이상~39세이하_남자', '40세이상~44세이하_남자', '45세이상~49세이하_남자',
                             '50세이상~54세이하_남자', '55세이상~59세이하_남자', '60세이상~64세이하_남자', '65세이상~69세이하_남자', '70세이상~74세이하_남자', '75세이상~79세이하_남자', '80세이상~84세이하_남자', '85세이상~89세이하_남자', '90세이상~94세이하_남자', '95세이상~99세이하_남자', '100세이상_남자', '4세이하_여자', '5세이상~9세이하_여자', '10세이상~14세이하_여자', '15세이상~19세이하_여자', '20세이상~24세이하_여자', '25세이상~29세이하_여자', '30세이상~34세이하_여자', '35세이상~39세이하_여자', '40세이상~44세이하_여자', '45세이상~49세이하_여자',
                             '50세이상~54세이하_여자', '55세이상~59세이하_여자', '60세이상~64세이하_여자', '65세이상~69세이하_여자', '70세이상~74세이하_여자', '75세이상~79세이하_여자', '80세이상~84세이하_여자', '85세이상~89세이하_여자', '90세이상~94세이하_여자', '95세이상~99세이하_여자', '100세이상_여자',	'시도명칭',	'시군구명칭',	'읍면동명칭', '총인구']]

df = df.fillna(0)
man = df['4세이하_남자']+df['5세이상~9세이하_남자']+df['10세이상~14세이하_남자']+df['15세이상~19세이하_남자']+df['20세이상~24세이하_남자']+df['25세이상~29세이하_남자']+df['30세이상~34세이하_남자']+df['35세이상~39세이하_남자']+df['40세이상~44세이하_남자']+df['45세이상~49세이하_남자'] + \
    df['50세이상~54세이하_남자']+df['55세이상~59세이하_남자']+df['60세이상~64세이하_남자']+df['65세이상~69세이하_남자']+df['70세이상~74세이하_남자']+df['75세이상~79세이하_남자'] + \
    df['80세이상~84세이하_남자']+df['85세이상~89세이하_남자']+df['90세이상~94세이하_남자']+df['95세이상~99세이하_남자']+df['100세이상_남자']

woman = df['4세이하_여자']+df['5세이상~9세이하_여자']+df['10세이상~14세이하_여자']+df['15세이상~19세이하_여자']+df['20세이상~24세이하_여자']+df['25세이상~29세이하_여자']+df['30세이상~34세이하_여자']+df['35세이상~39세이하_여자']+df['40세이상~44세이하_여자']+df['45세이상~49세이하_여자'] + \
    df['50세이상~54세이하_여자']+df['55세이상~59세이하_여자']+df['60세이상~64세이하_여자']+df['65세이상~69세이하_여자']+df['70세이상~74세이하_여자']+df['75세이상~79세이하_여자'] + \
    df['80세이상~84세이하_여자']+df['85세이상~89세이하_여자']+df['90세이상~94세이하_여자']+df['95세이상~99세이하_여자']+df['100세이상_여자']
try:
    result1 = (man / woman)*100
except ZeroDivisionError:
    result1 = 0
print(result1)
result2 = pd.DataFrame({'tot_oa_cd': df['tot_oa_cd'], '시도명칭': df['시도명칭'],	'시군구명칭': df['시군구명칭'],	'읍면동명칭': df['읍면동명칭'], 'total': df['총인구'], '남자': man, '여자': woman, '성비': result1})

df_s = result2.sort_values(by=["성비", 'total'],  ascending=[False, False])
df_s = df_s.reset_index(drop=True)
# print(df_s)
result_path = './남녀성비.csv'
df_s.to_csv(result_path, encoding='utf-8-sig')
print("작업완료")






