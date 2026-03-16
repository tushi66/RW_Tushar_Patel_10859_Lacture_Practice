#include<stdio.h>

int main(){
    
    for(int i=1; i<=5; i++)
    {
        
       
        for(int j=1; j<=i; j++)
        {
            printf("%d", j);
        }
        
         for(int s=1; s<=5-i; s++)
        {
            printf(" ");
        }
        
         for(int s=1; s<=5-i; s++)
        {
            printf(" ");
        }
        for(int a=i; a>=1;a--)
        {
            printf("%d", a);
        }
        printf("\n");
    }
    
    
    return 0;
    
}