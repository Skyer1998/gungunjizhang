package cn.gaotie8.demo.Dao;



public class Test {
    public static void sort(Comparable[] arr) {
        int j;
        for (int gap = arr.length / 2; gap >  0; gap /= 2) {
            for (int i = gap; i < arr.length; i++) {
                Comparable tmp = arr[i];
                for (j = i; j >= gap && tmp.compareTo(arr[j - gap]) < 0; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                arr[j] = tmp;
            }
        }
    }
    public static void mss(String[] args) {
        Comparable[] arr ={32,58,36,20,1,9,6,3,5,8,4,12,99};
        sort(arr);
        for (int i = 0; i < arr.length; i++) {
            Comparable comparable = arr[i];
        }


    }

    public static void main(String[] args) {


    }



};


