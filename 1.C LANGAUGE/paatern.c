// C Program to print the Floyd's Triangle
#include <stdio.h>

int main()
{
    int i,j;
 

    // outer loop to print all rows
    for (i=1 ; i <=5; i++)
    {
        for( int s=i; s<5; s++)
        {
            printf(" ");
        
        }
        for (int j=1; j<=i; j++) 
            {
                printf("%d", j);
            }

        // innter loop to print abphabet in each row
    
    
        printf("\n");
    }
    return 0;
}