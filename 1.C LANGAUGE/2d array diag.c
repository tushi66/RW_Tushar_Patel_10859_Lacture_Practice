#include<stdio.h>

int main(){
    
    int row=3, col=3;
    int a[row][col];
    int b[row][col];
    int c[row][col];
    int sum;
    
    printf("enter the array row size:- ");
    scanf("%d", &row);
    
    printf("enter the array col size:- ");
    scanf("%d", &col);
    
    printf(" enter the element A:- \n");
    for(int i=0; i<=row; i++){
        for(int j=0; j<=col; j++){
            
            printf(" a[%d][%d]= ",i,j);
            scanf("%d", &a[i][j]);
        }
    }
    
      for(int i=0; i<=row; i++){
        for(int j=0; j<=col; j++){
            if(i==j){
            
            printf(" the diagnaol value is... %d \n",a[i][j]);
            sum+=a[i][j];
         }
         
        }
      }
    printf(" the sum of the array %d", sum);
      
}

    
    
    // printf(" enter the element B:- \n");
    // for(int i=0; i<=row; i++){
    //     for(int j=0; j<=col; j++){
            
    //         printf(" a[%d][%d]= ",i,j);
    //         scanf("%d", &b[i][j]);
    //     }
    // }
    
    // for(int i=0; i<=row; i++){
    //     for(int j=0; j<=col; j++){
            
    //         c[i][j]=a[i][j]+b[i][j];
    //     }
    
    // }
    // printf(" C array is :- \n");
    // for(int i=0; i<=row; i++){
    //     for(int j=0; j<=col; j++){
            
    //         printf("%d ", c[i][j]);
    //     }
    // printf("\n");
    // }
  
    
    
