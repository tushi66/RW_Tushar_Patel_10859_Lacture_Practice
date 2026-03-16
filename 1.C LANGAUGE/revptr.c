#include <stdio.h>

int main() {
    
    int size;
    int a[100]; 
    int *ptr = a;  
    int **pptr = &ptr;  
    int val;
    int ans;

    printf("Enter the array size: ");
    scanf("%d", &size);
    
    printf("Enter the array elements:\n");
    for (int i = 0; i < size; i++) {
        scanf("%d", *pptr + i);  
    }

    printf("Square of each element:\n");
    for (int i = 0; i < size; i++) {
        val = *(*pptr + i);  
        ans = val * val;
        printf("%d ", ans);
    }

    printf("\nReverse array elements:\n");
    for (int i = size - 1; i >= 0; i--) {
        val = *(*pptr + i);  
        ans = val * val;
        printf("%d ", ans);
    }

    printf("\n");

    return 0;
}
