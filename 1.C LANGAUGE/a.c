#include<stdio.h>

int main(){

	int x,y;
	int *p = &x;
	int *p1= &y;	
	int t;
	
	printf("entre the value x:- ");
	scanf("%d", &*p);
	
	printf("entre the value y:- ");
	scanf("%d", &*p1);

	
	printf("enter the before swaping x:- %d \n",*p);
	printf("enter the before swaping y:- %d \n",*p1);
	
		
	t=*p;
	*p=*p1;
	*p1=t;
	
	
	printf("enter the after swaping x:- %d \n",*p);
	printf("enter the after swaping y:- %d \n",*p1);
	
	
	
	return 0;
}