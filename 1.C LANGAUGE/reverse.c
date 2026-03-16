#include<stdio.h>

int r(int num){
	int rv=0;
	while(num!=0){
		
		int digit=num % 10;
		rv = rv* 10 + digit;
		num /= 10;
	}
	return rv;
}

int main(){
	
	int num, r2;
	
	printf("enter the the numerbs:- ");
	scanf("%d", &num);
	
	r2=r(num);
	
	printf("revse num is %d",r2);
	
	return 0;
}