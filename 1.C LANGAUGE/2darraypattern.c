#include<stdio.h>

int main(){
    
    int row=5, col=5;
    int a[row][col];
    int sum=0;
    

    
   
    // printf("enter the array of coloum size:- \n");
    // scanf("%d", &col);
     
    printf("Enter the array A ele:- ");
     for(int i=0;i<row; i++){
       
        for(int j=0;j<col; j++){
        
        printf("a[%d][%d]:-", i,j);
        scanf("%d", &a[i][j]);
        }
     }
     
     for(int i=0;i<row; i++){
       
        for(int j=0;j<col; j++)
        { if(i==0 ||i==4 ||j==0 || j==4){
                        printf("%d",a[i][j]);
            }else printf(" ");
        }
        printf("\n");
     
     }
    
}