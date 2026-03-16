#include<stdio.h>

int main(){
    
    int row=4, col=4;
    int a[row][col];
    float sum=0;
    float avg;
    
    printf("enter the array of raw size:- \n");
    scanf("%d", &row);
    printf("enter the array of coloum size:- \n");
    scanf("%d", &col);
     
     for(int i=0;i<row; i++){
       
        for(int j=0;j<col; j++){
        
        printf("a[%d][%d]:-", i,j);
        scanf("%d", &a[i][j]);
  
        }

      }
        for(int i=0;i<row; i++){
       
        for(int j=0;j<col; j++){
        
        printf("%d", a[i][j]);
        sum+=a[i][j];
    
        }
    printf("\n");
    
    }  
    avg = sum / (row*col);
    printf("avarage of sum:- %f", avg);
    
    
}