#include<stdio.h>


int main(){
	
	int num;
	int i;
	int prime=1;
	
	printf("enter the mnumber:- ");
	scanf("%d",&num);
	
	if(num<=1){
		printf("%d is not a primr number.... \n",num);
		
	}
	
	for(i=2; i<=num/2; i++){
		
		if(num %i ==0){
			prime=0;
			break;
		}
	}
	if(prime){
		printf(" %d is prime number... ",num);
	}
	else 
	printf(" %d is not a prime numner...",num);
		


	return 0;
	
}