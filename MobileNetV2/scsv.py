import csv;

import pymysql


def x(s):
        with open("a("+str(s)+").csv", mode="r", encoding="utf-8-sig") as f:
            curs=connect("xyk_list")
            cur=curs.cursor();
            sql="insert into shouyi (date,shouyi) values (%s, %s)"


            reader = csv.reader(f)
            header = next(reader)
            for row in reader:
                eval=(row[0],row[1])
                try:
                    cur.execute(sql,eval)
                    curs.commit()
                except:
                    pass

            curs.close()
def connect(db_name):
    con = pymysql.connect(host="123.56.45.218", port=3306, user="root", passwd="enjun123A@", db=db_name)
    return con

if __name__=='__main__':
    for i in range(3):
        x(i)