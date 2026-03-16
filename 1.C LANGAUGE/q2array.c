#include<stdio.h>

int main(){
    
    int row=3;
    int col=3;
    int a[row][col];
    int max;
  
    
    printf(" Enter the row size:- ");
    scanf("%d", &row);
     printf(" Enter the col size:- ");
    scanf("%d", &col);
    
    printf(" Enter the array element \n");
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
        printf(" a[%d][%d] = ", i,j);
        scanf("%d", &a[i][j]);
        }
    
    }
    
    printf("the largest element is:- ");
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
             if(a[i][j]>max){
         
                max = a[i][j];

             }
           
        }
    
    }
    printf(" %d ",max);
}


