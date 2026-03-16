#include<stdio.h>

int main(){
    
    
    for(int i=1; i<=5; i++)
    {
        for(int j=1; j<=6-i; j++)
        {
            printf("%d", j);
        }
        
        for( int s=1; s<i; s++)
        
        {
        printf(" ");
    
        }
        for( int s=1; s<i; s++)
        
        {
        printf(" ");
    
        }
        for(int c=6-i;c>=1; c--)
        {
            printf("%d", c);
        }
        
    printf("\n");
    } 
    
   
    
    for(int k=1; k<=5; k++)
    {                                                                                                                    
        for(int a=1; a<=k; a++)
        {
            printf("%d", a);
        }
        
        for(int b=k; b<5; b++)
        {
            printf(" ");
            
        }
        for(int b=k; b<5; b++)
        {
            printf(" ");
            
        }
        for(int d=k; d>=1; d--)
        {
            printf("%d", d);
        }
        printf("\n");
    }
    
    
    return 0;
}