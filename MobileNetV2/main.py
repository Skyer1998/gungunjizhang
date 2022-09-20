import time

import cv2
import matplotlib.pyplot as plt
import numpy as np
import win32api
import win32con
from PIL import ImageGrab
def qiu():
    x=1
    while 1:
        jpg_file2="x.jpeg"
        width = win32api.GetSystemMetrics(win32con.SM_CXSCREEN)
        height = win32api.GetSystemMetrics(win32con.SM_CYSCREEN)
        img = ImageGrab.grab(bbox=(0, 0, width, height))
        img.save(jpg_file2)
        img = cv2.imread(jpg_file2)

        img = img[340:1400, 400:2150]
        # 在彩色图像的情况下，解码图像将以b g r顺序存储通道。
        grid_RGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        # 从RGB色彩空间转换到HSV色彩空间
        grid_HSV = cv2.cvtColor(grid_RGB, cv2.COLOR_RGB2HSV)

        # H、S、V范围一：
        lower1 = np.array([0, 43, 46])
        upper1 = np.array([10, 255, 255])
        mask1 = cv2.inRange(grid_HSV, lower1, upper1)  # mask1 为二值图像
        res1 = cv2.bitwise_and(grid_RGB, grid_RGB, mask=mask1)

        # H、S、V范围二：
        lower2 = np.array([156, 43, 46])
        upper2 = np.array([180, 255, 255])
        mask2 = cv2.inRange(grid_HSV, lower2, upper2)
        res2 = cv2.bitwise_and(grid_RGB, grid_RGB, mask=mask2)

        # 将两个二值图像结果 相加
        mask3 = mask1 + mask2
        xy = np.column_stack(np.where(mask3 == 255))

        # 在原图的红色数字上用 金黄色 描点填充。

        c=xy[0]
        # 注意颜色值是(b,g,r)，不是(r,g,b)
        # 坐标:c[1]是x,c[0]是y
        print("球的位置"+str(c))


def peple():

    img=cv2.imread("70.jpg")
    img = img[340:1400, 400:1300]
    img_hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lower_color = np.array([26, 43, 46])
    upper_color = np.array([34, 255, 255])
    mask = cv2.inRange(img_hsv, lower_color, upper_color)
    hls = cv2.cvtColor(img, cv2.COLOR_BGR2HLS)  # 转换到HLS空间
    lab = cv2.cvtColor(img, cv2.COLOR_BGR2Lab)  # 转换到Lab空间
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)  # 转换到GRAY空间（灰度图）

    cv2.imshow("mask", gray)
    cv2.waitKey(1000)






if __name__=='__main__':
    peple()







