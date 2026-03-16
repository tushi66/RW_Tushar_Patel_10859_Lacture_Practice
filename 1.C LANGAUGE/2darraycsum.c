#include<stdio.h>

int main(){
    
    int row=4, col=4;
    int a[row][col];
    int b[row][col];
    int c[row][col];

    
    printf("enter the array of raw size:- \n");
    scanf("%d", &row);
    printf("enter the array of coloum size:- \n");
    scanf("%d", &col);
     
    printf("Enter the array A ele:- ");
     for(int i=0;i<row; i++){
       
        for(int j=0;j<col; j++){
        
        printf("a[%d][%d]:-", i,j);
        scanf("%d", &a[i][j]);
       }
      }
        
     printf("Enter the array B ele:- ");
     for(int i=0;i<row; i++){
       
        for(int j=0;j<col; j++){
        
        printf("a[%d][%d]:-", i,j);
        scanf("%d", &b[i][j]);
  
        }
      }
      
    
        for(int i=0;i<row; i++){
       
        for(int j=0;j<col; j++){
        
        c[i][j]=a[i][j]+b[i][j];
    
        }
    
    }  
    printf(" Array c is :- \n");
    for(int i=0;i<row; i++){
       
        for(int j=0;j<col; j++){
        
        printf("%d ",c[i][j]);
    
        }
     printf("\n");   
    }

    
    
}