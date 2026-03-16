#include<stdio.h>

int main(){
    
    for(int i=1; i<=5; i++)
    {
        
        for(int s=i; s<5; s++)
        {
            printf(" ");
        }
        
        for(int j=6-i; j<=5; j++)
        {
            printf("%d", j);
        }
        
        for(int a=5; a>6-i;a--)
        {
            printf("%d", a -1);
        }
        
        printf("\n");
    }
    
    
    return 0;
    
}