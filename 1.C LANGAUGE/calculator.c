#include<stdio.h>

int add(int a, int b){
    return a+b;
}
int sub(int a, int b){
    return a-b;
}
int mul(int a, int b){
    return a*b;
}
int div(int a, int b){
    return a/b;
}
int mod(int a, int b){
    return a%b;
}

int ch;
int ans;
int a,b;
int main(){
do
{
printf(" Press 1 for + \n");
printf(" Press 2 for - \n");
printf(" Press 3 for * \n");
printf(" Press 4 for / \n");
printf(" Press 5 for % \n");
printf(" Press 0 for Exited \n");
printf(" Enter your choice \n");
scanf("%d", &ch);
if(ch==0){
    printf(" exited.....");
    break;
 }

printf("enter the first num:- ");
scanf("%d", &a);
printf("enter the sec num:- ");
scanf("%d", &b);

switch(ch){
    case 1:
    ans =add(a,b);
    printf("addition of %d and %d is %d....\n",a,b,ans);
    
    break;
    case 2:
    ans =sub(a,b);
    printf(" subtraction of %d and %d is %d....\n",a,b,ans);
    
    break;
    case 3:
    ans =mul(a,b);
    printf("Multiplication of %d and %d is %d....\n",a,b,ans);
    
    break;
    case 4:
    if (b == 0) {
    
    printf("Error: Division by zero is not allowed.\n");
                } 
    else {
    ans = div(a, b);
    printf("Result: %d / %d = %d\n", a, b, ans);
     }
     
    
    break;
    case 5:
     if (b == 0) {
     printf("Error: Modulus by zero is not allowed.\n");
    } else {
    ans = mod(a, b);
    printf("Result: %d %% %d = %d\n", a, b, ans);
    }
    
    break;
     default:
     printf("Invalid choice.....");
     
        }



    }while(ch!=0);

}