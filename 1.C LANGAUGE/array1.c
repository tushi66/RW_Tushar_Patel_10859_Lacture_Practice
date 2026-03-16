#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};  // Array of known length 5
    int length = 5;  // Length defined manually

    printf("Array elements:\n");
    for(int i = 0; i < length; i++) {
        printf("%d ", arr[i]);
    }

    printf("\nLength of the array is: %d\n", length);

    return 0;
}
