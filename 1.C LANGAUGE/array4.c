#include<stdio.h>
int main(){
    int size=10;
    int a[size];
    int b[size];
    int c[size];
    int sum;
    float avg;
    
    printf("Enter the array size:- ");
    scanf("%d", &size);
    
    printf(" enter the array of element A:- ");
    
    for(int i=0;i<size; i++){
    
    printf("a[%d] = ",i);
    scanf("%d", &a[i]);
    
    }
    
    printf(" enter the array of element B:- ");
    
    for(int i=0;i<size; i++){
    
    printf("b[%d] = ",i);
    scanf("%d", &b[i]);
    
    }
    
    // Compute Array C = A + B
    for (int i = 0; i < size; i++) {
        c[i] = a[i] + b[i];
    }

    // Print Array C
    printf("Array C is: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", c[i]);
        // if (i < size - 1)
        //     printf(", ");
    }
    printf("\n");
}