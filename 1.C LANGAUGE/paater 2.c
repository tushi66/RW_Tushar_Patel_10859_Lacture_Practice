// Online C compiler to run C program online
#include <stdio.h>

int main() {
    
    
    for (int i=1; i<=5; i++)
    {
        for (int s=i; s<5; s++)
        {
            printf(" ");
            
        }   
        for (int j=1; j<=i; j++)
        {
            printf("%d", j);
            
        }
        
        for(int b=i; b>1; b--)
        {
            printf("%d", b-1);
        }
        printf("\n");
    }
    return 0;
}