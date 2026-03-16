#include<stdio.h>

int main(){
    
    int row=3;
    int col=3;
    int a[row][col];
  
    
    printf(" Enter the row & col size:- ");
    scanf("%d", &row, &col);
    
    printf(" Enter the array element \n");
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
        printf(" a[%d][%d] = ", i,j);
        scanf("%d", &a[i][j]);
        }
    
    }
    
    printf("the Matrix element is:- \n");
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            
        printf(" %d ",a[j][i]);
            
        }
        printf("\n");
    
    }
}


