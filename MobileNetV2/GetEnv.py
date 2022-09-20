import time

import cv2
import numpy as np
import win32api
import win32con
from PIL import ImageGrab
from pyglet import image


class GetEnv:
  def __init__(self):
    self.jpg_file2 = 'test.jpg'
  def screen_pic(self, promgram_name, jpg_file, jpg_file2):
    pass
  def reset(self):
   #截屏
   width = win32api.GetSystemMetrics(win32con.SM_CXSCREEN)
   height = win32api.GetSystemMetrics(win32con.SM_CYSCREEN)
   img = ImageGrab.grab(bbox=(0, 0, width, height))
   img.save(self.jpg_file2)
   image_gray = self.get_gray_image(self.jpg_file2)
   print(type(image_gray))
   return image_gray
  def get_gray_image(self, jpg_file2):
    im = cv2.imread(jpg_file2, cv2.IMREAD_GRAYSCALE)
    im = np.expand_dims(cv2.resize(im, (120, 200)) / 255.0, -1)
    im = np.float32(np.expand_dims(im, 0))
    return im

  def find_start_btn(self, screen_shot_im, find_shot_im):
      """
      找到开始游戏位置的图标
      """

      screen_shot_im = cv2.imread(screen_shot_im, cv2.IMREAD_GRAYSCALE)
      find_shot_im = cv2.imread(find_shot_im, cv2.IMREAD_GRAYSCALE)
      result = cv2.matchTemplate(screen_shot_im,
                                 find_shot_im,
                                 cv2.TM_CCOEFF_NORMED)
      if result.max() > 0.8:
          y, x = np.unravel_index(result.argmax(), result.shape)
          y += find_shot_im.shape[0] // 2
          x += find_shot_im.shape[1] // 2
          return x, y
      else:
          return -1, -1
  def findblall(self):
      self.find_start_btn()



if __name__ == '__main__':
   for i in range(100):
       env = GetEnv()
       x = env.find_start_btn("jietu.png", "ball.png")
       print(x)














