#include<stdio.h>

int main(){
	
	int a,b,c;
	
	printf("enter the number a:- ");
	scanf("%d", &a); 
	
	printf("enter the number b:- ");
	scanf("%d", &b); 
	
	printf("enter the number c:- ");
	scanf("%d", &c);
	
	if(a>b){
		if(a>c){
			printf(" the lagest num is:- %d",a);
		}else
		
		printf(" the largest number is:- %d",c);
	
	} else if(b>c){
		printf("the largest num is:- %d",b);
		
		 } else
		
		printf(" the largest number is:- %d",c);
		

	
	return 0;
}